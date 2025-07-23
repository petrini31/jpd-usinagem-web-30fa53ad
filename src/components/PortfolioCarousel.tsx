
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=600",
      title: "Usinagem CNC de Precisão",
      category: "cnc"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600",
      title: "Cilindros Pneumáticos",
      category: "pneumatica"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=600",
      title: "Componentes Industriais",
      category: "componentes"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=600",
      title: "Torneamento Especializado",
      category: "cnc"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600",
      title: "Ferramentais e Moldes",
      category: "ferramental"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioImages.length) % portfolioImages.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + portfolioImages.length) % portfolioImages.length;
  const getNextIndex = () => (currentIndex + 1) % portfolioImages.length;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-6">
        {/* Previous Image - Clickable */}
        <div 
          className="w-32 h-32 md:w-40 md:h-40 opacity-60 rounded-lg overflow-hidden transform scale-75 cursor-pointer hover:opacity-80 transition-all duration-300"
          onClick={prevSlide}
        >
          <img
            src={portfolioImages[getPrevIndex()].image}
            alt={portfolioImages[getPrevIndex()].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Current Image - Highlighted */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-strong transform scale-100 transition-all duration-500">
          <img
            src={portfolioImages[currentIndex].image}
            alt={portfolioImages[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-white font-bold text-xl mb-1">
              {portfolioImages[currentIndex].title}
            </h4>
          </div>
        </div>

        {/* Next Image - Clickable */}
        <div 
          className="w-32 h-32 md:w-40 md:h-40 opacity-60 rounded-lg overflow-hidden transform scale-75 cursor-pointer hover:opacity-80 transition-all duration-300"
          onClick={nextSlide}
        >
          <img
            src={portfolioImages[getNextIndex()].image}
            alt={portfolioImages[getNextIndex()].title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Buttons - Closer to images */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {portfolioImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
