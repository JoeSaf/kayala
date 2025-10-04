import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="bg-gradient-subtle py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-center animate-fade-in-up">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              We're Here to Help
            </h2>
            <p className="text-lg text-muted-foreground">
              Questions about our products? Need cooking advice? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Phone Card */}
            <div className="group rounded-2xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <Phone className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">Call Us</h3>
              <p className="mb-3 text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
              <a
                href="tel:+1-555-FLAVOR"
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                +1 (555) FLAVOR-01
              </a>
            </div>

            {/* Email Card */}
            <div className="group rounded-2xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent">
                <Mail className="h-7 w-7 text-accent transition-colors group-hover:text-accent-foreground" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">Email Us</h3>
              <p className="mb-3 text-sm text-muted-foreground">We reply within 24 hours</p>
              <a
                href="mailto:hello@flavorcraft.com"
                className="font-medium text-accent transition-colors hover:text-accent/80"
              >
                hello@flavorcraft.com
              </a>
            </div>

            {/* Location Card */}
            <div className="group rounded-2xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 transition-colors group-hover:bg-secondary">
                <MapPin className="h-7 w-7 text-secondary transition-colors group-hover:text-secondary-foreground" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">Visit Us</h3>
              <p className="mb-3 text-sm text-muted-foreground">123 Spice Lane</p>
              <p className="font-medium text-foreground">Portland, OR 97201</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            <Button size="lg" className="bg-primary text-primary-foreground shadow-warm-glow hover:shadow-large transition-all">
              Send Us a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
