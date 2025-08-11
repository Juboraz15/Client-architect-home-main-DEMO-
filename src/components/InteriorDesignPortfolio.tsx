import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: 1,
    title: "Modern Luxury Living Room",
    category: "Residential",
    description: "Contemporary design with premium materials and custom furniture",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
    year: "2024"
  },
  {
    id: 2,
    title: "Executive Office Suite",
    category: "Commercial",
    description: "Sophisticated workspace designed for productivity and elegance",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d707a?w=600&h=400&fit=crop",
    year: "2024"
  },
  {
    id: 3,
    title: "Minimalist Kitchen Design",
    category: "Residential",
    description: "Clean lines and premium appliances for the modern home",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
    year: "2024"
  },
  {
    id: 4,
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    description: "Luxurious welcoming space with custom lighting and materials",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d707a?w=600&h=400&fit=crop",
    year: "2023"
  },
  {
    id: 5,
    title: "Master Bedroom Suite",
    category: "Residential",
    description: "Serene retreat with bespoke furniture and premium textiles",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
    year: "2023"
  },
  {
    id: 6,
    title: "High-End Restaurant",
    category: "Commercial",
    description: "Atmospheric dining space with custom millwork and lighting",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d707a?w=600&h=400&fit=crop",
    year: "2023"
  }
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export const InteriorDesignPortfolio = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Our Creative Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Interior Design Portfolio
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transforming spaces into extraordinary experiences through thoughtful design and premium craftsmanship
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="hover-scale"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-elegant hover-lift group">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white">
                    <Badge className="mb-2 bg-primary text-primary-foreground">{item.category}</Badge>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                </div>
                <p className="text-muted-foreground mt-2">{item.description}</p>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-semibold text-primary hover:text-primary/80">
                  View Project →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury hover-lift">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};