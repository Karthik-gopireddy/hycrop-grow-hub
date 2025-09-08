import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug, Sprout, Leaf, Recycle, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const productCategories = [
    {
      id: 'insects',
      icon: Bug,
      title: 'Insect Control',
      description: 'Effective pesticides and insecticides to protect your crops from harmful pests',
      products: ['Chlorpyrifos 20% EC', 'Imidacloprid 17.8% SL', 'Lambda Cyhalothrin 5% EC'],
      color: 'bg-red-50 text-red-700 border-red-200',
      features: ['Fast-acting formula', 'Long-lasting protection', 'Safe for crops']
    },
    {
      id: 'crops',
      icon: Sprout,
      title: 'Crop Protection',
      description: 'Comprehensive solutions for disease prevention and crop health management',
      products: ['Mancozeb 75% WP', 'Carbendazim 50% WP', 'Propiconazole 25% EC'],
      color: 'bg-green-50 text-green-700 border-green-200',
      features: ['Disease prevention', 'Fungal protection', 'Healthy growth']
    },
    {
      id: 'fertilizers',
      icon: TrendingUp,
      title: 'Fertilizers',
      description: 'Premium fertilizers to enhance soil fertility and boost crop yield',
      products: ['NPK 19:19:19', 'Urea 46% N', 'DAP 18:46:0'],
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      features: ['Nutrient-rich formula', 'Soil enhancement', 'Higher yields']
    },
    {
      id: 'organic',
      icon: Leaf,
      title: 'Organic Solutions',
      description: 'Eco-friendly and sustainable organic farming products',
      products: ['Neem Oil 1500 ppm', 'Vermicompost', 'Bio-pesticides'],
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      features: ['100% organic', 'Environmentally safe', 'Sustainable farming']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products undergo rigorous quality testing'
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly',
      description: 'Sustainable and environmentally responsible solutions'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Tested and proven to increase crop yield and quality'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-white/90">
              Comprehensive agricultural solutions for every farming need
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from our wide range of agricultural solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <Card key={category.id} className="border-border hover:shadow-medium transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge className={category.color}>
                      {category.products.length} Products
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Popular Products:</h4>
                    <ul className="space-y-1">
                      {category.products.slice(0, 3).map((product, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={`/products/${category.id}`}>
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      Explore {category.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-muted-foreground">
              Quality, reliability, and results you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground">
              Our most popular and effective agricultural solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>HYCROP Insect Shield</CardTitle>
                <CardDescription>
                  Advanced insecticide for comprehensive pest control
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Effective against 20+ insect species</li>
                  <li>• Long-lasting protection (15-20 days)</li>
                  <li>• Safe for beneficial insects</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>HYCROP Growth Booster</CardTitle>
                <CardDescription>
                  Premium fertilizer blend for maximum crop yield
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• NPK 19:19:19 balanced formula</li>
                  <li>• Increases yield by 30-40%</li>
                  <li>• Suitable for all crop types</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>HYCROP Organic Plus</CardTitle>
                <CardDescription>
                  100% organic solution for sustainable farming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Certified organic ingredients</li>
                  <li>• Improves soil health naturally</li>
                  <li>• Safe for organic certification</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Need Help Choosing Products?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our agricultural experts are here to help you select the right products for your crops
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Get Expert Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Products;