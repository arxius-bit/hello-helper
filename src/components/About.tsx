import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3"
        >
          Our Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4"
        >
          A Neighborhood Treasure
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gold-divider mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-6"
        >
          Stepping into Elegante Pastry Shop feels like entering a beloved neighborhood treasure, where the steady hum of Brooklyn life softens into the warm, inviting aroma of freshly baked sweets. The moment you cross its threshold at 165 Avenue U, a sense of comforting familiarity wraps around you — not rushed or flashy, but quietly confident in its craft and care.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-6"
        >
          From carefully crafted wedding cakes to light, airy strawberry shortcakes, each bite offers a quiet joy — a reminder of simpler times and the care that goes into preserving a family tradition. It's the kind of bakery that resonates with those who seek a genuine experience, where freshness and kindness are as integral as the recipes passed down through years of devotion.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display italic text-primary text-lg md:text-xl"
        >
          "One of the last Italian Pastry shops in Gravesend, Brooklyn."
        </motion.p>
      </div>
    </section>
  );
};

export default About;
