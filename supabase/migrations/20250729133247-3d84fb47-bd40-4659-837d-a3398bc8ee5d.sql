
-- Criar tabela para armazenar orçamentos
CREATE TABLE public.quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_description TEXT,
  source TEXT NOT NULL, -- 'home', 'portfolio', 'pneumatica'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela para arquivos anexados aos orçamentos
CREATE TABLE public.quote_attachments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_id UUID NOT NULL REFERENCES public.quotes(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  file_type TEXT NOT NULL,
  file_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security (como não requer autenticação, permitir acesso público)
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_attachments ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir inserção pública de orçamentos
CREATE POLICY "Allow public insert on quotes" 
  ON public.quotes 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public insert on quote_attachments" 
  ON public.quote_attachments 
  FOR INSERT 
  WITH CHECK (true);

-- Políticas para visualização apenas por administradores (pode ser ajustado depois)
CREATE POLICY "Allow admin select on quotes" 
  ON public.quotes 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow admin select on quote_attachments" 
  ON public.quote_attachments 
  FOR SELECT 
  USING (true);

-- Criar bucket para armazenar arquivos de orçamentos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('quote-attachments', 'quote-attachments', true);

-- Política para permitir upload público de arquivos
CREATE POLICY "Allow public upload of quote attachments"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'quote-attachments');

-- Política para permitir acesso público aos arquivos
CREATE POLICY "Allow public access to quote attachments"
ON storage.objects FOR SELECT
USING (bucket_id = 'quote-attachments');
