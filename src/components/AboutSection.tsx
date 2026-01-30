import { motion } from 'framer-motion';
import { Heart, Users, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '10+ Years Experience',
    description: 'Certified yoga instructor with decades of practice',
  },
  {
    icon: Users,
    title: 'All Skill Levels',
    description: 'From complete beginners to intermediate practitioners',
  },
  {
    icon: Heart,
    title: 'Holistic Approach',
    description: 'Mind, body, and spirit in perfect harmony',
  },
  {
    icon: Award,
    title: 'Certified Training',
    description: 'Internationally recognized yoga certifications',
  },
];

const AboutSection = () => {
  return (
    <section className="section-mobile">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="heading-section">About Your Guide</h2>

        <div className="card-yoga">
          <p className="text-body mb-4">
            Hello! I'm your dedicated yoga instructor, passionate about helping you discover 
            the transformative power of yoga. With over a decade of teaching experience, 
            I specialize in gentle, accessible yoga that welcomes everyone.
          </p>
          <p className="text-body">
            My classes are designed especially for <span className="font-semibold text-primary">beginners</span>, 
            <span className="font-semibold text-primary"> women</span>, 
            <span className="font-semibold text-primary"> seniors</span>, and 
            <span className="font-semibold text-primary"> working professionals</span> seeking 
            balance in their busy lives.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-yoga text-center p-4"
            >
              <div className="w-12 h-12 rounded-full bg-yoga-lavender-light mx-auto mb-3 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
