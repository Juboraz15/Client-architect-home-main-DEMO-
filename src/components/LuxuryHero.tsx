import { Button } from "@/components/ui/button";

interface LuxuryHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  onCtaClick: () => void;
  backgroundImage?: string;
  variant?: "luxury" | "contracting" | "furniture";
}

export const LuxuryHero = ({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  backgroundImage,
  variant = "luxury"
}: LuxuryHeroProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "contracting":
        return "bg-gradient-to-br from-foreground via-foreground/90 to-foreground/80";
      case "furniture":
        return "modern-gradient";
      default:
        return "modern-gradient";
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${getVariantStyles()}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-sm font-medium tracking-wider uppercase text-primary mb-4 animate-fade-in">
          {subtitle}
        </h2>
        
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in ${
          variant === "contracting" ? "text-white font-serif" : ""
        }`}>
          {title}
        </h1>
        
        <p className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in ${
          variant === "contracting" ? "text-white/90" : "text-muted-foreground"
        }`}>
          {description}
        </p>
        
        <Button 
          onClick={onCtaClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg shadow-luxury hover-lift"
        >
          {ctaText}
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};