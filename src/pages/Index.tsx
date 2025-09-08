import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Leaf, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Crop Protection",
      description: "Advanced pesticides and fungicides to protect your crops from diseases and pests"
    },
    {
      icon: Leaf,
      title: "Organic Solutions",
      description: "Eco-friendly and sustainable farming solutions for organic crop production"
    },
    {
      icon: TrendingUp,
      title: "Yield Enhancement",
      description: "Premium fertilizers designed to maximize crop yield and quality"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Professional agricultural consultation and farmer support services"
    }
  ];

  const benefits = [
    "Increased crop yield by up to 40%",
    "Reduced pest and disease damage",
    "Improved soil health and fertility",
    "Cost-effective farming solutions",
    "Sustainable agricultural practices",
    "Expert technical support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose HYCROP?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of farmers for reliable agricultural solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Proven Results for Modern Farming
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our scientifically formulated products deliver consistent results, helping farmers achieve better harvests and sustainable growth.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/products">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    Explore Our Products
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Farmers</div>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent-foreground mb-2">40%</div>
                <div className="text-muted-foreground">Yield Increase</div>
              </div>
              <div className="bg-success-green/10 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-success-green mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <Award className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of successful farmers who trust HYCROP for their agricultural needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
