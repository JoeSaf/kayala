import { Phone, Mail, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm">
              <span className="font-display text-lg font-bold text-primary-foreground">KS</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">Kayala Spices</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            <a href="#products" className="font-medium text-foreground transition-colors hover:text-primary">
              Products
            </a>
            <a href="#recipes" className="font-medium text-foreground transition-colors hover:text-primary">
              Recipes
            </a>
            <a href="#about" className="font-medium text-foreground transition-colors hover:text-primary">
              Our Story
            </a>
            <a href="#contact" className="font-medium text-foreground transition-colors hover:text-primary">
              Contact
            </a>
          </div>

          {/* Contact & Cart */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Mail className="h-5 w-5" />
            </Button>
            <Button size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
