import { Target, Globe, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  const values = [
    {
      icon: Target,
      title: "Futuristic Mindset",
      description: "Operating as though the future is already here. Next-generation thinking drives everything we create."
    },
    {
      icon: Globe,
      title: "Boundary-less Innovation",
      description: "Technology without limits. Our 360° approach serves clients anywhere in the world, transcending borders."
    },
    {
      icon: Lock,
      title: "Security-Driven",
      description: "Every solution built on a foundation of robust cybersecurity. Your safety is our highest priority."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To create advanced, intelligent, and secure technological solutions that provide 
              safety, convenience, and futuristic digital experiences — locally and globally.
            </p>
          </div>

          {/* Value cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/80 transition-smooth hover:shadow-glow-primary"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission statement */}
          <div className="mt-20 p-12 rounded-2xl bg-gradient-primary border border-primary/20 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                To design and develop powerful software and cybersecurity solutions that bring 
                futuristic experiences into everyday life — closing the gap between "now" and "what's next."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
