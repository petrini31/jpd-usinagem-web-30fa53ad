import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Home, RotateCcw } from 'lucide-react';
import { ImageUploader } from '@/components/admin/ImageUploader';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const ADMIN_PASSWORD = 'jpd2024'; // Simple password protection

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const { images, resetAllImages } = useAdmin();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Acesso autorizado",
        description: "Bem-vindo ao painel administrativo!"
      });
    } else {
      toast({
        title: "Senha incorreta",
        description: "Verifique a senha e tente novamente.",
        variant: "destructive"
      });
    }
  };

  const handleResetAll = () => {
    resetAllImages();
    toast({
      title: "Reset completo",
      description: "Todas as imagens foram restauradas ao padrão."
    });
  };

  const groupedImages = images.reduce((acc, image) => {
    if (!acc[image.section]) {
      acc[image.section] = [];
    }
    acc[image.section].push(image);
    return acc;
  }, {} as Record<string, typeof images>);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Painel Administrativo</CardTitle>
            <p className="text-sm text-muted-foreground">
              Digite a senha para acessar o gerenciamento de imagens
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Acessar Painel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">Painel Administrativo - JPD Usinagem</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              size="sm"
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Site
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleResetAll}
              size="sm"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Geral
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Gerenciamento de Imagens</h2>
          <p className="text-muted-foreground">
            Faça upload de suas próprias imagens para personalizar o site. 
            As alterações são salvas automaticamente no navegador.
          </p>
        </div>

        <Tabs defaultValue={Object.keys(groupedImages)[0]} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            {Object.keys(groupedImages).map((section) => (
              <TabsTrigger key={section} value={section}>
                {section} ({groupedImages[section].length})
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(groupedImages).map(([section, sectionImages]) => (
            <TabsContent key={section} value={section} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectionImages.map((image) => (
                  <ImageUploader
                    key={image.id}
                    imageId={image.id}
                    title={image.title}
                    currentUrl={image.currentUrl}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}