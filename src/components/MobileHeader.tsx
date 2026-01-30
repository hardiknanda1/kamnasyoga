import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-background/60 backdrop-blur-md"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-cta flex items-center justify-center shadow-soft">
            <span className="text-primary-foreground font-display font-bold text-base">K</span>
          </div>
          <span className="font-display font-semibold text-foreground text-base">Kamna's Yoga</span>
        </Link>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Link 
            to="/booking" 
            className="px-3 py-2 rounded-full text-xs font-medium text-foreground bg-card/80 border border-border shadow-soft"
          >
            Book Now
          </Link>
          <Link 
            to="/booking" 
            className="px-3 py-2 rounded-full text-xs font-medium text-primary-foreground bg-gradient-cta shadow-soft"
          >
            Free Trial
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default MobileHeader;
