import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe, MapPin, Search, Share2, ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import OptimizedImage from "./OptimizedImage";

const BlogEnhanced = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "Como a JPD Usinagem pode melhorar a produção da sua empresa em Atibaia e região",
      excerpt: "Descubra como nossa expertise em usinagem CNC Atibaia, fresamento Bragança Paulista e torneamento pode otimizar seus processos industriais.",
      content: `A JPD Usinagem CNC representa a vanguarda da precisão industrial em Atibaia e toda região metropolitana de São Paulo. Nossa empresa consolidou-se como referência absoluta em soluções de usinagem de alta precisão, atendendo desde pequenas empresas locais até grandes corporações multinacionais que demandam excelência técnica incomparável.

Nossa trajetória de mais de uma década no mercado nos permitiu desenvolver metodologias proprietárias que revolucionam os processos produtivos tradicionais. Utilizamos equipamentos CNC de última geração, com tecnologia alemã e japonesa, que garantem tolerâncias microscópicas e acabamentos superficiais superiores aos padrões internacionais mais rigorosos.

Em Atibaia, nossa presença estratégica permite atendimento diferenciado às empresas da região. Oferecemos não apenas serviços de usinagem, mas consultoria técnica completa para otimização de processos. Nossa equipe de engenheiros especializados analisa cada projeto individualmente, propondo soluções inovadoras que reduzem custos e aumentam a produtividade.

Os serviços especializados que oferecemos incluem:

• Usinagem CNC de ultra-precisão em materiais nobres como titânio, inconel e superligas
• Fresamento 5 eixos simultâneos para geometrias complexas
• Torneamento CNC com controle de qualidade dimensional em tempo real
• Retificação cilíndrica e plana com acabamentos Ra 0.1
• Electroerosão a fio e por penetração para ferramentaria
• Soldagem especializada em atmosfera controlada
• Tratamentos térmicos e superficiais personalizados

Nossa expertise abrange múltiplos setores industriais. No setor automotivo, desenvolvemos componentes críticos para motores de alta performance. Na indústria aeroespacial, fabricamos peças que atendem às certificações mais exigentes. Para o setor farmacêutico, garantimos padrões de limpeza e precisão que atendem às normas GMP mais rigorosas.

A localização estratégica em Bom Jesus dos Perdões, com fácil acesso às principais rodovias da região, permite atendimento ágil para Atibaia, Bragança Paulista, Campinas, Jundiaí, Guarulhos e toda Grande São Paulo. Nosso sistema logístico integrado garante entregas pontuais e rastreamento completo de pedidos.

Para empresas em Atibaia que buscam parceiros tecnológicos confiáveis, a JPD oferece muito mais que usinagem convencional. Oferecemos engenharia simultânea, desenvolvimento de produtos, prototipagem rápida e industrialização de componentes complexos. Nossa filosofia é ser uma extensão do departamento de engenharia de nossos clientes.`,
      category: "empresa",
      readTime: "5 min",
      language: "pt",
      image: "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.png",
      tags: ["Usinagem CNC Atibaia", "Produção", "Otimização"],
      relatedPosts: [3, 4, 8]
    },
    {
      id: 2,
      title: "Linha de Cilindros Pneumáticos: Otimize sua produção industrial em São Paulo",
      excerpt: "Conheça nossa linha completa de cilindros pneumáticos personalizados para automação industrial em SP, Bragança Paulista e Bom Jesus dos Perdões.",
      content: `A automação pneumática representa o futuro da manufatura inteligente, e nossa linha de cilindros pneumáticos personalizados posiciona sua empresa na vanguarda tecnológica. Com sede estratégica em Bom Jesus dos Perdões, desenvolvemos soluções pneumáticas que revolucionam linhas de produção em toda região metropolitana de São Paulo.

Nossa expertise em pneumática industrial abrange desde projetos conceituais até a implementação completa de sistemas automatizados. Cada cilindro pneumático é desenvolvido especificamente para sua aplicação, considerando fatores como força requerida, velocidade de operação, ambiente de trabalho e ciclos de vida útil.

A linha completa de cilindros pneumáticos JPD inclui:

• Cilindros de dupla ação com hastes tratadas e cromadas
• Cilindros de simples ação para aplicações específicas
• Cilindros com amortecimento pneumático integrado
• Cilindros para salas limpas com vedações especiais
• Cilindros em aço inoxidável AISI 316L para indústria alimentícia
• Cilindros de alta pressão para aplicações pesadas
• Cilindros compactos para espaços reduzidos
• Cilindros rotativos para movimentos angulares precisos

Nossa engenharia pneumática utiliza simulação computacional avançada para otimizar o desempenho de cada sistema. Através de software especializado, modelamos o comportamento dinâmico dos cilindros, prevendo sua performance em condições reais de operação. Isso nos permite garantir eficiência energética máxima e vida útil estendida.

No setor automotivo, nossos cilindros pneumáticos são utilizados em linhas de montagem robotizadas, garantindo precisão e repetibilidade em processos críticos. Para a indústria farmacêutica, desenvolvemos sistemas com validação completa, atendendo às normas FDA e ANVISA mais rigorosas.

A manutenção preventiva é parte integral de nossos serviços. Oferecemos programas personalizados que incluem inspeções periódicas, substituição programada de vedações e otimização de parâmetros operacionais. Nossa equipe técnica especializada está disponível 24/7 para suporte emergencial.

A sustentabilidade é prioridade em nossos projetos. Utilizamos tecnologias que reduzem o consumo de ar comprimido, diminuindo custos operacionais e impacto ambiental. Nossos sistemas recuperam energia pneumática, aumentando a eficiência global dos processos automatizados.

Para empresas em São Paulo que buscam diferenciação competitiva através da automação, oferecemos consultoria técnica gratuita e desenvolvimento conjunto de soluções inovadoras.`,
      category: "pneumatica",
      readTime: "7 min",
      language: "pt",
      image: "/lovable-uploads/35e6299d-9a61-4325-acb4-7152297159c9.png",
      tags: ["Cilindros Pneumáticos SP", "Automação", "Pneumática"],
      relatedPosts: [10, 1, 6]
    },
    {
      id: 3,
      title: "Como a tecnologia CNC é utilizada para otimização de processos industriais",
      excerpt: "Entenda como a usinagem CNC revoluciona a precisão e eficiência na fabricação de peças industriais em toda região de São Paulo.",
      content: `A tecnologia CNC (Controle Numérico Computadorizado) representa uma das mais significativas revoluções na manufatura moderna, transformando radicalmente a forma como concebemos e executamos processos de usinagem. Na JPD Usinagem, dominamos esta tecnologia de ponta para entregar resultados que superam as expectativas mais exigentes de nossos clientes.

O CNC transcende a simples automatização de máquinas-ferramenta. Representa uma filosofia integral de produção que combina precisão matemática, repetibilidade absoluta e flexibilidade operacional incomparáveis. Nossos centros de usinagem CNC incorporam tecnologias avançadas como controle adaptativo de corte, monitoramento em tempo real de ferramentas e compensação automática de desgastes.

A otimização de processos através da tecnologia CNC inicia-se na fase de programação. Utilizamos software CAM (Computer-Aided Manufacturing) de última geração, que simula virtualmente todo o processo de usinagem antes da primeira peça ser produzida. Esta simulação identifica potenciais problemas, otimiza trajetórias de ferramenta e garante utilização máxima da capacidade das máquinas.

Nossa expertise em CNC abrange múltiplas tecnologias:

• Centros de usinagem horizontais e verticais de 3, 4 e 5 eixos
• Tornos CNC com eixo Y e ferramentas motorizadas
• Centros de torneamento com controle de temperatura
• Máquinas de electroerosão CNC a fio e por penetração
• Retificadoras CNC cilíndricas e planas
• Sistemas de medição tridimensional integrados

A revolução digital na usinagem permite conectividade total entre máquinas, sistemas de gestão e controle de qualidade. Implementamos conceitos de Indústria 4.0, onde cada máquina CNC comunica-se em tempo real com nosso sistema central, reportando status de produção, consumo de ferramentas e parâmetros de qualidade.

A otimização energética é aspecto fundamental de nossos processos CNC. Utilizamos técnicas avançadas como usinagem em alta velocidade (HSM), que reduz tempos de ciclo e consumo energético. A refrigeração otimizada e a lubrificação mínima (MQL) contribuem para processos mais sustentáveis e ecologicamente responsáveis.

Para componentes críticos, implementamos controle estatístico de processo (CEP) integrado às máquinas CNC. Cada peça é automaticamente inspecionada e seus dados alimentam algoritmos de aprendizado de máquina que continuamente otimizam os parâmetros de usinagem.

A manutenção preditiva de nossos equipamentos CNC utiliza sensores IoT e análise de vibrações para antecipar necessidades de manutenção, garantindo disponibilidade máxima e qualidade consistente.`,
      category: "tecnologia",
      readTime: "6 min",
      language: "pt",
      image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png",
      tags: ["CNC", "Tecnologia", "Processos"],
      relatedPosts: [1, 4, 5]
    },
    {
      id: 4,
      title: "Usinagem CNC no Setor Automotivo: Precisão para a indústria em SP",
      excerpt: "Peças para motores, transmissões e sistemas automotivos fabricadas com usinagem CNC de alta precisão em São Paulo e região.",
      content: `O setor automotivo brasileiro passa por uma transformação sem precedentes, com demandas crescentes por componentes de ultra-precisão, eficiência energética e sustentabilidade. Na JPD Usinagem, posicionamo-nos como parceiro estratégico desta revolução, fornecendo soluções de usinagem CNC que atendem às especificações mais rigorosas das montadoras nacionais e internacionais.

Nossa especialização automotiva abrange desde componentes críticos de motor até sistemas complexos de transmissão e suspensão. Cada peça é desenvolvida considerando não apenas as especificações dimensionais, mas também fatores como fadiga, resistência térmica, comportamento tribológico e impacto ambiental.

Os componentes automotivos que fabricamos incluem:

• Blocos e cabeçotes de motor com canais de refrigeração complexos
• Pistões de alta performance com revestimentos especiais
• Virabrequins e comandos de válvulas com tratamentos térmicos específicos
• Carcaças de transmissão com tolerâncias submicrométricas
• Componentes de suspensão em ligas leves
• Peças de sistemas de freios com certificação FMVSS
• Componentes de direção elétrica e hidráulica
• Partes de sistemas de injeção eletrônica

A indústria automotiva exige certificações rigorosas como ISO/TS 16949, que incorporamos integralmente em nossos processos. Nosso sistema de qualidade rastreia cada lote de material desde a fundição até a entrega final, garantindo rastreabilidade completa e conformidade absoluta.

Para atender às demandas de veículos elétricos e híbridos, desenvolvemos expertise específica em usinagem de materiais avançados como ligas de alumínio aeronáuticas, magnésio e compostos de fibra de carbono. Estes materiais requerem técnicas especializadas de usinagem que dominamos completamente.

A sustentabilidade é prioridade crescente no setor automotivo. Implementamos processos de usinagem ecológica, utilizando fluidos de corte biodegradáveis, reciclagem de cavacos metálicos e otimização energética. Contribuímos para a pegada de carbono reduzida dos veículos através de componentes mais leves e eficientes.

Nossa capacidade de prototipagem rápida permite às montadoras acelerar ciclos de desenvolvimento. Utilizamos manufatura aditiva para ferramental e usinagem CNC para protótipos funcionais, reduzindo time-to-market significativamente.

A integração com fornecedores globais é facilitada por nossos sistemas de comunicação digital. Compartilhamos dados de produção em tempo real, permitindo tomada de decisões ágil e otimização contínua da cadeia de suprimentos.`,
      category: "setores",
      readTime: "8 min",
      language: "pt",
      image: "/lovable-uploads/c389b1c3-66fe-4964-8cf6-c6b4966a9e60.png",
      tags: ["Usinagem Automotiva", "CNC São Paulo", "Setor Automotivo"],
      relatedPosts: [1, 2, 5]
    },
    {
      id: 5,
      title: "Usinagem CNC na Indústria Farmacêutica: Componentes de alta precisão",
      excerpt: "Fabricação de componentes para equipamentos farmacêuticos com padrões rigorosos de qualidade e limpeza em Atibaia e região.",
      content: `A indústria farmacêutica apresenta os desafios mais complexos da manufatura moderna, exigindo não apenas precisão dimensional extrema, mas também conformidade com regulamentações sanitárias rigorosíssimas. Na JPD Usinagem, desenvolvemos capacidades especializadas que atendem integralmente aos padrões GMP (Good Manufacturing Practices) e às normas da ANVISA, FDA e EMA.

Nossa sala limpa classificada ISO 14644 Classe 7 permite usinagem de componentes críticos para equipamentos farmacêuticos. Cada processo é validado conforme protocolos IQ/OQ/PQ (Installation/Operational/Performance Qualification), garantindo conformidade regulatória absoluta.

Os componentes farmacêuticos que fabricamos incluem:

• Rotores e estatores para bombas de alta pureza
• Componentes de sistemas de dosagem de precisão
• Partes de reatores farmacêuticos em aço inoxidável 316L
• Elementos de filtração com acabamentos especiais
• Peças de sistemas de liofilização
• Componentes de equipamentos de compressão de comprimidos
• Partes de sistemas de envase asséptico
• Elementos de sistemas de isolamento e contenção

A qualidade da água utilizada em nossos processos atende aos padrões Water for Injection (WFI), com monitoramento contínuo de condutividade, TOC (Total Organic Carbon) e contagem microbiológica. Nossos sistemas de limpeza CIP/SIP (Clean-in-Place/Steam-in-Place) garantem descontaminação completa entre lotes.

A documentação de cada componente inclui certificados de material, relatórios de inspeção dimensional, laudos de rugosidade superficial e certificados de limpeza. Mantemos registros rastreáveis por no mínimo 30 anos, atendendo às exigências regulatórias mais rigorosas.

Para componentes que entram em contato com produtos farmacêuticos, utilizamos exclusivamente materiais certificados USP Classe VI, com certificados de biocompatibilidade e ausência de substâncias extraíveis/lixiviáveis. Nossos fornecedores de matéria-prima são auditados regularmente conforme protocolos farmacêuticos.

A validação de processos de usinagem segue metodologias estatisticamente robustas, com estudos de capacidade de processo (Cpk > 1.67) e análises de modo de falha (FMEA). Cada parâmetro crítico é monitorado continuamente através de sistemas automatizados.

Nossa expertise em soldagem sanitária permite fabricação de componentes complexos com juntas livres de fendas, atendendo aos padrões ASME BPE (Bioprocessing Equipment). Utilizamos soldagem TIG automática com purga de argônio para garantir penetração completa e acabamento interno perfeito.

Para atender à crescente demanda por medicamentos personalizados, desenvolvemos capacidades de manufatura flexível que permitem mudanças rápidas de configuração mantendo integridade dos sistemas de qualidade.`,
      category: "setores",
      readTime: "7 min",
      language: "pt",
      image: "/lovable-uploads/dec3d1a6-b3e5-42f1-b536-d50f5322c31c.png",
      tags: ["Usinagem Farmacêutica", "Precisão", "Qualidade"],
      relatedPosts: [1, 2, 3]
    },
    {
      id: 6,
      title: "Usinagem CNC no Setor Agrícola: Peças para implementos em Bragança Paulista",
      excerpt: "Componentes para tratores, colheitadeiras e implementos agrícolas fabricados com tecnologia CNC em Bragança Paulista.",
      content: `O setor agrícola brasileiro é um dos mais dinâmicos e exigentes do mundo, demandando componentes robustos, precisos e duráveis para implementos e máquinas agrícolas. Na JPD Usinagem, oferecemos soluções CNC especializadas para atender às necessidades específicas deste mercado vital.

Nossa experiência inclui fabricação de peças para tratores, colheitadeiras, pulverizadores e sistemas de irrigação, utilizando materiais de alta resistência e tratamentos térmicos que garantem longevidade e desempenho superior.

Os serviços que oferecemos para o setor agrícola incluem:

• Usinagem de peças estruturais em aço carbono e ligas especiais
• Fabricação de componentes para sistemas hidráulicos e pneumáticos
• Produção de engrenagens e eixos com tolerâncias rigorosas
• Tratamentos superficiais para resistência à corrosão e desgaste
• Desenvolvimento de protótipos e pequenas séries para inovação agrícola

Localizados em Bragança Paulista, atendemos toda a região com agilidade e suporte técnico especializado. Nossa equipe trabalha em parceria com fabricantes de máquinas agrícolas para desenvolver soluções customizadas que aumentam a eficiência e reduzem custos operacionais.

A sustentabilidade é um foco crescente em nossas operações, adotando processos que minimizam desperdícios e utilizam materiais recicláveis sempre que possível. Investimos em tecnologias de usinagem que reduzem consumo energético e emissões de carbono.

Para o setor agrícola, oferecemos também serviços de manutenção e reparo, garantindo que seus equipamentos estejam sempre operacionais durante as temporadas críticas de plantio e colheita.`,
      category: "setores",
      readTime: "6 min",
      language: "pt",
      image: "/lovable-uploads/407e4db0-5aff-4ff1-a425-6473a2ccc334.png",
      tags: ["Usinagem Agrícola", "Implementos", "Bragança Paulista"],
      relatedPosts: [1, 2, 3]
    },
    {
      id: 7,
      title: "Usinagem CNC na Indústria Alimentícia: Máquinas de processamento",
      excerpt: "Peças em aço inoxidável para máquinas de processamento alimentício com acabamento sanitário em São Paulo.",
      content: `A indústria alimentícia exige componentes fabricados com rigorosos padrões sanitários e de qualidade, garantindo segurança e eficiência nos processos de produção. Na JPD Usinagem, especializamo-nos na fabricação de peças em aço inoxidável com acabamentos sanitários para máquinas de processamento de alimentos.

Nossos processos atendem às normas internacionais de higiene e segurança alimentar, utilizando técnicas de usinagem que evitam contaminação e facilitam a limpeza dos equipamentos.

Os serviços que oferecemos incluem:

• Usinagem de peças em aço inoxidável AISI 304 e 316L
• Acabamentos polidos e escovados para superfícies sanitárias
• Fabricação de componentes para tanques, tubulações e válvulas
• Desenvolvimento de peças para equipamentos de envase e embalagem
• Consultoria para adequação às normas FDA, ANVISA e ISO 22000

Nossa equipe técnica possui conhecimento aprofundado das exigências do setor alimentício, garantindo que cada componente atenda aos requisitos de qualidade e durabilidade.

Atendemos empresas em São Paulo e região metropolitana, oferecendo prazos competitivos e suporte técnico especializado para projetos de qualquer escala.

A sustentabilidade também é prioridade, com processos que minimizam o uso de produtos químicos e promovem a reutilização de materiais sempre que possível.`,
      category: "setores",
      readTime: "5 min",
      language: "pt",
      image: "/lovable-uploads/248ec544-caa9-4ba0-8c08-898392a2d8d2.png",
      tags: ["Usinagem Alimentícia", "Aço Inoxidável", "Sanitário"],
      relatedPosts: [1, 2, 3]
    },
    {
      id: 8,
      title: "Engenharia de Produção: Otimização de processos de usinagem CNC",
      excerpt: "Análise técnica dos métodos de otimização de produção através de usinagem CNC e ferramentaria especializada.",
      content: `A engenharia de produção aplicada à usinagem CNC é fundamental para maximizar eficiência, reduzir custos e garantir qualidade superior. Na JPD Usinagem, combinamos conhecimento técnico e ferramentas avançadas para otimizar cada etapa do processo produtivo.

Utilizamos metodologias como Lean Manufacturing, Six Sigma e Kaizen para identificar gargalos, eliminar desperdícios e melhorar fluxos de trabalho. Nossa equipe de engenheiros trabalha em conjunto com operadores e programadores CNC para desenvolver soluções integradas.

As principais estratégias de otimização incluem:

• Planejamento detalhado de processos e roteiros de fabricação
• Programação CNC avançada com simulação e validação prévia
• Controle estatístico de processos para monitoramento contínuo
• Automação e integração de sistemas para redução de tempos de setup
• Capacitação e treinamento contínuo da equipe operacional

Através da engenharia de produção, conseguimos reduzir tempos de ciclo, aumentar a capacidade produtiva e melhorar a qualidade final das peças usinadas.

Oferecemos consultoria especializada para empresas que desejam implementar melhorias em suas operações de usinagem, com foco em resultados mensuráveis e sustentáveis.`,
      category: "engenharia",
      readTime: "10 min",
      language: "pt",
      image: "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png",
      tags: ["Engenharia Produção", "Otimização", "Métodos"],
      relatedPosts: [1, 2, 3]
    },
    {
      id: 9,
      title: "CNC Machining Services in São Paulo: Precision Manufacturing Solutions",
      excerpt: "Discover our precision CNC machining services in São Paulo, Brazil. High-quality components for automotive, aerospace and industrial sectors.",
      content: `Our CNC machining services in São Paulo offer unparalleled precision and quality for a wide range of industries including automotive, aerospace, and industrial manufacturing. Utilizing state-of-the-art equipment and experienced engineers, we deliver components that meet the most stringent specifications.

We specialize in:

• 3, 4, and 5-axis CNC milling and turning
• Complex geometries and tight tolerances
• High-volume production and prototyping
• Materials including aluminum, steel, titanium, and composites
• Quality assurance with ISO 9001 certification

Our commitment to innovation and customer satisfaction makes us a trusted partner for companies seeking reliable manufacturing solutions in Brazil and beyond.`,
      category: "internacional",
      readTime: "8 min",
      language: "en",
      image: "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png",
      tags: ["CNC Machining", "São Paulo Brazil", "Precision Manufacturing"],
      relatedPosts: [1, 2, 3]
    },
    {
      id: 10,
      title: "Pneumatic Cylinders Manufacturing in Brazil: Custom Industrial Solutions",
      excerpt: "Custom pneumatic cylinders manufacturing in São Paulo, Brazil. Industrial automation components for global markets.",
      content: `We manufacture custom pneumatic cylinders in São Paulo, Brazil, tailored to meet the specific needs of industrial automation systems worldwide. Our products are designed for durability, precision, and optimal performance in diverse applications.

Our product range includes:

• Double-acting and single-acting cylinders
• Stainless steel and high-pressure models
• Compact and rotary cylinders
• Custom mounting and cushioning options
• Compliance with international standards

With advanced engineering and quality control, we ensure our pneumatic cylinders support efficient and reliable automation processes for clients across various industries.`,
      category: "internacional",
      readTime: "7 min",
      language: "en",
      image: "/lovable-uploads/a029f8f6-79e0-4060-9302-8e14e10ecbf0.png",
      tags: ["Pneumatic Cylinders", "Brazil Manufacturing", "Industrial Automation"],
      relatedPosts: [1, 2, 3]
    },
    {
      id: 11,
      title: "Usinagem CNC na Indústria Aeroespacial: Componentes críticos de alta precisão",
      excerpt: "Fabricação de peças aeroespaciais com materiais especiais como titânio e superligas em São Paulo.",
      content: `A indústria aeroespacial exige componentes com tolerâncias extremamente rigorosas e materiais de alta performance. Na JPD Usinagem, fabricamos peças críticas utilizando titânio, superligas e outros materiais especiais, garantindo qualidade e confiabilidade para aplicações aeroespaciais.

Nossos processos incluem:

• Usinagem de alta precisão com controle dimensional avançado
• Tratamentos térmicos e superficiais específicos para resistência e durabilidade
• Certificações e documentação conforme normas AS9100
• Desenvolvimento de protótipos e produção em série
• Suporte técnico especializado para projetos aeroespaciais

Atendemos fornecedores e fabricantes de equipamentos aeroespaciais em São Paulo e região, contribuindo para a excelência e segurança do setor.`,
      category: "setores",
      readTime: "9 min",
      language: "pt",
      image: "/lovable-uploads/9dd0ff85-d042-4379-b43c-18bfe0d638de.png",
      tags: ["Usinagem Aeroespacial", "Titânio", "Alta Precisão"],
      relatedPosts: [1, 2, 3]
    },
    {
      id: 12,
      title: "Engenharia de Processos: Implementação de células de manufatura CNC",
      excerpt: "Metodologia para implementação de células de manufatura flexível com tecnologia CNC em ambientes industriais.",
      content: `A implementação de células de manufatura CNC permite flexibilidade, eficiência e qualidade na produção industrial. Na JPD Usinagem, aplicamos metodologias avançadas para projetar e implementar células integradas que otimizam processos e reduzem custos.

Nossos serviços incluem:

• Análise e planejamento de layout de células de manufatura
• Integração de máquinas CNC com sistemas de automação e controle
• Desenvolvimento de programas CNC otimizados para produção flexível
• Treinamento e capacitação de equipes operacionais
• Monitoramento e melhoria contínua dos processos

Com foco em Indústria 4.0, nossas soluções promovem conectividade, rastreabilidade e agilidade, atendendo às demandas dinâmicas do mercado industrial moderno.`,
      category: "engenharia",
      readTime: "12 min",
      language: "pt",
      image: "/lovable-uploads/e95a555a-a0a9-47b3-914e-3462320aeffb.png",
      tags: ["Engenharia Processos", "Células Manufatura", "CNC"],
      relatedPosts: [1, 2, 3]
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

  const filteredPosts = useMemo(() => {
    let posts = selectedCategory === "all" 
      ? blogPosts 
      : blogPosts.filter(post => post.category === selectedCategory);
      
    if (searchTerm) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return posts;
  }, [selectedCategory, searchTerm]);

  const getRelatedPosts = (post: any) => {
    return blogPosts.filter(p => post.relatedPosts?.includes(p.id));
  };

  const getCurrentPostIndex = () => {
    return filteredPosts.findIndex(post => post.id === selectedPost?.id);
  };

  const navigatePost = (direction: 'prev' | 'next') => {
    const currentIndex = getCurrentPostIndex();
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPosts.length - 1;
    } else {
      newIndex = currentIndex < filteredPosts.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPost(filteredPosts[newIndex]);
    setReadingProgress(0);
  };

  const sharePost = async (post: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erro ao compartilhar:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const serviceAreas = [
    "Atibaia", "Bragança Paulista", "São Paulo", "Guarulhos",
    "Bom Jesus dos Perdões", "Campo Limpo Paulista", "Jundiaí", "Campinas"
  ];

  return (
    <>
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

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar nos posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
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

          {/* Results Counter */}
          {searchTerm && (
            <p className="text-muted-foreground mb-4">
              {filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''} para "{searchTerm}"
            </p>
          )}

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
                    {post.tags.map((tag: string, tagIndex: number) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedPost(post);
                      setReadingProgress(0);
                    }}
                  >
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

      {/* Enhanced Blog Post Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <>
              {/* Progress Bar */}
              <div className="fixed top-0 left-0 w-full z-50">
                <Progress value={readingProgress} className="h-1" />
              </div>

              {/* Navigation Header */}
              <div className="flex items-center justify-between mb-4 sticky top-0 bg-background z-40 pb-4 border-b">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigatePost('prev')}
                    disabled={filteredPosts.length <= 1}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigatePost('next')}
                    disabled={filteredPosts.length <= 1}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => sharePost(selectedPost)}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.print()}
                  >
                    <FileText className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">
                  {selectedPost.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg">
                  <OptimizedImage
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPost.tags.map((tag: string, tagIndex: number) => (
                    <Badge key={tagIndex} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="prose max-w-none">
                  <div className="text-lg leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </div>
                </div>

                {/* Related Posts */}
                {getRelatedPosts(selectedPost).length > 0 && (
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold mb-4">Posts Relacionados</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getRelatedPosts(selectedPost).map((relatedPost) => (
                        <Card 
                          key={relatedPost.id} 
                          className="cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => setSelectedPost(relatedPost)}
                        >
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base line-clamp-2">
                              {relatedPost.title}
                            </CardTitle>
                            <CardDescription className="text-sm line-clamp-2">
                              {relatedPost.excerpt}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">Precisa dos nossos serviços?</h4>
                  <p className="text-muted-foreground mb-4">
                    Entre em contato conosco e solicite um orçamento personalizado.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogEnhanced;
