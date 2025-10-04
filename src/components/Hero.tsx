import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                ✨ Handcrafted with Love
              </span>
            </div>
            
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Discover Flavors That Tell Stories
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Premium artisan spices, organic herbs, and gourmet ingredients crafted with care. 
              Your journey to extraordinary cooking starts here.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground shadow-warm-glow hover:shadow-large transition-all">
                Explore Our Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                View Recipes
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-xl">🌱</span>
                </div>
                <span className="text-sm font-medium text-foreground">100% Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary/10">
                  <span className="text-xl">🤝</span>
                </div>
                <span className="text-sm font-medium text-foreground">Fair Trade</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-xl">♻️</span>
                </div>
                <span className="text-sm font-medium text-foreground">Sustainable</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="overflow-hidden rounded-3xl shadow-large">
              <img
                src={heroImage}
                alt="Artisan spices and herbs in colorful display"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-3xl bg-gradient-warm opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
