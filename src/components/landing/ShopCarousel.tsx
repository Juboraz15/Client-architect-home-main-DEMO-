import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

const products = [
  { name: "Sable Sofa", price: "$1,890" },
  { name: "Bronze Arc Lamp", price: "$420" },
  { name: "Sand Oak Dining", price: "$2,450" },
  { name: "Charcoal Lounge Chair", price: "$780" },
];

export default function ShopCarousel() {
  return (
    <section id="shop" aria-labelledby="shop-heading" className="bg-secondary/50 py-20">
      <div className="container">
        <h2 id="shop-heading" className="font-serif text-4xl mb-10">Shop Our Furniture</h2>
        <Carousel>
          <CarouselContent>
            {products.map((p) => (
              <CarouselItem key={p.name} className="md:basis-1/2 lg:basis-1/4">
                <article className="rounded-lg overflow-hidden border bg-card shadow-sm hover:shadow-md transition h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={heroImage} alt={`${p.name} in warm neutral interior`} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{p.price}</p>
                    <div className="mt-auto">
                      <a href="#" aria-label={`View ${p.name} on Shopify`}>
                        <Button variant="elevated" className="w-full">Shop Now</Button>
                      </a>
                    </div>
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
