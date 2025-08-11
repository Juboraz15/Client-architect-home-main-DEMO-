import { LuxuryHero } from "@/components/LuxuryHero";
import { ContractingProjects } from "@/components/ContractingProjects";
import { RFQForm } from "@/components/RFQForm";

const Contracting = () => {
  return (
    <div className="min-h-screen modern-gradient">
      {/* Contracting Hero */}
      <LuxuryHero
        title="Expert Craftsmanship"
        subtitle="Contracting Services"
        description="From renovation to new construction, we deliver exceptional results with uncompromising quality and attention to detail."
        ctaText="View Our Work"
        onCtaClick={() => {
          const projects = document.getElementById("contracting-projects");
          if (projects) {
            projects.scrollIntoView({ behavior: "smooth" });
          }
        }}
        variant="contracting"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop"
      />

      {/* Contracting Projects Grid */}
      <section id="contracting-projects" className="py-16">
        <ContractingProjects />
      </section>

      {/* Contracting RFQ Form */}
      <section className="py-16 bg-white/70 backdrop-blur-md rounded-xl max-w-5xl mx-auto shadow-lg">
        <RFQForm
          type="contracting"
          title="Request Construction Quote"
          description="Let us bring your construction and renovation vision to life"
        />
      </section>
    </div>
  );
};

export default Contracting;
