import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Bed, Bath, Square, MapPin, Heart } from "lucide-react";

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Penthouse Downtown",
    price: "$2,850,000",
    location: "Manhattan, NY",
    beds: 3,
    baths: 2,
    sqft: "2,400",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
    featured: true,
    type: "Sale"
  },
  {
    id: 2,
    title: "Modern Minimalist Loft",
    price: "$1,275,000",
    location: "Brooklyn, NY",
    beds: 2,
    baths: 1,
    sqft: "1,800",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d707a?w=600&h=400&fit=crop",
    featured: false,
    type: "Sale"
  },
  {
    id: 3,
    title: "Executive Villa Estate",
    price: "$4,200,000",
    location: "Long Island, NY",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
    featured: true,
    type: "Sale"
  }
];

export const PropertySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");

  return (
    <section className="py-24 px-6 lg:px-8 modern-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Find Your Dream Home
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Luxury Properties
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional properties curated for the most discerning clients
          </p>
        </div>

        {/* Search Filters */}
        <Card className="mb-12 shadow-elegant glass-effect">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500k">Under $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m+">$2M+</SelectItem>
                </SelectContent>
              </Select>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Search Properties
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Featured Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden shadow-elegant hover-lift group">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                  <Badge variant="secondary">{property.type}</Badge>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{property.title}</CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {property.sqft} sq ft
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover-scale">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};