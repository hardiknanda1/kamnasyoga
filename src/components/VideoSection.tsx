import { motion } from 'framer-motion';
import instructorVideo from '@/assets/videoplayback.mp4';

const VideoSection = () => {
  return (
    <section className="section-mobile bg-gradient-soft">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="heading-section text-center">Meet Your Yoga Instructor</h2>
        <p className="text-body text-center mb-6">
          Gentle guidance towards better health, flexibility, and peace.
        </p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-[9/16] max-h-[500px] rounded-3xl overflow-hidden shadow-card mx-auto"
        >
          <video
            src={instructorVideo}
            controls
            playsInline
            className="w-full h-full object-cover"
            poster=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
