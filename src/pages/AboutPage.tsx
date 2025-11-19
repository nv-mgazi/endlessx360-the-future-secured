import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Lightbulb, Target, Globe, Lock, Rocket, Users, Award, Brain } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Futuristic Mindset",
      description: "We operate as though the future is already here. Every solution is designed with next-generation thinking, from AI integration to secure digital ecosystems."
    },
    {
      icon: Globe,
      title: "Boundary-less Innovation",
      description: "Our 360° approach transcends geographical limits. We serve clients worldwide, proving that innovation knows no borders."
    },
    {
      icon: Lock,
      title: "Security-Driven",
      description: "Security isn't an afterthought—it's the foundation. Every product we build has robust cybersecurity at its core."
    }
  ];

  const goals = [
    {
      icon: Award,
      text: "Build a recognized tech brand known for futuristic security solutions"
    },
    {
      icon: Rocket,
      text: "Develop scalable products for schools, businesses, and communities"
    },
    {
      icon: Brain,
      text: "Expand into AI-powered safety systems and intelligent security"
    },
    {
      icon: Users,
      text: "Position EndlessX360 as a trusted global tech powerhouse"
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
              About <span className="gradient-text">EndlessX360</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than a tech company — we are a futuristic pathway where today meets tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Origin */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">The Origin</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EndlessX360 was born from a vision of creating technology without boundaries. 
                  Our name tells our story:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">∞</span>
                    <div>
                      <p className="font-semibold">Endless</p>
                      <p className="text-sm text-muted-foreground">Infinite possibilities without limits</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">X</span>
                    <div>
                      <p className="font-semibold">X Factor</p>
                      <p className="text-sm text-muted-foreground">The bridge to the future and the unknown</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">360°</span>
                    <div>
                      <p className="font-semibold">Complete Circle</p>
                      <p className="text-sm text-muted-foreground">Global reach and all-around solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-primary border-primary/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <blockquote className="space-y-4">
                    <p className="text-lg font-medium italic">
                      "We don't just talk about the future — we build it, live in it, 
                      and bring it into the present for everyone."
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </div>

            {/* Founder */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="bg-card/50 border-border backdrop-blur-sm order-2 md:order-1">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Expert Foundation</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p>✓ Bachelor's degree in ICT</p>
                    <p>✓ Honours degree - Durban University of Technology</p>
                    <p>✓ Deep expertise in software development</p>
                    <p>✓ Specialized in cybersecurity</p>
                    <p>✓ Modern technology stack proficiency</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl font-bold">Founded on Expertise</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Established by an IT professional who combines academic excellence with 
                  practical experience. Our foundation merges technical skill with visionary 
                  thinking to build solutions that matter.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We bring together deep knowledge of software architecture, security protocols, 
                  and emerging technologies to create products that are both innovative and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              What Defines <span className="gradient-text">Us</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/50 transition-smooth"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Long-Term <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Building the future, one innovation at a time
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/80 transition-smooth"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <goal.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground pt-2">{goal.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Impact */}
      <section className="py-20 bg-gradient-primary border-y border-primary/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Global Vision, Local Roots
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Based in Africa but built for the world. We're positioning ourselves as a trusted 
              global tech powerhouse, proving that innovation knows no geographical boundaries.
            </p>
            <div className="flex flex-wrap gap-3 pt-8 justify-center">
              <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5">
                African Innovation
              </Badge>
              <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5">
                Global Impact
              </Badge>
              <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5">
                Future-Focused
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
