import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Car, CreditCard, Truck } from "lucide-react";

const hours = [
  { day: "Monday", time: "7:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 8:00 PM" },
  { day: "Thursday", time: "7:00 AM – 8:00 PM" },
  { day: "Friday", time: "7:00 AM – 8:00 PM" },
  { day: "Saturday", time: "7:00 AM – 8:00 PM" },
  { day: "Sunday", time: "7:00 AM – 7:00 PM" },
];

const services = [
  { icon: Truck, label: "Delivery" },
  { icon: Car, label: "Takeaway" },
  { icon: CreditCard, label: "All Cards & NFC" },
];

const Location = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="location" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Find Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Visit Our Shop
          </h2>
          <div className="gold-divider" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Map */}
          <div className="rounded-sm overflow-hidden border border-border h-[400px]">
            <iframe
              title="Elegante Pastry Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.7!2d-73.9782!3d40.5966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244ff5b84aced%3A0xed41791c87b426b5!2sElegante%20Pastry%20Shop!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Address</h3>
                <p className="font-body text-muted-foreground text-sm">
                  165 Avenue U, Brooklyn, NY 11223, United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Phone</h3>
                <a href="tel:+17183737008" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                  +1 (718) 373-7008
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Hours</h3>
                <div className="space-y-1">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between font-body text-sm text-muted-foreground min-w-[260px]">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              {services.map((s) => (
                <div key={s.label} className="flex items-center gap-2 bg-card px-3 py-2 rounded-sm border border-border">
                  <s.icon className="w-4 h-4 text-primary" />
                  <span className="font-body text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
