import { LuxuryHero } from "@/components/LuxuryHero";
import { FurnitureShowcase } from "@/components/FurnitureShowcase";

const Furniture = () => {
  return (
    <div className="min-h-screen modern-gradient">
      {/* Furniture Hero Section */}
      <LuxuryHero
        title="Curated Collection"
        subtitle="Premium Furniture"
        description="Discover handpicked luxury furniture pieces designed to elevate your living spaces with timeless elegance."
        ctaText="Shop Now"
        onCtaClick={() => {
          const showcase = document.getElementById("furniture-showcase");
          if (showcase) {
            showcase.scrollIntoView({ behavior: "smooth" });
          }
        }}
        variant="furniture"
      />

      {/* Furniture Showcase */}
      <section id="furniture-showcase" className="py-16">
        <FurnitureShowcase />
      </section>
    </div>
  );
};

export default Furniture;