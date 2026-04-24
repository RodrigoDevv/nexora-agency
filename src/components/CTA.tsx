import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="contact" className="py-40 px-6 md:px-12 bg-[#030504] relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Immersive Background matching Hero */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#030504]">
        {/* Abstract Fluid Shapes */}
        <motion.div
          animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '5%', '-5%'], scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#0c2e17] rounded-full mix-blend-screen filter blur-[120px] opacity-70"
        />
        <motion.div
          animate={{ x: ['5%', '-5%', '5%'], y: ['5%', '-5%', '5%'], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#1a4a25] rounded-full mix-blend-screen filter blur-[130px] opacity-60"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] bg-accent/10 rounded-[100%] mix-blend-screen filter blur-[150px] opacity-80" />

        {/* Perspective Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)'
          }}
        />

        {/* Outer Vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-[#030504] pointer-events-none" />
      </motion.div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 p-12 md:p-20 border border-white/10 rounded-[40px] bg-black/40 backdrop-blur-xl shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8 shadow-[0_0_15px_rgba(227,252,83,0.2)]"
        >
          <Sparkles size={16} />
          <span className="text-sm font-bold tracking-widest uppercase">Start Growing Today</span>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-8 text-white drop-shadow-2xl cursor-default"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.span whileHover={{ color: 'var(--color-accent)', scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block transition-colors">Ready to</motion.span> <br className="hidden md:block"/> <motion.span whileHover={{ color: 'var(--color-accent)', scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block transition-colors">Scale Your Brand?</motion.span>
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium cursor-default"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stop settling for average returns. Partner with the agency that engineers market dominance. No fluff, just results.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-bold rounded-full overflow-hidden text-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(227,252,83,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-accent/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 group-hover:px-2 transition-all duration-300">Book a Free Strategy Call</span>
            <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-8 text-white/40 text-sm font-semibold tracking-wider uppercase">No obligations. Just a data-driven path to growth.</p>
        </motion.div>
      </div>
    </section>
  );
}
