import { PropertySearch } from "@/components/PropertySearch";
import { InteriorDesignPortfolio } from "@/components/InteriorDesignPortfolio";
import { RFQForm } from "@/components/RFQForm";

const Properties = () => {
  return (
    <div className="min-h-screen modern-gradient">
      {/* Property Search Section */}
      <section className="py-16">
        <PropertySearch />
      </section>

      {/* Interior Design Portfolio */}
      <section className="py-16">
        <InteriorDesignPortfolio />
      </section>

      {/* RFQ Form for Interior Design */}
      <section className="py-16 bg-white/70 backdrop-blur-md rounded-xl max-w-5xl mx-auto shadow-lg">
        <RFQForm
          type="interior"
          title="Request Interior Design Quote"
          description="Transform your space with our expert interior design services"
        />
      </section>
    </div>
  );
};

export default Properties;