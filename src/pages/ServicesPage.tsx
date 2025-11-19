import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Code, Users, Smartphone, Database, Brain, CheckCircle, ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security systems to protect your digital assets from evolving threats.",
      features: [
        "Advanced threat detection and prevention",
        "Security audits and vulnerability assessments",
        "Penetration testing and ethical hacking",
        "24/7 security monitoring and incident response",
        "Compliance management (ISO, GDPR, etc.)"
      ]
    },
    {
      icon: Users,
      title: "Child Safety Tracking System",
      description: "Real-time tracking and monitoring solutions for schoolchildren and families.",
      features: [
        "Live GPS tracking with geofencing",
        "Emergency alert system",
        "Secure parent-school communication",
        "Attendance monitoring",
        "Historical route tracking and reporting"
      ]
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored applications and platforms built with cutting-edge technologies.",
      features: [
        "Web and mobile application development",
        "Enterprise software solutions",
        "Cloud-based platforms",
        "API development and integration",
        "Legacy system modernization"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Security Solutions",
      description: "Secure mobile applications with enterprise-grade encryption and protection.",
      features: [
        "End-to-end encryption implementation",
        "Secure authentication systems",
        "Mobile device management",
        "App security testing",
        "Secure data storage solutions"
      ]
    },
    {
      icon: Database,
      title: "Data Protection & Management",
      description: "Enterprise-grade data security, backup, and compliance solutions.",
      features: [
        "Data encryption and secure storage",
        "Automated backup solutions",
        "Disaster recovery planning",
        "Access control management",
        "Data privacy compliance"
      ]
    },
    {
      icon: Brain,
      title: "AI-Powered Safety Systems",
      description: "Intelligent systems leveraging machine learning for predictive security.",
      features: [
        "Predictive threat analysis",
        "Automated anomaly detection",
        "Intelligent alert systems",
        "Pattern recognition for security events",
        "AI-driven decision support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Solutions</span> That Scale
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From protecting your children to securing your enterprise, our flexible 
              technology adapts to your needs and grows with you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/50 transition-smooth overflow-hidden"
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-8">
                  <CardHeader className="bg-gradient-primary">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary border-primary/20 backdrop-blur-sm">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let's discuss how EndlessX360 can provide the perfect solution for your security 
                  and technology needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary group"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-border bg-secondary/50 hover:bg-secondary backdrop-blur-sm"
                  >
                    View Case Studies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
