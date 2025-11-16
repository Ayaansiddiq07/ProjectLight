import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(135deg, hsl(204 100% 27%) 0%, hsl(45 100% 60%) 50%, hsl(204 100% 27%) 100%)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 bg-gradient-to-b from-card/95 to-card border-t border-primary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 shadow-lg ring-2 ring-secondary/30">
                  <img 
                    src="/logo.jpg" 
                    alt="PROJECT LIGHT Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    PROJECT LIGHT
                  </span>
                  <span className="text-xs text-secondary font-semibold">Powered by Helpora</span>
                </div>
              </div>
              
              <p className="text-foreground/80 max-w-md mb-4 leading-relaxed">
                A global platform that connects people in need with people who want to
                help—bringing transparency, trust, and real impact to social giving.
              </p>
              
              <p className="text-foreground/70 text-sm mb-6 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                <strong className="text-primary">Note:</strong> PROJECT LIGHT is not the platform itself. The platform is <strong>Helpora - Connecting Humanity</strong>, which powers PROJECT LIGHT and other social initiatives.
              </p>
              
              <div className="flex items-center gap-2 text-secondary font-semibold">
                <Heart className="w-5 h-5 fill-current animate-pulse" />
                <span className="text-sm">Making a difference, together</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/vision" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                    Vision & Mission
                  </Link>
                </li>
                <li>
                  <Link to="/platform" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                    Our Platform
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <a href="mailto:ayaansiddia@gmail.com" className="text-foreground/70 hover:text-primary transition-colors text-sm break-all">
                    ayaansiddia@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <a href="tel:+918891220997" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    +91 88912 20997
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
              <div className="text-sm text-foreground/70">
                <p>© {new Date().getFullYear()} PROJECT LIGHT</p>
                <p className="text-xs text-foreground/50">All rights reserved</p>
              </div>
              <div className="text-sm text-foreground/70 md:text-center">
                <p className="font-medium text-primary">Built with compassion</p>
                <p className="text-xs text-foreground/50">for global impact</p>
              </div>
              <div className="text-sm text-foreground/70 md:text-right">
                <p className="font-medium text-secondary">Powered by Helpora</p>
                <p className="text-xs text-foreground/50">Connecting Humanity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
