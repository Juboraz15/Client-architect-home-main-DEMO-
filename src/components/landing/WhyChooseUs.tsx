import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, BadgeCheck, Shield, Users } from "lucide-react";

const reasons = [
  {
    title: "End-to-end Expertise",
    description: "One partner for real estate, design, construction, and interiors.",
    icon: CheckCircle2,
    details: "Our integrated approach reduces friction, cost, and delays while improving quality across each step of your home journey.",
  },
  {
    title: "Quality & Transparency",
    description: "Clear budgets, timelines, and craftsmanship.",
    icon: BadgeCheck,
    details: "We specify every material and milestone so you know exactly what you’re getting and when.",
  },
  {
    title: "Licensed & Insured",
    description: "Professional standards and safety.",
    icon: Shield,
    details: "Our team holds relevant licenses and comprehensive insurance so your investment stays protected.",
  },
  {
    title: "Client-first Collaboration",
    description: "Design with you, not for you.",
    icon: Users,
    details: "We workshop ideas, provide options, and keep communication open with weekly updates.",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-secondary/50 py-20">
      <div className="container">
        <h2 id="why-heading" className="font-serif text-4xl mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map(({ title, description, icon: Icon, details }) => (
            <Dialog key={title}>
              <DialogTrigger asChild>
                <button className="text-left rounded-lg border bg-card p-6 shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <Icon className="h-6 w-6 text-primary mb-3" />
                  <div className="text-lg font-medium mb-1">{title}</div>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <p className="text-sm text-muted-foreground">{details}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
