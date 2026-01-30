import { motion } from 'framer-motion';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.png';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 28,
    image: testimonial1,
    quote: "After just 3 months, I felt energetic and more flexible.The gentle approach is perfect!",
  },
  {
    id: 2,
    name: 'Sunita Mehta',
    age: 45,
    image: testimonial2,
    quote: "I lost 15 Kg's of my weight in just 4 months These online classes fit perfectly into my schedule.",
  },
  {
    id: 3,
    name: 'Kamala Devi',
    age: 65,
    image: testimonial3,
    quote: "I never thought I could do yoga at my age. I feel 10 years younger!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-mobile bg-yoga-lavender-light">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="heading-section text-center">What Our Students Say</h2>

        {/* Testimonial Grid - Show 2 at once */}
        <div className="grid grid-cols-2 gap-3">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay with review text */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent flex flex-col justify-end p-3">
                <p className="text-white text-xs italic leading-relaxed mb-2">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h3 className="font-semibold text-white text-sm">{testimonial.name}</h3>
                  <p className="text-xs text-white/80">Age {testimonial.age}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Third testimonial - full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card"
        >
          <img
            src={testimonials[2].image}
            alt={testimonials[2].name}
            className="w-full h-full object-cover"
          />
          {/* Overlay with review text */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent flex flex-col justify-end p-4">
            <p className="text-white text-sm italic leading-relaxed mb-2">
              "{testimonials[2].quote}"
            </p>
            <div>
              <h3 className="font-semibold text-white text-base">{testimonials[2].name}</h3>
              <p className="text-xs text-white/80">Age {testimonials[2].age}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
