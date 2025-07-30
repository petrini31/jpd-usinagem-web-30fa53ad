
import { useEffect } from 'react';

const RobotsTxtRoute = () => {
  useEffect(() => {
    // Buscar o arquivo robots.txt da pasta public
    fetch('/robots.txt')
      .then(response => response.text())
      .then(content => {
        // Criar um novo documento com o conteúdo
        const newDoc = document.implementation.createHTMLDocument();
        newDoc.documentElement.innerHTML = `<head><meta http-equiv="Content-Type" content="text/plain; charset=utf-8"></head><body><pre>${content}</pre></body>`;
        
        // Substituir o documento atual
        document.open();
        document.write(content);
        document.close();
        
        // Definir o Content-Type correto
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Type';
        meta.content = 'text/plain; charset=utf-8';
        document.head.appendChild(meta);
      })
      .catch(error => {
        console.error('Erro ao carregar robots.txt:', error);
        document.body.innerHTML = 'Erro ao carregar robots.txt';
      });
  }, []);

  return null;
};

export default RobotsTxtRoute;
