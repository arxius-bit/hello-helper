import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream/70 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-semibold text-cream mb-2">Elegante</h3>
            <p className="font-display italic text-gold-light text-sm mb-4">Pastry Shop</p>
            <p className="font-body text-sm leading-relaxed text-cream/50">
              A quietly remarkable spot where sweet moments are created daily in the heart of Brooklyn.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-cream mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Gallery", "Menu", "Reviews", "Visit Us"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-").replace("visit-us", "location")}`}
                  className="font-body text-sm text-cream/50 hover:text-gold-light transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-cream mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-light" />
                <span className="font-body text-sm text-cream/50">165 Avenue U, Brooklyn, NY 11223</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-light" />
                <span className="font-body text-sm text-cream/50">(718) 373-7008</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 text-center">
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} Elegante Pastry Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
