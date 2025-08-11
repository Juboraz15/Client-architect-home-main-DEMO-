import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-architecture.jpg";

const items = [
  { title: "Lakeview Residence", subtitle: "Architecture + Build", alt: "Contemporary lakeside home" },
  { title: "Old Town Loft", subtitle: "Real Estate Listing", alt: "Minimalist loft interior" },
  { title: "Hillside Retreat", subtitle: "Design + Furnish", alt: "Warm interior with bronze accents" },
];

export default function ProjectsCarousel() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="container py-20">
      <h2 id="projects-heading" className="font-serif text-4xl mb-10">Featured Projects</h2>
      <div className="relative">
        <Carousel>
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-1/3">
                <article className="rounded-lg overflow-hidden border bg-card shadow-sm hover:shadow-md transition">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={heroImage} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
