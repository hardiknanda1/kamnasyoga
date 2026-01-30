import { motion } from 'framer-motion';
import { Heart, Sparkles, Flame, TreePine, Sun } from 'lucide-react';

const weightLossPoints = [
  {
    icon: Flame,
    title: 'Loose Weight',
    description: ' burn 200-600 calories per session',
  },
  {
    icon: Heart,
    title: 'Boost Metabolism',
    description: 'Regular practice increases your metabolic rate naturally',
  },
  {
    icon: TreePine,
    title: 'Build Lean Muscle',
    description: 'Yoga tones muscles, helping you burn fat even at rest',
  },
  {
    icon: Sparkles,
    title: 'Reduce Stress Eating',
    description: 'Mindfulness helps control emotional eating habits',
  },
  {
    icon: Sun,
    title: 'Better Sleep',
    description: 'Quality sleep is essential for healthy weight management',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-yoga-lavender-light pb-24">
      {/* Weight Loss Section */}
      <div className="section-mobile">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <h2 className="heading-section">Yoga for Weight Loss</h2>
            <p className="text-body">Transform your body naturally with regular practice</p>
          </div>

          <div className="space-y-4">
            {weightLossPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{point.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="px-5 pt-8 border-t border-border/50">
        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            © 2024 Yoga Wellness. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Made with <span className="text-primary">♥</span> for your wellness journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
