import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">EndlessX360</h3>
              <p className="text-sm text-muted-foreground">
                Technology without boundaries. Building the future of cybersecurity and software solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Cybersecurity</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Child Safety Tracking</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Custom Development</li>
                <li className="hover:text-primary transition-colors cursor-pointer">AI-Powered Safety</li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Our Vision</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 EndlessX360. All rights reserved.</p>
            <p className="text-center">
              Where <span className="text-primary">Today</span> Meets <span className="text-primary">Tomorrow</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
