
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Globe, MapPin } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Como a JPD Usinagem pode melhorar a produção da sua empresa em Atibaia e região",
      excerpt: "Descubra como nossa expertise em usinagem CNC Atibaia, fresamento Bragança Paulista e torneamento pode otimizar seus processos industriais.",
      category: "empresa",
      date: "2024-01-15",
      readTime: "5 min",
      language: "pt",
      image: "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.png",
      tags: ["Usinagem CNC Atibaia", "Produção", "Otimização"]
    },
    {
      id: 2,
      title: "Linha de Cilindros Pneumáticos: Otimize sua produção industrial em São Paulo",
      excerpt: "Conheça nossa linha completa de cilindros pneumáticos personalizados para automação industrial em SP, Bragança Paulista e Bom Jesus dos Perdões.",
      category: "pneumatica",
      date: "2024-01-10",
      readTime: "7 min",
      language: "pt",
      image: "/lovable-uploads/35e6299d-9a61-4325-acb4-7152297159c9.png",
      tags: ["Cilindros Pneumáticos SP", "Automação", "Pneumática"]
    },
    {
      id: 3,
      title: "Como a tecnologia CNC é utilizada para otimização de processos industriais",
      excerpt: "Entenda como a usinagem CNC revoluciona a precisão e eficiência na fabricação de peças industriais em toda região de São Paulo.",
      category: "tecnologia",
      date: "2024-01-08",
      readTime: "6 min",
      language: "pt",
      image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png",
      tags: ["CNC", "Tecnologia", "Processos"]
    },
    {
      id: 4,
      title: "Usinagem CNC no Setor Automotivo: Precisão para a indústria em SP",
      excerpt: "Peças para motores, transmissões e sistemas automotivos fabricadas com usinagem CNC de alta precisão em São Paulo e região.",
      category: "setores",
      date: "2024-01-05",
      readTime: "8 min",
      language: "pt",
      image: "/lovable-uploads/c389b1c3-66fe-4964-8cf6-c6b4966a9e60.png",
      tags: ["Usinagem Automotiva", "CNC São Paulo", "Setor Automotivo"]
    },
    {
      id: 5,
      title: "Usinagem CNC na Indústria Farmacêutica: Componentes de alta precisão",
      excerpt: "Fabricação de componentes para equipamentos farmacêuticos com padrões rigorosos de qualidade e limpeza em Atibaia e região.",
      category: "setores",
      date: "2024-01-03",
      readTime: "7 min",
      language: "pt",
      image: "/lovable-uploads/dec3d1a6-b3e5-42f1-b536-d50f5322c31c.png",
      tags: ["Usinagem Farmacêutica", "Precisão", "Qualidade"]
    },
    {
      id: 6,
      title: "Usinagem CNC no Setor Agrícola: Peças para implementos em Bragança Paulista",
      excerpt: "Componentes para tratores, colheitadeiras e implementos agrícolas fabricados com tecnologia CNC em Bragança Paulista.",
      category: "setores",
      date: "2023-12-28",
      readTime: "6 min",
      language: "pt",
      image: "/lovable-uploads/407e4db0-5aff-4ff1-a425-6473a2ccc334.png",
      tags: ["Usinagem Agrícola", "Implementos", "Bragança Paulista"]
    },
    {
      id: 7,
      title: "Usinagem CNC na Indústria Alimentícia: Máquinas de processamento",
      excerpt: "Peças em aço inoxidável para máquinas de processamento alimentício com acabamento sanitário em São Paulo.",
      category: "setores",
      date: "2023-12-25",
      readTime: "5 min",
      language: "pt",
      image: "/lovable-uploads/248ec544-caa9-4ba0-8c08-898392a2d8d2.png",
      tags: ["Usinagem Alimentícia", "Aço Inoxidável", "Sanitário"]
    },
    {
      id: 8,
      title: "Engenharia de Produção: Otimização de processos de usinagem CNC",
      excerpt: "Análise técnica dos métodos de otimização de produção através de usinagem CNC e ferramentaria especializada.",
      category: "engenharia",
      date: "2023-12-20",
      readTime: "10 min",
      language: "pt",
      image: "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png",
      tags: ["Engenharia Produção", "Otimização", "Métodos"]
    },
    {
      id: 9,
      title: "CNC Machining Services in São Paulo: Precision Manufacturing Solutions",
      excerpt: "Discover our precision CNC machining services in São Paulo, Brazil. High-quality components for automotive, aerospace and industrial sectors.",
      category: "internacional",
      date: "2023-12-18",
      readTime: "8 min",
      language: "en",
      image: "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png",
      tags: ["CNC Machining", "São Paulo Brazil", "Precision Manufacturing"]
    },
    {
      id: 10,
      title: "Pneumatic Cylinders Manufacturing in Brazil: Custom Industrial Solutions",
      excerpt: "Custom pneumatic cylinders manufacturing in São Paulo, Brazil. Industrial automation components for global markets.",
      category: "internacional",
      date: "2023-12-15",
      readTime: "7 min",
      language: "en",
      image: "/lovable-uploads/a029f8f6-79e0-4060-9302-8e14e10ecbf0.png",
      tags: ["Pneumatic Cylinders", "Brazil Manufacturing", "Industrial Automation"]
    },
    {
      id: 11,
      title: "Usinagem CNC na Indústria Aeroespacial: Componentes críticos de alta precisão",
      excerpt: "Fabricação de peças aeroespaciais com materiais especiais como titânio e superligas em São Paulo.",
      category: "setores",
      date: "2023-12-12",
      readTime: "9 min",
      language: "pt",
      image: "/lovable-uploads/9dd0ff85-d042-4379-b43c-18bfe0d638de.png",
      tags: ["Usinagem Aeroespacial", "Titânio", "Alta Precisão"]
    },
    {
      id: 12,
      title: "Engenharia de Processos: Implementação de células de manufatura CNC",
      excerpt: "Metodologia para implementação de células de manufatura flexível com tecnologia CNC em ambientes industriais.",
      category: "engenharia",
      date: "2023-12-10",
      readTime: "12 min",
      language: "pt",
      image: "/lovable-uploads/e95a555a-a0a9-47b3-914e-3462320aeffb.png",
      tags: ["Engenharia Processos", "Células Manufatura", "CNC"]
    }
  ];

  const categories = [
    { id: "all", label: "Todos os Posts", count: blogPosts.length },
    { id: "empresa", label: "Empresa", count: blogPosts.filter(p => p.category === "empresa").length },
    { id: "pneumatica", label: "Pneumática", count: blogPosts.filter(p => p.category === "pneumatica").length },
    { id: "tecnologia", label: "Tecnologia", count: blogPosts.filter(p => p.category === "tecnologia").length },
    { id: "setores", label: "Setores Industriais", count: blogPosts.filter(p => p.category === "setores").length },
    { id: "engenharia", label: "Engenharia", count: blogPosts.filter(p => p.category === "engenharia").length },
    { id: "internacional", label: "International", count: blogPosts.filter(p => p.category === "internacional").length },
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const serviceAreas = [
    "Usinagem CNC Atibaia",
    "Usinagem CNC Bragança Paulista", 
    "Usinagem CNC São Paulo",
    "Usinagem CNC Guarulhos",
    "Fresamento Atibaia",
    "Torneamento Bragança Paulista",
    "Cilindros Pneumáticos São Paulo",
    "Ferramentaria Atibaia"
  ];

  return (
    <section id="blog" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-16 text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Blog <span className="text-primary">JPD Usinagem</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl">
            Conteúdo especializado sobre usinagem CNC, pneumática industrial e tecnologias de manufatura. 
            Atendemos Atibaia, Bragança Paulista, São Paulo e toda região com expertise técnica.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm"
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border border-border/50 h-full flex flex-col">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  {post.language === "en" && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <Globe className="w-3 h-3 mr-1" />
                      EN
                    </Badge>
                  )}
                </div>
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
                
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
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
                <Button variant="outline" className="w-full">
                  Ler mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas Section */}
        <div className="bg-secondary/30 rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Áreas de Atuação
          </h3>
          <p className="text-muted-foreground mb-4">
            Atendemos diversas cidades da região com nossos serviços especializados:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {serviceAreas.map((area, index) => (
              <Badge key={index} variant="secondary" className="justify-center py-2">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
