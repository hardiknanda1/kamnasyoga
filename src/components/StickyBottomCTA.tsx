import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const StickyBottomCTA = () => {
  return <motion.div initial={{
    y: 100
  }} animate={{
    y: 0
  }} transition={{
    delay: 1,
    duration: 0.5
  }} className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-safe-bottom">
      <div className="bg-background/80 backdrop-blur-lg rounded-2xl p-3 shadow-card border border-border/50">
        <Link to="/booking" className="btn-primary block text-center py-4 text-base font-semibold">Start Your Free Trial Now </Link>
      </div>
    </motion.div>;
};
export default StickyBottomCTA;