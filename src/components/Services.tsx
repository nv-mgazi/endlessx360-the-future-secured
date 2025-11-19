import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, Users, Smartphone, Database, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Advanced security systems, threat detection, and comprehensive protection for your digital assets."
    },
    {
      icon: Users,
      title: "Child Safety Tracking",
      description: "Real-time tracking systems for schoolchildren with secure monitoring and emergency response features."
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored applications and platforms built with cutting-edge technologies to solve your unique challenges."
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      description: "Secure mobile applications and monitoring systems with end-to-end encryption."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Enterprise-grade data security, backup solutions, and compliance management."
    },
    {
      icon: Brain,
      title: "AI-Powered Safety",
      description: "Intelligent systems leveraging machine learning for predictive security and automated responses."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Solutions</span> That Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From protecting your children to securing your enterprise, our flexible 
              technology adapts to your needs and grows with you.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/50 transition-smooth group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expandable tech note */}
          <div className="mt-16 p-8 rounded-xl bg-secondary/50 border border-border backdrop-blur-sm">
            <p className="text-center text-muted-foreground">
              <span className="text-foreground font-semibold">Built for Growth:</span> Our core technology 
              expands from child safety into corporate security, asset tracking, fleet management, 
              emergency response systems, and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
