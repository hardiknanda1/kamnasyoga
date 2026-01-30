import { motion } from 'framer-motion';
import flexibilityImg from '@/assets/benefit-flexibility.jpg';
import stressImg from '@/assets/benefit-stress.jpg';
import postureImg from '@/assets/benefit-posture.jpg';
import weightImg from '@/assets/benefit-weight.jpg';

const benefits = [
  {
    title: 'Better Health',
    description: 'Boost your overall wellness with regular yoga practice',
    image: postureImg,
  },
  {
    title: 'Weight Management',
    description: 'Boost metabolism and build lean muscle with regular practice',
    image: weightImg,
  },
  {
    title: 'Improved Flexibility',
    description: 'Gentle stretches that gradually increase your range of motion',
    image: flexibilityImg,
  },
  {
    title: 'Stress Relief',
    description: 'Calm your mind and find inner peace through mindful breathing',
    image: stressImg,
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-mobile">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="heading-section">Health Benefits of Yoga</h2>
        <p className="text-body">
          Transform your health with consistent practice
        </p>

        {/* Benefits List */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-yoga flex gap-4 items-center"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
