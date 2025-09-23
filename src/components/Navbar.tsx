import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import hycropLogo from '@/assets/hycrop-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [opengalary, setOpengalary] = useState(false);
  const [open, setOpen] = useState(false);

  const isActiveLink = (path: string) => location.pathname === path;

  const productCategories = [
    { name: "Insecticides", path: "/products/insects" },
    { name: "Fungicides", path: "/products/crops" },
    { name: "Herbicides", path: "/products/fertilizers" },
    { name: "Soil-Health", path: "/products/organic" },
    { name: "Plant Immunity", path: "/products/crops" },
    { name: "Plant Nutrition", path: "/products/fertilizers" },
    { name: "Water Soluble Fertilizers", path: "/products/organic" },
  ];

  const gallery = [
    { name: "Images", path: "/ImageGallery" },
    { name: "Videos", path: "/VideosGallary" },
  ];

  return (
    <nav className=" border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/hycropLogo.png"
              alt="hycroplogo"
              className="h-[50px] w-[180px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            <Link
              to="/"
              className={`text-sm font-bold transition-colors hover:text-primary  ${
                isActiveLink("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm font-bold transition-colors hover:text-primary ${
                isActiveLink("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>

            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                  className={`text-sm font-bold transition-colors hover:text-primary flex items-center ${
                    location.pathname.startsWith("/products")
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-42 bg-card border border-border shadow-medium"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category.path} asChild>
                    <Link
                      to={category.path}
                      className="w-full px-3 py-2 text-sm hover:bg-secondary transition-colors cursor-pointer"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu open={opengalary} onOpenChange={setOpengalary}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  onMouseEnter={() => setOpengalary(true)}
                  onMouseLeave={() => setOpengalary(false)}
                  className={`text-sm font-bold transition-colors hover:text-primary flex items-center  ${
                    location.pathname.startsWith("/products")
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  <span>Gallery</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-32 bg-card border border-border shadow-medium"
                onMouseEnter={() => setOpengalary(true)}
                onMouseLeave={() => setOpengalary(false)}
              >
                {gallery?.map((category) => (
                  <DropdownMenuItem key={category.path} asChild>
                    <Link
                      to={category.path}
                      className="w-full px-3 py-2 text-sm hover:bg-secondary transition-colors cursor-pointer"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

             <Link
              to="/Careers"
              className={`text-sm font-bold transition-colors hover:text-primary ${
                isActiveLink("/Careers") ? "text-primary" : "text-foreground"
              }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-bold transition-colors hover:text-primary ${
                isActiveLink("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            {/* 
            <Button
              variant="default"
              className="bg-gradient-primary hover:opacity-90"
            >
              Get Quote
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">
                  Products
                </div>
                {productCategories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-primary">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
