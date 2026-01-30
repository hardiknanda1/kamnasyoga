import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="section-mobile bg-gradient-soft pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="w-16 h-16 rounded-full bg-yoga-lavender-light mx-auto flex items-center justify-center animate-float">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>

        <h2 className="heading-section">Start Your Free Trial Today</h2>
        
        <p className="text-body max-w-xs mx-auto">
          2 free classes. No pressure. Join only if it feels right.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link to="/booking" className="btn-primary inline-block w-full max-w-xs">
            Start Free Trial
          </Link>
        </motion.div>

        <p className="text-xs text-muted-foreground">
          No credit card required • Cancel anytime
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
