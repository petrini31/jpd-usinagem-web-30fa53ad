
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Eye, Download, LogOut, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Quote {
  id: string;
  full_name: string;
  company: string | null;
  email: string;
  phone: string;
  project_description: string | null;
  source: string;
  created_at: string;
  attachments?: QuoteAttachment[];
}

interface QuoteAttachment {
  id: string;
  file_name: string;
  file_size: number;
  file_url: string;
  file_type: string;
}

const AdminView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('username', username)
        .single();

      if (error || !data) {
        throw new Error('Usuário não encontrado');
      }

      // Por simplicidade, vamos verificar a senha diretamente (em produção, use hash)
      if (password === '3110.Jao') {
        setIsLoggedIn(true);
        loadQuotes();
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo ao painel administrativo.",
        });
      } else {
        throw new Error('Senha incorreta');
      }
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Usuário ou senha incorretos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadQuotes = async () => {
    try {
      const { data: quotesData, error: quotesError } = await supabase
        .from('quotes')
        .select('*')
        .order('created_at', { ascending: false });

      if (quotesError) throw quotesError;

      // Carregar anexos para cada orçamento
      const quotesWithAttachments = await Promise.all(
        quotesData.map(async (quote) => {
          const { data: attachments } = await supabase
            .from('quote_attachments')
            .select('*')
            .eq('quote_id', quote.id);

          return { ...quote, attachments: attachments || [] };
        })
      );

      setQuotes(quotesWithAttachments);
    } catch (error) {
      console.error('Erro ao carregar orçamentos:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os orçamentos.",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatPhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    return phone;
  };

  const downloadFile = async (attachment: QuoteAttachment) => {
    try {
      const { data } = await supabase.storage
        .from('quote-attachments')
        .download(attachment.file_url);

      if (data) {
        const url = URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = attachment.file_name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erro ao baixar arquivo:', error);
      toast({
        title: "Erro",
        description: "Não foi possível baixar o arquivo.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              Painel Administrativo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Usuário</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Digite seu usuário"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Senha</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary-dark"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Orçamentos Recebidos</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Origem</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Anexos</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotes.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell className="font-medium">{quote.full_name}</TableCell>
                    <TableCell>{quote.company || "-"}</TableCell>
                    <TableCell>{quote.email}</TableCell>
                    <TableCell>{formatPhone(quote.phone)}</TableCell>
                    <TableCell>
                      <Badge variant={quote.source === 'home' ? 'default' : 'secondary'}>
                        {quote.source === 'home' ? 'Site' : quote.source === 'portfolio' ? 'Portfólio' : 'Pneumática'}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(quote.created_at)}</TableCell>
                    <TableCell>
                      {quote.attachments && quote.attachments.length > 0 ? (
                        <Badge variant="outline">{quote.attachments.length} arquivo(s)</Badge>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedQuote(quote)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Ver
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Detalhes do Orçamento</DialogTitle>
                          </DialogHeader>
                          {selectedQuote && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <strong>Nome:</strong> {selectedQuote.full_name}
                                </div>
                                <div>
                                  <strong>Empresa:</strong> {selectedQuote.company || "-"}
                                </div>
                                <div>
                                  <strong>Email:</strong> {selectedQuote.email}
                                </div>
                                <div>
                                  <strong>Telefone:</strong> {formatPhone(selectedQuote.phone)}
                                </div>
                                <div>
                                  <strong>Origem:</strong> {selectedQuote.source}
                                </div>
                                <div>
                                  <strong>Data:</strong> {formatDate(selectedQuote.created_at)}
                                </div>
                              </div>
                              
                              {selectedQuote.project_description && (
                                <div>
                                  <strong>Descrição do Projeto:</strong>
                                  <p className="mt-2 p-3 bg-secondary rounded-lg">
                                    {selectedQuote.project_description}
                                  </p>
                                </div>
                              )}

                              {selectedQuote.attachments && selectedQuote.attachments.length > 0 && (
                                <div>
                                  <strong>Arquivos Anexados:</strong>
                                  <div className="mt-2 space-y-2">
                                    {selectedQuote.attachments.map((attachment) => (
                                      <div key={attachment.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                        <div className="flex items-center gap-2">
                                          <FileText className="w-4 h-4" />
                                          <span className="font-medium">{attachment.file_name}</span>
                                          <span className="text-sm text-muted-foreground">
                                            ({(attachment.file_size / 1024 / 1024).toFixed(2)} MB)
                                          </span>
                                        </div>
                                        <Button
                                          size="sm"
                                          onClick={() => downloadFile(attachment)}
                                        >
                                          <Download className="w-4 h-4 mr-1" />
                                          Baixar
                                        </Button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminView;
