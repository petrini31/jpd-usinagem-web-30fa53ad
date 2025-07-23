
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface ScrollRevealSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText?: string;
  onButtonClick?: () => void;
  reversed?: boolean;
}

const ScrollRevealSection = ({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  buttonText,
  onButtonClick,
  reversed = false
}: ScrollRevealSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:grid-cols-[1fr_1fr]' : ''}`}>
          {/* Content */}
          <div className={`space-y-6 ${reversed ? 'lg:order-2' : ''}`}>
            {subtitle && (
              <p className="text-primary font-semibold text-lg">{subtitle}</p>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
            {buttonText && onButtonClick && (
              <Button 
                onClick={onButtonClick}
                className="bg-primary text-primary-foreground hover:bg-primary-dark text-lg px-8 py-4"
              >
                {buttonText}
              </Button>
            )}
          </div>

          {/* Image with reveal animation */}
          <div className={`relative ${reversed ? 'lg:order-1' : ''}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={imageUrl} 
                alt={imageAlt}
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay that slides away */}
              <div 
                className={`absolute inset-0 bg-secondary transition-transform duration-1000 ease-out ${
                  isVisible 
                    ? (reversed ? 'transform translate-x-full' : 'transform -translate-x-full') 
                    : 'transform translate-x-0'
                }`}
              />
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealSection;
