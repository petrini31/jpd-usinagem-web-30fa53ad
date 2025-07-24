import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, X, Check } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  imageId: string;
  title: string;
  currentUrl: string;
}

export function ImageUploader({ imageId, title, currentUrl }: ImageUploaderProps) {
  const { updateImage, resetImage, getImageUrl } = useAdmin();
  const { toast } = useToast();
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const customUrl = getImageUrl(imageId);
  const hasCustomImage = customUrl !== currentUrl;

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Erro",
        description: "Por favor, selecione apenas arquivos de imagem.",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "Erro",
        description: "A imagem deve ter no máximo 5MB.",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleApply = () => {
    if (preview) {
      updateImage(imageId, preview);
      setPreview(null);
      toast({
        title: "Sucesso",
        description: "Imagem atualizada com sucesso!"
      });
    }
  };

  const handleReset = () => {
    resetImage(imageId);
    setPreview(null);
    toast({
      title: "Resetado",
      description: "Imagem restaurada para o padrão."
    });
  };

  const displayUrl = preview || customUrl;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Image */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Imagem Atual:</p>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src={displayUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
            {hasCustomImage && !preview && (
              <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                <Check className="w-3 h-3" />
              </div>
            )}
          </div>
        </div>

        {/* Upload Area */}
        <div 
          className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
            isDragging 
              ? 'border-primary bg-primary/5' 
              : 'border-muted-foreground/25 hover:border-primary/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Arraste uma imagem ou clique para selecionar
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {preview && (
            <Button onClick={handleApply} size="sm" className="flex-1">
              <Check className="w-4 h-4 mr-1" />
              Aplicar
            </Button>
          )}
          {preview && (
            <Button 
              onClick={() => setPreview(null)} 
              variant="outline" 
              size="sm"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
          {hasCustomImage && !preview && (
            <Button 
              onClick={handleReset} 
              variant="outline" 
              size="sm"
              className="flex-1"
            >
              Resetar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}