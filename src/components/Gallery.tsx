import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const photos = [
  { src: "https://cdn.placejoys.com/9033-oy-photo-1.jpg", alt: "Elegante storefront" },
  { src: "https://cdn.placejoys.com/9033-oy-photo-2.jpg", alt: "Pastry display" },
  { src: "https://cdn.placejoys.com/9033-oy-photo-3.jpg", alt: "Celebration cakes" },
  { src: "https://cdn.placejoys.com/9033-oy-photo-4.jpg", alt: "Italian cookies" },
  { src: "https://cdn.placejoys.com/9033-oy-photo-5.jpg", alt: "Wedding cakes" },
  { src: "https://cdn.placejoys.com/9033-oy-photo-6.jpg", alt: "Fruit tarts" },
  { src: "https://cdn.placejoys.com/9033-oy-photo-7.jpg", alt: "Pastry selection" },
  { src: "https://cdn.placejoys.com/9033-oy-photo-8.jpg", alt: "Bakery treats" },
];

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="gallery" className="section-padding bg-cream-dark" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Our Creations
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`overflow-hidden rounded-sm group ${
                i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
