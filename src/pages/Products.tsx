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
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Product Card */}
                  <div className="overflow-hidden rounded-2xl bg-secondary/20 p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-large">
                    {/* Image Container */}
                    <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="mb-1 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                        {product.name}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground">{product.brand}</p>

                      {/* Simple illustration placeholder */}
                      <div className="mb-4 flex justify-center">
                        <div className="h-12 w-12 rounded-full border-2 border-foreground/20"></div>
                      </div>
                    </div>
                  </div>

                  {/* Review Card */}
                  <div className="mt-4 rounded-xl bg-card p-4 shadow-soft">
                    <div className="mb-2 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                      <span className="ml-2 text-sm font-semibold text-foreground">{product.rating}</span>
                    </div>
                    <p className="mb-2 text-sm italic text-muted-foreground">"{product.review}"</p>
                    <p className="text-xs font-medium text-foreground">
                      {product.reviewer} <span className="text-accent">✓</span> Verified Buyer
                    </p>
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
