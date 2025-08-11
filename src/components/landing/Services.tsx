import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, DraftingCompass, Sofa, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    id: "real-estate",
    title: "Real Estate Services",
    description: "Property buying, selling, and consulting.",
    Icon: Home,
    href: "#real-estate",
  },
  {
    id: "architecture",
    title: "Architecture & Contracting",
    description: "From concept and permits to construction.",
    Icon: DraftingCompass,
    href: "#architecture",
  },
  {
    id: "furniture",
    title: "Furniture Store",
    description: "Curated pieces via our integrated Shopify store.",
    Icon: Sofa,
    href: "#shop",
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="services" aria-labelledby="services-heading" className="container py-20">
      <h2 id="services-heading" className="font-serif text-4xl mb-10">Services</h2>
      <div ref={ref} className="grid md:grid-cols-3 gap-6">
        {items.map(({ id, title, description, Icon, href }) => (
          <a key={id} id={id} href={href} className="group">
            <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-6">{description}</p>
                <Button variant="link" className="px-0 group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
