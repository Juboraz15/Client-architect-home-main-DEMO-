import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import heroImage from "@/assets/hero-architecture.jpg";
import { useParallax } from "@/hooks/useParallax";

const Hotspot = ({ top, left, label }: { top: string; left: string; label: string }) => (
  <div className="absolute" style={{ top, left }}>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="relative h-4 w-4 rounded-full bg-primary/90 ring-2 ring-primary/40 cursor-pointer">
          <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
        </div>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  </div>
);

export default function Hero() {
  const parallax = useParallax(0.12);

  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Modern luxury home exterior with refined interior hints and city skyline"
          className="h-[80vh] w-full object-cover"
          style={parallax}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background" />
      </div>

      {/* Only keep your blended/styled navbar here if you want it, otherwise remove this comment */}

      <div className="container relative grid min-h-[70vh] items-center py-12">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Everything Your Home Needs — From Blueprint to Sofa
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            We Handle It All: Real Estate, Design, Construction, and Interiors.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact"><Button size="xl" variant="hero">Let’s Create Your Space</Button></a>
            <a href="#services" className="story-link">Explore Services</a>
          </div>
        </div>

        {/* Hotspots over the hero visual */}
        <div className="pointer-events-none absolute right-8 bottom-8 h-64 w-96 hidden md:block">
          <div className="pointer-events-auto relative h-full w-full">
            <Hotspot top="20%" left="15%" label="Designed & Built by Us" />
            <Hotspot top="55%" left="65%" label="Listed by Our Real Estate Team" />
            <Hotspot top="75%" left="35%" label="Furnished from Our Store" />
          </div>
        </div>
      </div>
    </section>
  );
}
