import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cake, Cookie, Coffee, Gift } from "lucide-react";

const menuItems = [
  {
    icon: Cake,
    title: "Celebration Cakes",
    description: "Custom wedding cakes, birthday cakes, and beautifully decorated creations for every milestone.",
  },
  {
    icon: Cookie,
    title: "Classic Pastries",
    description: "Lobster tails, cannoli, fruit tarts, and an array of traditional Italian favorites baked fresh daily.",
  },
  {
    icon: Coffee,
    title: "Coffee & Treats",
    description: "Pair your favorite pastry with freshly brewed coffee for the perfect afternoon indulgence.",
  },
  {
    icon: Gift,
    title: "Seasonal Specials",
    description: "Holiday favorites and limited-edition creations that celebrate the flavors of every season.",
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Our Menu
          </h2>
          <div className="gold-divider mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From rich chocolate cakes to delicately crafted fruit tarts, our menu balances variety with a sense of familiarity — encouraging you to explore new flavors while returning to trusted favorites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-5 p-6 bg-card rounded-sm border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <img
            src="https://cdn.placejoys.com/9033-oy-img-menu-1.jpg"
            alt="Elegante Pastry Shop menu"
            loading="lazy"
            className="mx-auto rounded-sm shadow-lg max-w-full md:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
