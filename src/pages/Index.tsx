import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ProjectsCarousel from "@/components/landing/ProjectsCarousel";
import ShopCarousel from "@/components/landing/ShopCarousel";
import Contact from "@/components/landing/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Everything Your Home Needs — From Blueprint to Sofa";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Luxury real estate, architecture, construction, and furniture — from blueprint to sofa.");
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blueprint to Sofa',
    url: '/',
    description: 'End-to-end real estate, architecture, construction, and furniture.',
    department: [
      { '@type': 'LocalBusiness', name: 'Real Estate Services' },
      { '@type': 'LocalBusiness', name: 'Architecture & Contracting' },
      { '@type': 'Store', name: 'Furniture Store' }
    ]
  };

  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ProjectsCarousel />
      <ShopCarousel />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
};

export default Index;
