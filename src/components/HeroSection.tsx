import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-yoga.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80svh] max-h-[85svh] flex flex-col bg-gradient-to-br from-purple-100 to-blue-100">
      
      {/* Image container */}
      <div className="relative w-full flex-1 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Virtual Yoga Classes"
          className="w-full h-full object-contain md:object-cover object-center

"
        />
      </div>

      {/* Content at bottom */}
      <div className="relative z-10 w-full px-5 pb-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-3 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center"
          >
            <Link
              to="/booking"
              className="btn-primary-small inline-block text-center"
            >
              Start Your Free Trial
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center justify-center gap-3 pt-1"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-yoga-lavender-light border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs text-primary">✓</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              500+ students transformed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
