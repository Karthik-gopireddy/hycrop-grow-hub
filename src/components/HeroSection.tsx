import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroFarmerTomato from '@/assets/hero-farmer-tomato.jpg';
import heroFarmerChili from '@/assets/hero-farmer-chili.jpg';
import heroFarmerCrops from '@/assets/hero-farmer-crops.jpg';
import heroFarmerRedChili from '@/assets/hero-farmer-red-chili.jpg';
import heroFarmerPaddy from '@/assets/hero-farmer-paddy.jpg';
import heroFarmerCotton from '@/assets/hero-farmer-cotton.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroFarmerTomato,
      title: "Cultivating Trust",
      subtitle: "Harvesting Success",
      description: "Premium fertilizers and pesticides for healthy tomato crops and maximum yield"
    },
    {
      image: heroFarmerChili,
      title: "Quality Solutions",
      subtitle: "Proven Results",
      description: "Effective crop protection for chili cultivation and sustainable farming practices"
    },
    {
      image: heroFarmerRedChili,
      title: "Abundant Harvest",
      subtitle: "Rich Red Chilies",
      description: "Advanced solutions for premium red chili cultivation and heavy crop yields"
    },
    {
      image: heroFarmerPaddy,
      title: "Golden Grains",
      subtitle: "Rice Excellence",
      description: "Complete rice farming solutions for healthy paddy and superior grain quality"
    },
    {
      image: heroFarmerCotton,
      title: "Pure Cotton",
      subtitle: "White Gold",
      description: "Specialized cotton farming products for premium fiber quality and yield"
    },
    {
      image: heroFarmerCrops,
      title: "Expert Care",
      subtitle: "Better Harvest",
      description: "Comprehensive agricultural solutions for diverse crops and farming success"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-accent">{heroSlides[currentSlide].title}</span>
              <span className="block">{heroSlides[currentSlide].subtitle}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {heroSlides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link to="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-accent' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;