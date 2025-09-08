import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Info, Star, CheckCircle } from 'lucide-react';

const ProductCategory = () => {
  const { category } = useParams();

  const categoryData = {
    insects: {
      title: 'Insect Control Products',
      description: 'Effective solutions to protect your crops from harmful insects and pests',
      products: [
        {
          id: 1,
          name: 'HYCROP Insect Shield',
          description: 'Advanced broad-spectrum insecticide for comprehensive pest control',
          price: '₹450/500ml',
          rating: 4.8,
          features: ['Effective against 20+ insects', 'Long-lasting protection', 'Safe formulation'],
          dosage: '2-3 ml per liter of water',
          crops: ['Tomato', 'Chili', 'Cotton', 'Brinjal']
        },
        {
          id: 2,
          name: 'HYCROP Pest Master',
          description: 'Systemic insecticide for sucking and chewing pests',
          price: '₹380/250ml',
          rating: 4.6,
          features: ['Quick action', 'Systemic protection', 'Residue-free'],
          dosage: '1.5-2 ml per liter of water',
          crops: ['Cabbage', 'Cauliflower', 'Okra', 'Beans']
        },
        {
          id: 3,
          name: 'HYCROP Bio Neem',
          description: 'Organic neem-based insect repellent',
          price: '₹320/1L',
          rating: 4.7,
          features: ['100% organic', 'Eco-friendly', 'Safe for beneficial insects'],
          dosage: '5-7 ml per liter of water',
          crops: ['All vegetables', 'Fruits', 'Cereals']
        }
      ]
    },
    crops: {
      title: 'Crop Protection Products',
      description: 'Comprehensive fungicides and disease management solutions',
      products: [
        {
          id: 1,
          name: 'HYCROP Fungicide Pro',
          description: 'Systemic fungicide for disease prevention and control',
          price: '₹520/500g',
          rating: 4.9,
          features: ['Broad spectrum control', 'Preventive & curative', 'Long-lasting'],
          dosage: '2-2.5g per liter of water',
          crops: ['Grapes', 'Tomato', 'Potato', 'Onion']
        },
        {
          id: 2,
          name: 'HYCROP Disease Guard',
          description: 'Contact + systemic fungicide for maximum protection',
          price: '₹680/1kg',
          rating: 4.7,
          features: ['Dual action', 'Rain fastness', 'Resistance management'],
          dosage: '1.5-2g per liter of water',
          crops: ['Wheat', 'Rice', 'Sugarcane', 'Cotton']
        }
      ]
    },
    fertilizers: {
      title: 'Premium Fertilizers',
      description: 'Nutrient-rich fertilizers for enhanced crop growth and yield',
      products: [
        {
          id: 1,
          name: 'HYCROP NPK 19:19:19',
          description: 'Balanced NPK fertilizer for all growth stages',
          price: '₹1,200/25kg',
          rating: 4.8,
          features: ['Complete nutrition', 'Water soluble', 'Quick absorption'],
          dosage: '5-10kg per acre',
          crops: ['All crops', 'Vegetables', 'Fruits', 'Cereals']
        },
        {
          id: 2,
          name: 'HYCROP Boost Plus',
          description: 'High-potash fertilizer for fruit development',
          price: '₹1,450/25kg',
          rating: 4.9,
          features: ['Enhanced fruit quality', 'Better shelf life', 'Increased sugar content'],
          dosage: '8-12kg per acre',
          crops: ['Mango', 'Grapes', 'Banana', 'Citrus']
        }
      ]
    },
    organic: {
      title: 'Organic Solutions',
      description: 'Sustainable and eco-friendly organic farming products',
      products: [
        {
          id: 1,
          name: 'HYCROP Vermicompost',
          description: 'Premium quality vermicompost for soil health',
          price: '₹400/25kg',
          rating: 4.7,
          features: ['Improves soil structure', 'Natural nutrients', 'Microbial activity'],
          dosage: '200-250kg per acre',
          crops: ['All organic crops', 'Vegetables', 'Fruits']
        },
        {
          id: 2,
          name: 'HYCROP Bio Fertilizer',
          description: 'Liquid bio-fertilizer with beneficial microorganisms',
          price: '₹280/1L',
          rating: 4.6,
          features: ['Living microorganisms', 'Nutrient mobilization', 'Root development'],
          dosage: '2-3L per acre',
          crops: ['Cereals', 'Pulses', 'Oilseeds']
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-background">
        {/* <Navbar /> */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Category Not Found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <Link to="/products" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Products</span>
            </Link>
            <h1 className="text-4xl font-bold mb-4">{currentCategory.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentCategory.products.map((product) => (
              <Card key={product.id} className="border-border hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {product.rating}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {product.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2 text-primary" />
                      Application:
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Dosage:</strong> {product.dosage}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Suitable for:</strong> {product.crops.join(', ')}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Usage Guidelines</h2>
            <p className="text-lg text-muted-foreground">
              Important instructions for safe and effective application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Read Instructions</h3>
                <p className="text-sm text-muted-foreground">
                  Always read product labels and follow recommended dosage
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Timing Matters</h3>
                <p className="text-sm text-muted-foreground">
                  Apply during early morning or evening hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Use protective equipment and wash hands after use
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Storage</h3>
                <p className="text-sm text-muted-foreground">
                  Store in cool, dry place away from children and animals
                </p>
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
              Need Help with Product Selection?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our experts can help you choose the right products for your specific crop needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Contact Our Experts
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Usage Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default ProductCategory;