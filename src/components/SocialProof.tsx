import { motion, useScroll, useTransform } from 'motion/react';
import { Star } from 'lucide-react';
import { useRef } from 'react';

const logos = [
  "ACME CORP", "GLOBAL TECH", "NEXUS", "ELEVATE", "SYNERGY", "QUANTUM", "VELOCITY", "VERTEX",
  "ACME CORP", "GLOBAL TECH", "NEXUS", "ELEVATE", "SYNERGY", "QUANTUM", "VELOCITY", "VERTEX"
];

export default function SocialProof() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="py-24 bg-[#050605] border-y border-white/5 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      
      {/* Light glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      {/* Heavy edge fading masks */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050605] via-transparent to-[#050605] z-10 pointer-events-none w-full" />
      
      <motion.div style={{ y: yContent }} className="max-w-7xl mx-auto px-6 mb-16 text-center z-20 relative flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-accent fill-accent" />)}
        </div>
        <p className="text-sm font-semibold tracking-widest text-white/50 uppercase">
          Trusted by 100+ innovative brands worldwide
        </p>
      </motion.div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-16 items-center flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-16 px-4"
            >
              <span className="text-2xl md:text-4xl font-display font-black tracking-tighter text-white/10 hover:text-white transition-colors duration-500 cursor-default uppercase">
                {logo}
              </span>
              <div className="w-2 h-2 rounded-full bg-accent/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
