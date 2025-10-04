import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Spiced Roasted Vegetables",
    description: "Colorful veggies tossed with our signature spice blend and roasted to perfection.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Golden Turmeric Latte",
    description: "Warming, anti-inflammatory drink with our premium turmeric blend and coconut milk.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Herb-Crusted Salmon",
    description: "Fresh salmon with a crispy herb crust featuring our garden herb mix.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Everything Bagel Avocado Toast",
    description: "Classic avocado toast elevated with our everything bagel seasoning.",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Smoky Paprika Chicken",
    description: "Tender chicken marinated in smoky paprika for bold, rich flavor.",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Spicy Chili Bowl",
    description: "Hearty chili packed with our chili heat blend for the perfect kick.",
    image: "/placeholder.svg",
  },
];

const Recipes = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
              FlavorCraft Recipes
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Discover delicious ideas for your spices.
            </p>
          </div>
        </section>

        {/* Recipe Grid Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe, index) => (
                <div
                  key={recipe.id}
                  className="group animate-fade-in overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-large"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Recipe Image */}
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Recipe Content */}
                  <div className="p-6">
                    <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                      {recipe.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {recipe.description}
                    </p>
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full group/btn"
                    >
                      View Recipe
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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

export default Recipes;
