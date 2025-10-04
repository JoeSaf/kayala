import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-2xl bg-gradient-warm p-8 text-center md:p-12">
          <h3 className="mb-3 font-display text-2xl font-bold text-primary-foreground md:text-3xl">
            Join Our Flavor Community
          </h3>
          <p className="mb-6 text-primary-foreground/90">
            Get exclusive recipes, product launches, and special offers delivered to your inbox
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background border-0 shadow-soft"
            />
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm">
                <span className="font-display text-lg font-bold text-primary-foreground">FC</span>
              </div>
              <span className="font-display text-xl font-bold text-foreground">FlavorCraft</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bringing artisan quality and sustainable practices to kitchens everywhere.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Spice Blends
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Fresh Herbs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Pantry Essentials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#recipes" className="text-muted-foreground transition-colors hover:text-primary">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 FlavorCraft. Handcrafted with ❤️ in Portland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
