import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="container flex items-center justify-between py-6">
      {/* Left: Logo */}
      <Link to="/" className="font-serif text-xl tracking-wide flex-1">Blueprint to Sofa</Link>
      
      {/* Center: Nav Links */}
      <nav className="hidden md:flex gap-8 text-sm justify-center flex-1">
        <Link to="/contracting" className="story-link">Contracting</Link>
        <Link to="/furniture" className="story-link">Furniture</Link>
        <Link to="/properties" className="story-link">Properties</Link>
        <Link to="/admin" className="story-link">Admin</Link>
      </nav>
      
      {/* Right: Buttons */}
      <div className="hidden md:flex items-center gap-4 justify-end flex-1">
        <Link to="/signin">
          <Button variant="outline" className="rounded-full px-6 py-2 hover:bg-primary/10 transition">Sign In</Button>
        </Link>
        <Link to="/get-started">
          <Button variant="hero" className="rounded-full px-6 py-2 shadow-lg hover:scale-105 transition-transform">Get Started</Button>
        </Link>
      </div>
    </header>
  );
}