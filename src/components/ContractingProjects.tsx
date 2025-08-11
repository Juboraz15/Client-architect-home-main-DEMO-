import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxury Penthouse Renovation",
    category: "Residential",
    description: "Complete gut renovation of 3,500 sq ft penthouse with premium finishes",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    duration: "8 months",
    location: "Manhattan, NY",
    teamSize: "12 specialists",
    status: "Completed"
  },
  {
    id: 2,
    title: "Corporate Headquarters Build-out",
    category: "Commercial",
    description: "Modern office space design and construction for tech company",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    duration: "6 months",
    location: "Brooklyn, NY",
    teamSize: "18 specialists",
    status: "Completed"
  },
  {
    id: 3,
    title: "Historic Brownstone Restoration",
    category: "Restoration",
    description: "Careful restoration preserving original character while adding modern amenities",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    duration: "12 months",
    location: "Upper East Side, NY",
    teamSize: "15 specialists",
    status: "In Progress"
  },
  {
    id: 4,
    title: "Luxury Hotel Renovation",
    category: "Hospitality",
    description: "Complete renovation of boutique hotel including guest rooms and common areas",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    duration: "10 months",
    location: "SoHo, NY",
    teamSize: "25 specialists",
    status: "Completed"
  },
  {
    id: 5,
    title: "Modern Family Home",
    category: "New Construction",
    description: "Custom designed and built modern family home with sustainable features",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    duration: "14 months",
    location: "Westchester, NY",
    teamSize: "20 specialists",
    status: "Completed"
  },
  {
    id: 6,
    title: "High-End Restaurant Build-out",
    category: "Commercial",
    description: "Complete restaurant construction with custom kitchen and dining areas",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    duration: "4 months",
    location: "Chelsea, NY",
    teamSize: "16 specialists",
    status: "Completed"
  }
];

export const ContractingProjects = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Contracting Projects
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we deliver exceptional construction and renovation projects with uncompromising quality
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-elegant hover-lift group">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-green-600 text-white" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Duration: {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Team: {project.teamSize}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full hover-scale">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury hover-lift">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};