import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  const textX = useTransform(smoothX, [-0.5, 0.5], ['-40px', '40px']);
  const textY = useTransform(smoothY, [-0.5, 0.5], ['-40px', '40px']);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ['-30vw', '30vw']);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ['-30vh', '30vh']);

  // Load progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Simulate varied loading speed for realism
      currentProgress += Math.random() * 20;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(Math.min(currentProgress, 100));
      
      if (currentProgress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 600); // Small delay after hitting 100% to let users see the final state
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030403] text-white overflow-hidden"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Subtle background noise */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Interactive Light Follower responding to mouse */}
      <motion.div 
        className="absolute rounded-full w-[60vw] h-[60vw] bg-accent/5 blur-[150px] pointer-events-none"
        style={{ x: glowX, y: glowY }}
      />

      {/* Core Typographic Composition */}
      <motion.div 
        style={{ x: textX, y: textY }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="overflow-hidden flex flex-col items-center mb-6">
          <motion.h1
            initial={{ y: '100%', rotate: 4, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="text-7xl md:text-9xl lg:text-[140px] leading-none font-display font-medium tracking-tighter cursor-crosshair pr-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 inline-block hover:scale-105 transition-transform duration-500">Nexora</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-accent italic font-mono text-sm tracking-widest mt-2 uppercase pr-4"
          >
            by Rodrigo
          </motion.p>
        </div>
        
        <div className="overflow-hidden flex flex-col items-center">
          {/* Custom Rodrigo Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/50 text-[10px] md:text-xs tracking-[0.4em] uppercase font-mono mb-12 text-center max-w-sm"
          >
            Crafting the Future of Digital Experiences
          </motion.p>
          
          {/* Interactive Loading Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-[2px] bg-white/10 overflow-hidden relative mb-4 rounded-full">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-accent shadow-[0_0_15px_rgba(227,252,83,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex w-64 justify-between font-mono text-[10px] text-white/40 tracking-[0.2em] font-medium opacity-70">
              <span>SYSTEM_BOOT</span>
              <span>
                {Math.floor(progress).toString().padStart(3, '0')}% 
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
