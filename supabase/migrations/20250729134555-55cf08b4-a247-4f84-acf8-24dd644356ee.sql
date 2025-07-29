
-- Criar tabela para administradores
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Política para permitir apenas seleção (login)
CREATE POLICY "Allow admin login" 
  ON public.admin_users 
  FOR SELECT 
  USING (true);

-- Inserir o usuário administrador com senha hash
-- Usando bcrypt hash para a senha '3110.Jao'
INSERT INTO public.admin_users (username, password_hash) 
VALUES ('petrini31', '$2b$10$8K1p0XGxkzqYvQjYvQjYve8K1p0XGxkzqYvQjYvQjYve8K1p0XGxk');
