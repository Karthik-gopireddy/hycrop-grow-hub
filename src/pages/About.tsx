import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Target,
  Eye,
  Award,
  Users,
  Leaf,
  Shield,
  TrendingUp,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We maintain the highest standards in all our products and services",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Committed to eco-friendly and sustainable farming practices",
    },
    {
      icon: Heart,
      title: "Farmer-Centric",
      description: "Every decision we make puts farmers' success at the center",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Building long-term relationships based on trust and proven results",
    },
  ];

  const team = [
    {
      name: "B. BALAKRISHNA",
      position: "Managing Director.",
      experience: "15+ years in crop science",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">About HYCROP</h1>
            <p className="text-xl text-white/90">
              Cultivating Trust, Harvesting Success - Your Partner in
              Agricultural Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2009, HYCROP began with a simple mission: to
                  provide farmers with the highest quality agricultural
                  solutions that deliver real results. We started as a small
                  company with big dreams and an unwavering commitment to
                  agricultural excellence.
                </p>
                <p>
                  Over the years, we have grown to become a trusted partner for
                  thousands of farmers across the region. Our success is built
                  on scientific innovation, quality products, and most
                  importantly, the success of the farmers we serve.
                </p>
                <p>
                  Today, HYCROP stands as a symbol of trust in the agricultural
                  community, continuously innovating to meet the evolving needs
                  of modern farming while staying true to our core values.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent-foreground mb-2">
                  500+
                </div>
                <div className="text-muted-foreground">Happy Farmers</div>
              </div>
              <div className="bg-success-green/10 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-success-green mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Products</div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  To empower farmers with innovative, high-quality agricultural
                  solutions that enhance crop productivity, sustainability, and
                  profitability while building lasting partnerships based on
                  trust and mutual success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  To be the leading agricultural solutions provider, recognized
                  for our commitment to quality, innovation, and farmer success,
                  while contributing to sustainable agriculture and food
                  security.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your farming success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-medium transition-shadow text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-black">
            <Award className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 text-black/90">
              Experience the HYCROP difference and transform your farming
              success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  // variant="secondary"
                  className="bg-green-800 text-white"
                >
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" className="bg-green-800 text-white ">
                  View Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
