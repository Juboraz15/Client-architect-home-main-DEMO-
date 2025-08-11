import { Link } from "react-router-dom";

const landingLinks = [
  {
    title: "Luxury Properties",
    description: "Explore curated listings and interior projects.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200", 
    link: "/properties",
  },
  {
    title: "Contracting Services",
    description: "From renovations to new builds with expert craftsmanship.",
    image: "https://images.unsplash.com/photo-1581093588401-22f0b6dbfda0?w=1200",
    link: "/contracting",
  },
  {
    title: "Furniture Collection",
    description: "Discover premium, handpicked furniture to elevate your home.",
    image: "https://images.unsplash.com/photo-1628744399080-bcc0f25a5dcb?w=1200",
    link: "/furniture",
  },
];

export const LandingNavCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-8">
      {landingLinks.map((item, idx) => (
        <Link 
          to={item.link} 
          key={idx} 
          className="group block bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-luxury transition-elegant"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/3 h-56 md:h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 p-6 flex flex-col justify-center bg-gradient-to-r from-white to-[#fefcf8]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-700 transition-smooth">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-smooth">
                {item.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
