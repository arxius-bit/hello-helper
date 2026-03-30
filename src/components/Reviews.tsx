import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ms. Angela",
    date: "Jan 2026",
    text: "This place was recommended to me and we love it!!!! The cakes are so fresh and delicious. We have bought cakes on many occasions within the last 2 years. Absolutely delicious and highly recommended.",
    rating: 5,
  },
  {
    name: "Claire Marangelli Kennedy",
    date: "Jan 2026",
    text: "Elegante Bakery completely surpassed the vision I had for my bridal shower cake. They took an idea and brought it to life. The cake was not only visually stunning, but absolutely delicious.",
    rating: 5,
  },
  {
    name: "Sophie Adams",
    date: "Dec 2025",
    text: "Came in an hour before closing but was still welcomed in, the girls were very sweet and patient. I ordered a whole strawberry shortcake for my birthday and it was great — very light and very fluffy!",
    rating: 5,
  },
  {
    name: "Frank Salerno",
    date: "Nov 2025",
    text: "The best bakery in Brooklyn. Been going since I was 7 and still go. Everything is fresh, they have all the goods. You can't find bakeries like this anymore.",
    rating: 5,
  },
  {
    name: "Anthony Como",
    date: "Oct 2025",
    text: "Great pastry shop. One of the last Italian Pastry shops in Gravesend, Brooklyn. The service is great and the cakes even better.",
    rating: 5,
  },
  {
    name: "Nataliya Khrapina",
    date: "Nov 2025",
    text: "The cheesecake that I bought for Mother's Day was delicious. Service was fast, friendly and attentive. I will be back to try something else.",
    rating: 5,
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="reviews" className="section-padding bg-cream-dark" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="gold-divider mb-4" />
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-body text-muted-foreground text-sm">4.6 / 5 — 453+ Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-6 rounded-sm border border-border"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-foreground">{review.name}</span>
                <span className="font-body text-xs text-muted-foreground">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
