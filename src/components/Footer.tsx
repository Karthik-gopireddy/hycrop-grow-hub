import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
// import hycropLogo from '@/assets/hycrop-logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-primary-foreground">
              HYCROP
            </div>
            <p className="text-sm text-primary-foreground/80">
              Cultivating Trust, Harvesting Success. Your trusted partner in
              agricultural solutions for better crop protection and higher
              yields.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/insects"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Insect Control
                </Link>
              </li>
              <li>
                <Link
                  to="/products/crops"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Crop Protection
                </Link>
              </li>
              <li>
                <Link
                  to="/products/fertilizers"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link
                  to="/products/organic"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Organic Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  +91 6303633713
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  info@hycrop.com
                </span>
              </div>
              <div className="flex items-start space-x-5 ">
                <MapPin className="h-10 w-10 text-accent mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Shop No: 229, Ground Floor, Vishnupriya Commercial Complex,
                  Factories Ward,
                  <br />
                  Guntur, Andra Pradesh, 522003
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 HYCROP. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
