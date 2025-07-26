
import { useState, useEffect } from "react";
import { Upload, Save, Trash2, Plus, Eye, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Admin = () => {
  const { toast } = useToast();
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    image: ''
  });

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    const savedItems = localStorage.getItem('portfolioItems');
    if (savedItems) {
      setPortfolioItems(JSON.parse(savedItems));
    } else {
      // Dados iniciais padrão
      const defaultItems = [
        { id: 1, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400&h=300", title: "Peça CNC Complexa", description: "Componente aeroespacial de alta precisão" },
        { id: 2, image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400&h=300", title: "Sistema Pneumático", description: "Cilindro pneumático personalizado" },
        { id: 3, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300", title: "Ferramental Industrial", description: "Molde de injeção de precisão" },
      ];
      setPortfolioItems(defaultItems);
      localStorage.setItem('portfolioItems', JSON.stringify(defaultItems));
    }
  }, []);

  // Salvar no localStorage
  const saveToStorage = (items: PortfolioItem[]) => {
    localStorage.setItem('portfolioItems', JSON.stringify(items));
    toast({
      title: "Alterações salvas!",
      description: "As mudanças foram aplicadas ao portfólio.",
    });
  };

  // Upload de imagem
  const handleImageUpload = (file: File, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      // Salvar imagem no localStorage (simulando upload)
      const imageKey = `portfolio_image_${Date.now()}`;
      localStorage.setItem(imageKey, result);
      callback(result);
    };
    reader.readAsDataURL(file);
  };

  // Adicionar novo item
  const handleAddItem = () => {
    if (!newItem.title || !newItem.description) {
      toast({
        title: "Erro",
        description: "Preencha título e descrição.",
        variant: "destructive"
      });
      return;
    }

    const newId = Math.max(...portfolioItems.map(item => item.id), 0) + 1;
    const updatedItems = [...portfolioItems, {
      id: newId,
      ...newItem
    }];
    
    setPortfolioItems(updatedItems);
    saveToStorage(updatedItems);
    setNewItem({ title: '', description: '', image: '' });
    setIsAddingNew(false);
  };

  // Atualizar item existente
  const handleUpdateItem = () => {
    if (!editingItem) return;

    const updatedItems = portfolioItems.map(item => 
      item.id === editingItem.id ? editingItem : item
    );
    
    setPortfolioItems(updatedItems);
    saveToStorage(updatedItems);
    setEditingItem(null);
  };

  // Remover item
  const handleDeleteItem = (id: number) => {
    const updatedItems = portfolioItems.filter(item => item.id !== id);
    setPortfolioItems(updatedItems);
    saveToStorage(updatedItems);
  };

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={goBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Site
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">JPD Usinagem - Admin</h1>
                <p className="text-muted-foreground">Gerenciamento do Portfólio</p>
              </div>
            </div>
            <Button 
              onClick={() => setIsAddingNew(true)}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Adicionar Item
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "https://via.placeholder.com/400x300"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="h-8 w-8 p-0"
                    onClick={() => setSelectedImage(item)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="destructive" 
                    className="h-8 w-8 p-0"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {item.description}
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setEditingItem(item)}
                  className="w-full"
                >
                  Editar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Modal para adicionar novo item */}
      <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
        <DialogContent className="max-w-md">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Adicionar Novo Item</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">Título</label>
              <Input
                value={newItem.title}
                onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                placeholder="Digite o título"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Descrição</label>
              <Textarea
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                placeholder="Digite a descrição"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Imagem</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleImageUpload(file, (url) => {
                      setNewItem({...newItem, image: url});
                    });
                  }
                }}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary-dark"
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddingNew(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddItem}>
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal para editar item */}
      <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
        <DialogContent className="max-w-md">
          {editingItem && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Editar Item</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">Título</label>
                <Input
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                  placeholder="Digite o título"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descrição</label>
                <Textarea
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                  placeholder="Digite a descrição"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Imagem</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleImageUpload(file, (url) => {
                        setEditingItem({...editingItem, image: url});
                      });
                    }
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary-dark"
                />
                {editingItem.image && (
                  <img 
                    src={editingItem.image} 
                    alt="Preview" 
                    className="mt-2 w-full h-32 object-cover rounded"
                  />
                )}
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setEditingItem(null)}>
                  Cancelar
                </Button>
                <Button onClick={handleUpdateItem}>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de visualização */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0 shadow-none">
          <div className="relative bg-background rounded-lg overflow-hidden shadow-2xl">
            <DialogClose className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background rounded-full p-2 transition-colors">
              <X className="w-4 h-4" />
            </DialogClose>
            
            {selectedImage && (
              <>
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
                
                <div className="p-6 border-t border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedImage.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
