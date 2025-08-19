
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

const BlogPreview = () => {
  const navigate = useNavigate();

  const featuredPosts = [
    {
      id: 1,
      title: "Como a JPD Usinagem pode melhorar a produção da sua empresa em Atibaia e região",
      excerpt: "Descubra como nossa expertise em usinagem CNC Atibaia, fresamento Bragança Paulista e torneamento pode otimizar seus processos industriais.",
      category: "empresa",
      date: "2024-01-15",
      readTime: "5 min",
      image: "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.webp",
      tags: ["Usinagem CNC Atibaia", "Produção"]
    },
    {
      id: 2,
      title: "Linha de Cilindros Pneumáticos: Otimize sua produção industrial em São Paulo",
      excerpt: "Conheça nossa linha completa de cilindros pneumáticos personalizados para automação industrial em SP, Bragança Paulista e Bom Jesus dos Perdões.",
      category: "pneumatica",
      date: "2024-01-10",
      readTime: "7 min",
      image: "/lovable-uploads/35e6299d-9a61-4325-acb4-7152297159c9.webp",
      tags: ["Cilindros Pneumáticos SP", "Automação"]
    },
    {
      id: 3,
      title: "Como a tecnologia CNC é utilizada para otimização de processos industriais",
      excerpt: "Entenda como a usinagem CNC revoluciona a precisão e eficiência na fabricação de peças industriais em toda região de São Paulo.",
      category: "tecnologia",
      date: "2024-01-08",
      readTime: "6 min",
      image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.webp",
      tags: ["CNC", "Tecnologia"]
    }
  ];

  const handleViewAllClick = () => {
    navigate('/blog');
    // Scroll para o topo da página /blog quando a navegação ocorrer
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="blog" className="py-12 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Blog <span className="text-red-600">JPD Usinagem</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl">
            Conteúdo especializado sobre usinagem CNC, pneumática industrial e tecnologias de manufatura.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border border-border/50 h-full flex flex-col">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <CardHeader className="flex-grow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <CardTitle className="text-lg group-hover:text-red-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            onClick={handleViewAllClick}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Ver Todos os Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
