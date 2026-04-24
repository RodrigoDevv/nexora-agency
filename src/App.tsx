import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import EngagementModels from './components/EngagementModels';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Insights from './components/Insights';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Intro from './components/Intro';
import AIAssistant from './components/AIAssistant';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      syncTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`bg-primary min-h-screen text-white font-sans selection:bg-accent selection:text-primary relative ${showIntro ? 'h-screen overflow-hidden' : ''}`}>
      <AnimatePresence mode="wait">
        {showIntro && <Intro key="intro" onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* Global Noise Overlay for High-End Texture */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {!showIntro && (
        <>
          <Navbar />
          <main>
            <Hero />
            <SocialProof />
            <Services />
            <EngagementModels />
            <CaseStudies />
            <Process />
            <Testimonials />
            <About />
            <Insights />
            <FAQ />
            <CTA />
          </main>
          <Footer />
          <AIAssistant />
        </>
      )}
    </div>
  );
}
