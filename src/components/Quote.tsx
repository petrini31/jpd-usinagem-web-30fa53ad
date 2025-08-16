import { useState } from "react";
import { Upload, FileText, Send, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { usePhoneFormat } from "@/hooks/usePhoneFormat";

const Quote = () => {
  const { toast } = useToast();
  const phoneFormat = usePhoneFormat();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const sendToN8nWebhook = async (formData: any, files: File[]) => {
    // URL FINAL E CORRETA
    const webhookUrl = 'https://n8npetrini.duckdns.org/webhook/8e0abce2-a045-4611-a5e9-2522e35d822c';

    const formDataToSend = new FormData();

    // Mapeia os campos de texto
    formDataToSend.append('nome_completo', formData.name.trim());
    formDataToSend.append('empresa', formData.company.trim());
    formDataToSend.append('email', formData.email.trim());
    formDataToSend.append('telefone', phoneFormat.getRawValue());
    formDataToSend.append('descricao_projeto', formData.description.trim());

    // Adiciona o anexo APENAS se ele existir
    if (files.length > 0) {
      files.forEach(file => {
        formDataToSend.append('data', file); 
      });
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Webhook respondeu com status: ${response.status}`);
      }

      return { success: true, status: response.status };
    } catch (error) {
      console.error('Erro no envio para o webhook n8n:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validar campos obrigatórios
      if (!formData.name.trim() || !formData.email.trim() || !phoneFormat.value.trim()) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha nome, email e telefone.",
          variant: "destructive",
        });
        return;
      }

      // 🎯 PRIORIDADE MÁXIMA: Enviar para webhook n8n PRIMEIRO
      console.log('🚀 INICIANDO envio PRIORITÁRIO para webhook n8n...');
      await sendToN8nWebhook(formData, files);
      console.log('✅ Webhook n8n enviado com SUCESSO (PRIORIDADE)');

      // Só depois tentar salvar no banco de dados
      let quoteData = null;
      try {
        const { data, error: quoteError } = await supabase
          .from('quotes')
          .insert({
            full_name: formData.name.trim(),
            email: formData.email.trim(),
            phone: phoneFormat.getRawValue(),
            company: formData.company.trim() || null,
            project_description: formData.description.trim() || null,
            source: 'home'
          })
          .select()
          .single();

        if (quoteError) throw quoteError;
        quoteData = data;
        console.log('✅ Dados salvos no banco com sucesso');
      } catch (dbError) {
        console.error('⚠️ Erro no banco (não crítico, webhook já enviado):', dbError);
      }

      // Upload de arquivos se existirem e se o banco funcionou
      let attachments: any[] = [];
      if (files.length > 0 && quoteData) {
        try {
          attachments = await Promise.all(
            files.map(file => uploadFile(file, quoteData.id))
          );
        } catch (uploadError) {
          console.error('⚠️ Erro no upload de arquivos (não crítico):', uploadError);
        }
      }

      // Tentar enviar email automático (não crítico)
      if (quoteData) {
        try {
          const { error: emailError } = await supabase.functions.invoke('send-quote-email', {
            body: {
              fullName: formData.name.trim(),
              email: formData.email.trim(),
              phone: phoneFormat.getRawValue(),
              company: formData.company.trim() || null,
              projectDescription: formData.description.trim() || null,
              attachments: attachments,
              source: 'home'
            }
          });

          if (emailError) {
            console.error('⚠️ Erro ao enviar email (não crítico):', emailError);
          }
        } catch (emailError) {
          console.error('⚠️ Erro na função de email (não crítico):', emailError);
        }
      }

      // Sucesso - mostrar mensagem positiva
      toast({
        title: "Orçamento solicitado!",
        description: "Recebemos sua solicitação. Entraremos em contato em até 24h!",
      });
      
      // Limpar formulário
      setFormData({ 
        name: '', email: '', company: '', description: ''
      });
      phoneFormat.setValue("");
      setFiles([]);

    } catch (error) {
      console.error('❌ ERRO CRÍTICO - Webhook n8n falhou:', error);
      toast({
        title: "Erro ao enviar orçamento",
        description: "Falha na comunicação. Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const uploadFile = async (file: File, quoteId: string) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${quoteId}/${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('quote-attachments')
      .upload(fileName, file);

    if (error) throw error;

    // Salvar informações do arquivo na tabela
    const { error: dbError } = await supabase
      .from('quote_attachments')
      .insert({
        quote_id: quoteId,
        file_name: file.name,
        file_size: file.size,
        file_type: file.type,
        file_url: data.path
      });

    if (dbError) throw dbError;

    return {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: data.path
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'phone') {
      phoneFormat.handleChange(e.target.value);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 5)); // Max 5 files
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 5)); // Max 5 files
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <section id="orcamento" className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float will-change-transform"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float will-change-transform" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Solicite seu <span className="text-transparent bg-clip-text bg-gradient-accent">Orçamento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Envie-nos os detalhes do seu projeto e receba um orçamento personalizado em até 24 horas. 
            Nossa equipe está pronta para transformar suas ideias em realidade com precisão e qualidade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-strong border-border/50 backdrop-blur-sm bg-card/80 animate-slide-up">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-foreground flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                Detalhes do Projeto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="h-12 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground">
                      Empresa (opcional)
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa"
                      className="h-12 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="h-12 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={phoneFormat.value}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="h-12 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-semibold text-foreground">
                    Descrição do Projeto (opcional)
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto: materiais, dimensões, acabamentos, quantidades..."
                    className="border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-foreground">
                    Anexar Arquivos (opcional)
                  </label>
                  
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-4 text-center transition-all duration-300 ${
                      dragActive 
                        ? 'border-primary bg-primary/10 scale-102' 
                        : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.dwg,.jpg,.jpeg,.png,.doc,.docx"
                      onChange={handleFileSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                        <Upload className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-foreground">
                          Desenhos, Projetos, Fotos
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Arraste arquivos ou clique para selecionar
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, DWG, JPG, PNG, DOC (máx. 5 arquivos)
                        </p>
                      </div>
                    </div>
                  </div>

                  {files.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Arquivos selecionados:</p>
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-border/50">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                                <FileText className="w-4 h-4 text-primary-foreground" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">{file.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300 text-lg py-6 shadow-strong"
                >
                  <Send className="w-5 h-5 mr-3" />
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação de Orçamento"}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Resposta em até 24 horas</span>
                  </div>
                  <p>
                    Ao enviar, você aceita que entremos em contato via e-mail ou telefone para esclarecer detalhes do projeto.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Quote;
