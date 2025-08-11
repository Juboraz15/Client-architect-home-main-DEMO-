import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface RFQFormProps {
  type: "interior" | "contracting" | "property";
  title: string;
  description: string;
}

export const RFQForm = ({ type, title, description }: RFQFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });
  };

  const getProjectTypeOptions = () => {
    switch (type) {
      case "interior":
        return [
          { value: "residential", label: "Residential Design" },
          { value: "commercial", label: "Commercial Design" },
          { value: "hospitality", label: "Hospitality Design" },
          { value: "consultation", label: "Design Consultation" }
        ];
      case "contracting":
        return [
          { value: "renovation", label: "Home Renovation" },
          { value: "construction", label: "New Construction" },
          { value: "commercial", label: "Commercial Build-out" },
          { value: "restoration", label: "Historic Restoration" }
        ];
      case "property":
        return [
          { value: "buying", label: "Property Purchase" },
          { value: "selling", label: "Property Sale" },
          { value: "investment", label: "Investment Property" },
          { value: "consultation", label: "Market Consultation" }
        ];
      default:
        return [];
    }
  };

  const getBudgetOptions = () => {
    switch (type) {
      case "interior":
        return [
          { value: "10k-25k", label: "$10K - $25K" },
          { value: "25k-50k", label: "$25K - $50K" },
          { value: "50k-100k", label: "$50K - $100K" },
          { value: "100k+", label: "$100K+" }
        ];
      case "contracting":
        return [
          { value: "25k-50k", label: "$25K - $50K" },
          { value: "50k-100k", label: "$50K - $100K" },
          { value: "100k-250k", label: "$100K - $250K" },
          { value: "250k+", label: "$250K+" }
        ];
      case "property":
        return [
          { value: "500k-1m", label: "$500K - $1M" },
          { value: "1m-2m", label: "$1M - $2M" },
          { value: "2m-5m", label: "$2M - $5M" },
          { value: "5m+", label: "$5M+" }
        ];
      default:
        return [];
    }
  };

  return (
    <section className="py-24 px-6 lg:px-8 modern-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-primary-foreground">
            {title}
          </h3>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <Card className="shadow-luxury glass-effect">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              Tell Us About Your Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {getProjectTypeOptions().map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {getBudgetOptions().map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6months+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe your project in detail..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury hover-lift"
              >
                Submit Request for Quote
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};