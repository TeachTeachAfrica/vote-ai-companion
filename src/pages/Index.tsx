import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Vote, BarChart3, Users, Zap, Shield, Globe, ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create and deploy polls in seconds with our intuitive interface."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Watch votes pour in with live charts and detailed insights."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with customizable privacy controls."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Share your polls worldwide with built-in social sharing."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "PollMaster transformed how we gather customer feedback. The analytics are incredible!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Event Organizer",
      content: "Perfect for audience engagement at events. Real-time results keep everyone excited.",
      avatar: "MC"
    },
    {
      name: "Dr. Emily Wilson",
      role: "Research Scientist",
      content: "Clean interface, powerful features. Exactly what we needed for our research surveys.",
      avatar: "EW"
    }
  ];

  const stats = [
    { value: "10M+", label: "Votes Cast" },
    { value: "500K+", label: "Polls Created" },
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              ✨ Now with AI-powered poll suggestions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Create Polls That
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Drive Engagement
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Build beautiful, interactive polls in minutes. Gather insights from your audience 
              with real-time analytics and stunning visualizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 shadow-glow">
                  Start Creating Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth/login">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <Vote className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need to
              <span className="block text-primary">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make polling simple, engaging, and insightful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-primary transition-bounce">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our users are saying about PollMaster
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Polling?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust PollMaster for their polling needs.
            Create your first poll in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/register">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-glow"
              >
                Get Started Free
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/polls">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Explore Polls
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Vote className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PollMaster
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-smooth">Privacy</Link>
              <Link to="/terms" className="hover:text-primary transition-smooth">Terms</Link>
              <Link to="/support" className="hover:text-primary transition-smooth">Support</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 PollMaster. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
