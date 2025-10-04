import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "AVOCADO TOPPING",
    brand: "FlavorCraft",
    image: "/placeholder.svg",
    review: "The best avocado topper out there! Can't eat avo without Avocado Topping.",
    reviewer: "Hannah",
    rating: 5.0,
  },
  {
    id: 2,
    name: "EVERYTHING BAGEL",
    brand: "FlavorCraft",
    image: "/placeholder.svg",
    review: "Perfect blend for my morning bagels. Adds incredible flavor to everything!",
    reviewer: "Michael",
    rating: 5.0,
  },
  {
    id: 3,
    name: "GOLDEN TURMERIC",
    brand: "FlavorCraft",
    image: "/placeholder.svg",
    review: "Vibrant color and amazing health benefits. Love it in my morning latte!",
    reviewer: "Sarah",
    rating: 5.0,
  },
  {
    id: 4,
    name: "SMOKY PAPRIKA",
    brand: "FlavorCraft",
    image: "/placeholder.svg",
    review: "Adds the perfect smoky depth to all my dishes. Absolutely essential!",
    reviewer: "James",
    rating: 5.0,
  },
  {
    id: 5,
    name: "HERB GARDEN MIX",
    brand: "FlavorCraft",
    image: "/placeholder.svg",
    review: "Fresh and aromatic! Brings my pasta dishes to life every time.",
    reviewer: "Emily",
    rating: 5.0,
  },
  {
    id: 6,
    name: "CHILI HEAT BLEND",
    brand: "FlavorCraft",
    image: "/placeholder.svg",
    review: "Perfect amount of heat without overpowering. My go-to for spicy dishes!",
    reviewer: "David",
    rating: 5.0,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
              Explore Our Collection
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Discover handcrafted blends made with love and care.
            </p>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group animate-fade-in overflow-hidden rounded-3xl bg-gradient-to-b from-secondary/10 to-background p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-large"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Product Image - Large and Centered */}
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-64 w-64 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Review Quote - Large and Centered */}
                  <div className="mb-8 text-center">
                    <p className="text-xl font-medium leading-relaxed text-foreground">
                      "{product.review}"
                    </p>
                  </div>

                  {/* Bottom Section - Customer Info and Rating */}
                  <div className="flex items-center justify-between border-t border-border/50 pt-6">
                    {/* Left: Customer Name and Verified Badge */}
                    <div className="flex items-center gap-2">
                      <p className="text-base font-semibold text-foreground">{product.reviewer}</p>
                      <div className="flex items-center gap-1">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                          <span className="text-xs font-bold text-background">✓</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Verified customer</span>
                      </div>
                    </div>

                    {/* Right: Star Rating */}
                    <div className="flex items-center gap-2">
                      <Star className="h-8 w-8 fill-accent text-accent" />
                      <span className="text-2xl font-bold text-foreground">{product.rating}/5</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
