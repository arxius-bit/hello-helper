import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bakery.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Elegante Pastry Shop display of fine Italian pastries"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-light text-sm md:text-base tracking-[0.3em] uppercase font-body mb-4"
        >
          Brooklyn&apos;s Beloved Italian Bakery
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-cream mb-6 leading-tight"
        >
          Elegante
          <span className="block text-3xl md:text-4xl lg:text-5xl font-normal italic text-gold-light mt-2">
            Pastry Shop
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-20 h-px bg-gold-light mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-cream/80 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Where sweet moments are crafted daily with love, tradition, and the finest ingredients since our doors first opened.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#gallery"
            className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm"
          >
            Explore Our Pastries
          </a>
          <a
            href="#location"
            className="px-8 py-3 border border-gold-light/50 text-cream font-body text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors rounded-sm"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border-2 border-cream/40 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-cream/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
