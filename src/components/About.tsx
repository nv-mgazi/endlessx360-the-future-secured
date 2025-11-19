import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Story Behind <span className="gradient-text">EndlessX360</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Origin */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">The Origin</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-9">
                EndlessX360 was born from a simple yet powerful vision: creating technology without boundaries. 
                The name itself tells our story — <span className="text-primary font-medium">Endless</span> representing 
                infinite possibilities, <span className="text-primary font-medium">X</span> symbolizing the bridge 
                to the future, and <span className="text-primary font-medium">360</span> reflecting our global, 
                complete approach to innovation.
              </p>
            </div>

            {/* Founder */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Founded on Expertise</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-9">
                Established by an IT professional with a Bachelor's degree in ICT and Honours from 
                Durban University of Technology. Our foundation combines deep technical expertise in 
                software development and cybersecurity with a visionary approach to solving real-world challenges.
              </p>
            </div>

            {/* Location & Reach */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Global Vision, Local Roots</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-9">
                Based in Africa but built for the world. We're positioning ourselves as a trusted 
                global tech powerhouse, proving that innovation knows no geographical boundaries.
              </p>
            </div>

            {/* Key differentiators */}
            <div className="flex flex-wrap gap-3 pt-8 justify-center">
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
                Futuristic Technology
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
                Security-First Approach
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
                Scalable Solutions
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
                Global Reach
              </Badge>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-primary border border-primary/20 backdrop-blur-sm">
            <blockquote className="text-center">
              <p className="text-xl font-medium italic mb-4">
                "EndlessX360 is more than a tech company — it is a futuristic pathway. 
                It is where today meets tomorrow."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
