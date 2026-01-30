import MobileHeader from '@/components/MobileHeader';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BenefitsSection from '@/components/BenefitsSection';
import FinalCTASection from '@/components/FinalCTASection';
import StickyBottomCTA from '@/components/StickyBottomCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileHeader />
      <main>
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <TestimonialsSection />
        <BenefitsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyBottomCTA />
    </div>
  );
};

export default Index;
