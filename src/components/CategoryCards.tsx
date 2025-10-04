import { Button } from "@/components/ui/button";
import spicesImage from "@/assets/category-spices.jpg";
import herbsImage from "@/assets/category-herbs.jpg";
import pantryImage from "@/assets/category-pantry.jpg";

const categories = [
  {
    title: "Spice Blends",
    description: "Handcrafted blends for every cuisine and occasion",
    image: spicesImage,
    color: "primary",
  },
  {
    title: "Fresh Herbs",
    description: "Organic herbs bursting with natural goodness",
    image: herbsImage,
    color: "accent",
  },
  {
    title: "Pantry Essentials",
    description: "Premium oils, salts, and gourmet ingredients",
    image: pantryImage,
    color: "secondary",
  },
];

export const CategoryCards = () => {
  return (
    <section className="bg-background py-16 md:py-24" id="products">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center animate-fade-in-up">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Explore Our Collections
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Carefully curated ingredients that bring joy to your kitchen and warmth to your table
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-300 hover:shadow-large hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-2 font-display text-2xl font-bold text-primary-foreground">
                    {category.title}
                  </h3>
                  <p className="mb-4 text-sm text-primary-foreground/90">
                    {category.description}
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    Discover More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
