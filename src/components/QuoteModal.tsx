import { useState } from "react";
import { X, Send, User, Mail, Phone, MessageSquare, Building, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { usePhoneFormat } from "@/hooks/usePhoneFormat";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const QuoteModal = ({ isOpen, onClose, source = "home" }: QuoteModalProps) => {
  const { toast } = useToast();
  const phoneFormat = usePhoneFormat();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    if (field === "phone") {
      phoneFormat.handleChange(value);
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
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
      setFiles(prev => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
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

      // Inserir orçamento no banco
      const { data: quoteData, error: quoteError } = await supabase
        .from('quotes')
        .insert({
          full_name: formData.name.trim(),
          email: formData.email.trim(),
          phone: phoneFormat.getRawValue(),
          company: formData.company.trim() || null,
          project_description: formData.message.trim() || null,
          source: source
        })
        .select()
        .single();

      if (quoteError) throw quoteError;

      // Upload de arquivos se existirem
      let attachments: any[] = [];
      if (files.length > 0) {
        attachments = await Promise.all(
          files.map(file => uploadFile(file, quoteData.id))
        );
      }

      // Enviar email automático
      try {
        const { error: emailError } = await supabase.functions.invoke('send-quote-email', {
          body: {
            fullName: formData.name.trim(),
            email: formData.email.trim(),
            phone: phoneFormat.getRawValue(),
            company: formData.company.trim() || null,
            projectDescription: formData.message.trim() || null,
            attachments: attachments,
            source: source
          }
        });

        if (emailError) {
          console.error('Erro ao enviar email:', emailError);
        }
      } catch (emailError) {
        console.error('Erro na função de email:', emailError);
      }

      toast({
        title: "Orçamento enviado com sucesso!",
        description: "Recebemos sua solicitação. Entraremos em contato em até 24h!",
      });

      // Limpar formulário
      setFormData({ name: "", email: "", company: "", message: "" });
      phoneFormat.setValue("");
      setFiles([]);
      onClose();

    } catch (error) {
      console.error('Erro ao enviar orçamento:', error);
      toast({
        title: "Erro ao enviar orçamento",
        description: "Ocorreu um erro. Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background">
        <CardHeader className="relative pb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-4 top-4 p-2"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-2xl font-bold text-primary pr-12">
            Detalhes do Projeto
          </CardTitle>
          <CardDescription className="text-base">
            Conte-nos mais sobre seu projeto para oferecermos a melhor solução.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Nome Completo *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Telefone *
                </label>
                <Input
                  type="tel"
                  value={phoneFormat.value}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(11) 99999-9999"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Building className="w-4 h-4 text-primary" />
                  Empresa
                </label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Nome da empresa (opcional)"
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Descrição do Projeto (opcional)
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Descreva seu projeto: tipo de peça, material desejado, quantidade, prazo, especificações técnicas..."
                rows={4}
                className="resize-none"
              />
            </div>

            {/* File Upload - Compact Design */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                Anexar Arquivos (opcional)
              </label>
              
              <div
                className={`relative border-2 border-dashed rounded-lg p-3 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50 hover:bg-secondary/30'
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
                <div className="flex items-center justify-center gap-2">
                  <Upload className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">Arrastar ou clicar para anexar</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, DWG, JPG, PNG, DOC (máx. 5 arquivos)
                </p>
              </div>

              {/* File List - Compact */}
              {files.length > 0 && (
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-secondary/50 rounded border border-border/30 text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="w-3 h-3 text-primary" />
                        <span className="truncate">{file.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ({(file.size / 1024 / 1024).toFixed(1)} MB)
                        </span>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="h-6 w-6 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold text-foreground mb-2">📝 Informações importantes:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Descreva o tipo de usinagem necessária</li>
                <li>• Informe material, dimensões e tolerâncias</li>
                <li>• Mencione quantidade e prazo desejado</li>
                <li>• Anexe desenhos técnicos se disponível</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary-dark"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteModal;
