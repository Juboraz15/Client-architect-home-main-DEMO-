import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShoppingCart } from "lucide-react";

const furnitureProducts = [
  {
    id: 1,
    name: "Milano Luxury Sofa",
    category: "Seating",
    price: "$3,299",
    originalPrice: "$3,899",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
    isNew: true,
    onSale: true
  },
  {
    id: 2,
    name: "Executive Desk Collection",
    category: "Office",
    price: "$2,199",
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    isNew: false,
    onSale: false
  },
  {
    id: 3,
    name: "Artisan Dining Table",
    category: "Dining",
    price: "$1,899",
    originalPrice: "$2,299",
    rating: 5.0,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
    isNew: false,
    onSale: true
  },
  {
    id: 4,
    name: "Designer Accent Chair",
    category: "Seating",
    price: "$899",
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    isNew: true,
    onSale: false
  },
  {
    id: 5,
    name: "Luxury Bedroom Set",
    category: "Bedroom",
    price: "$4,599",
    originalPrice: "$5,299",
    rating: 4.9,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
    isNew: false,
    onSale: true
  },
  {
    id: 6,
    name: "Modern Coffee Table",
    category: "Living Room",
    price: "$699",
    originalPrice: null,
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    isNew: false,
    onSale: false
  }
];

export const FurnitureShowcase = () => {
  return (
    <section className="py-24 px-6 lg:px-8 modern-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Premium Furniture Collection
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Curated Luxury Pieces
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our handpicked collection of luxury furniture pieces designed to elevate your living spaces
          </p>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury hover-lift">
            Shop Full Collection
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {furnitureProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-elegant hover-lift group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-600 text-white">New</Badge>
                  )}
                  {product.onSale && (
                    <Badge className="bg-red-600 text-white">Sale</Badge>
                  )}
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
                
                {/* Quick Add to Cart on Hover */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="mb-2">{product.category}</Badge>
                    <h4 className="text-lg font-semibold">{product.name}</h4>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent className="pb-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full hover-scale">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h4>
            <p className="text-muted-foreground mb-6">
              Our design consultants can help you find the perfect pieces or create custom furniture tailored to your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="hover-scale">
                Schedule Consultation
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
                Browse Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};