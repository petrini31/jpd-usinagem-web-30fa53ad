import { useState } from "react";
import { Upload, FileText, Send, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    description: '',
    deadline: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Orçamento solicitado!",
      description: "Recebemos sua solicitação. Entraremos em contato em até 24h!",
    });
    
    // Limpar formulário
    setFormData({ 
      name: '', email: '', phone: '', company: '', 
      project: '', description: '', deadline: '' 
    });
    setFiles([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
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
                {/* Personal Information */}
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
                      Empresa
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
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="h-12 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="project" className="block text-sm font-semibold text-foreground">
                      Tipo de Projeto (opcional)
                    </label>
                    <Input
                      id="project"
                      name="project"
                      type="text"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="Ex: Usinagem de peças, Fabricação de máquinas..."
                      className="h-12 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-semibold text-foreground">
                    Descrição Resumida do Projeto (opcional)
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Descreva brevemente seu projeto: materiais, dimensões, acabamentos, quantidades..."
                    className="border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>


                {/* File Upload */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-foreground">
                    Anexar Arquivos (Desenhos, Projetos, Fotos)
                  </label>
                  
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
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
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                        <Upload className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-foreground">
                          Arraste e solte seus arquivos aqui
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          ou clique para selecionar arquivos
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF, DWG, JPG, PNG, DOC (máx. 5 arquivos)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* File List */}
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
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300 text-lg py-6 shadow-strong animate-pulse-glow"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Enviar Solicitação de Orçamento
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