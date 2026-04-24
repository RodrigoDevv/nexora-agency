import { ArrowRight, Play, Lock, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative min-h-[140vh] md:min-h-screen w-full bg-primary overflow-hidden pt-32 pb-20 flex flex-col items-center">
      {/* Immersive Animated Aurora & Grid Background */}
      <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-hero-base">
        {/* Abstract Fluid Shapes */}
        <motion.div
          animate={{
            x: ['-5%', '10%', '-5%'],
            y: ['-5%', '15%', '-5%'],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent/15 blur-[140px] mix-blend-screen light:mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: ['10%', '-10%', '10%'],
            y: ['10%', '-10%', '10%'],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-hero-blob1 blur-[150px] mix-blend-screen light:mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: ['-5%', '15%', '-5%'],
            y: ['10%', '-10%', '10%'],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-hero-blob2 blur-[130px] mix-blend-screen light:mix-blend-multiply"
        />

        {/* Dynamic Light Beams */}
        <div className="absolute inset-0 overflow-hidden opacity-40 mix-blend-screen light:mix-blend-normal">
          <motion.div 
            animate={{ x: ['-200%', '200%'], opacity: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent -rotate-45 origin-left"
          />
          <motion.div 
            animate={{ x: ['200%', '-200%'], opacity: [0, 1, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
            className="absolute top-[30%] left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 origin-left"
          />
        </div>

        {/* Elegant Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] hero-grid"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-hero-vignette opacity-80" />
      </motion.div>

      {/* Top Header Content */}
      <motion.div style={{ y: yText }} className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 flex flex-col items-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1.5 pr-5 mb-8 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:border-white/20"
        >
          <span className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles size={12} className="text-primary" /> New
          </span>
          <span className="text-sm font-medium text-white/90">
            No Hidden Pricing
          </span>
          <ArrowRight size={14} className="text-white/70" />
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[84px] font-display font-bold leading-[1.05] tracking-tight mb-6 cursor-default group"
        >
          <motion.span 
            className="inline-block transition-colors duration-500 group-hover:text-white/90"
          >
            Architecting the Next
          </motion.span>
          <br className="hidden md:block" /> 
          <motion.span 
            whileHover={{ scale: 1.02, textShadow: "0px 0px 30px var(--color-accent)" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 hover:from-accent hover:to-accent/70 cursor-crosshair"
          >
            Generation of Brands
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl font-light mb-10 cursor-default"
        >
          Powering bold ideas with <motion.span whileHover={{ color: 'var(--color-white)', scale: 1.05, y: -2 }} transition={{ type: 'spring', stiffness: 400 }} className="inline-block text-white/80 font-medium">future-proof strategy</motion.span>, <motion.span whileHover={{ color: 'var(--color-white)', scale: 1.05, y: -2 }} transition={{ type: 'spring', stiffness: 400 }} className="inline-block text-white/80 font-medium">boundless creativity</motion.span>, and <motion.span whileHover={{ color: 'var(--color-accent)', scale: 1.05, y: -2 }} transition={{ type: 'spring', stiffness: 400 }} className="inline-block text-white/80 font-medium">explosive tech-driven growth</motion.span>.<br className="hidden md:block" /> 
          The premium modern agency for ambitious enterprises.<br className="hidden md:block" /> 
          <span className="text-white/70 italic block mt-2 text-base">Forging market leadership through relentless innovation.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-white transition-all overflow-hidden shadow-[0_0_30px_rgba(227,252,83,0.2)] hover:shadow-[0_0_40px_rgba(227,252,83,0.4)]"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#demo"
            className="group flex items-center justify-center gap-3 px-8 py-3.5 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={12} className="text-primary ml-0.5" />
            </div>
            Watch Demo
          </a>
        </motion.div>
      </motion.div>

      {/* Bento Grid / Bottom Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-24">
        {/* Glow effect coming from behind the cards */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3 w-[90%] h-[300px] bg-accent/20 blur-[150px] rounded-[100%] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 auto-rows-[160px] lg:auto-rows-[180px]">
          
          {/* Card 1: Marketing Team (Large Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative lg:col-span-2 lg:row-span-2 rounded-[32px] overflow-hidden group border border-white/5 hover:border-white/20 transition-colors shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
              alt="Marketing Team" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] grayscale opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
            
            <motion.div 
              className="absolute top-6 right-6 bg-white py-2 px-4 rounded-full flex items-center gap-2 shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-primary animate-pulse rounded-sm" />
              <span className="text-primary text-sm font-bold">Marketing Team</span>
            </motion.div>
            
            <div className="absolute bottom-8 left-8 right-8 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-3xl font-bold font-display">Elite Experts</h3>
              <p className="text-white/70 text-base mt-2 max-w-sm">Driving your brand forward with precision and data-backed creativity.</p>
            </div>
          </motion.div>

          {/* Card 2: Clients (Bottom Left in reference, adapts to grid) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[32px] p-8 lg:col-span-1 lg:row-span-1 flex flex-col justify-center items-center text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/30 blur-3xl rounded-full group-hover:bg-accent/40 transition-colors" />
            <h2 className="text-5xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">100+</h2>
            <p className="text-primary/60 text-sm font-semibold leading-tight max-w-[150px]">
              Our Esteemed Clients and Partners
            </p>
          </motion.div>

          {/* Card 3: Trusted & Transparent */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-[#121212] border border-white/5 rounded-[32px] p-8 lg:col-span-1 lg:row-span-1 flex flex-col shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            <h3 className="text-white font-bold text-xl leading-tight z-10 mt-2">Trusted &<br/>Transparent<br/>Growth</h3>
            
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-white/5 rounded-[24px] border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors flex items-center justify-center rotate-[-10deg] group-hover:rotate-0 duration-500">
              <ShieldCheck size={36} className="text-white/40 group-hover:text-accent transition-colors" />
            </div>
          </motion.div>

          {/* Card 4: Global Enterprise (Right side tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[32px] p-8 lg:col-span-1 lg:row-span-2 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
             
            <div className="z-20 mt-2">
              <h2 className="text-4xl font-display font-bold text-primary mb-3">20+</h2>
              <p className="text-primary/60 text-sm font-semibold leading-tight mb-6 max-w-[180px]">
                Global Enterprise drives innovation
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary text-accent text-xs font-bold rounded-full">Mexico</span>
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">Australia</span>
              </div>
            </div>

            {/* Black Globe Visualization */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-br from-[#1a1a1a] to-primary rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.8),10px_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center border border-[#333]"
            >
              <Globe size={240} className="text-[#333] opacity-30" strokeWidth={0.5} />
            </motion.div>
          </motion.div>

          {/* Card 5: 98.5% Success (Bottom section middle) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-[#121212] border border-white/5 rounded-[32px] p-8 lg:col-span-2 lg:row-span-1 flex flex-col md:flex-row shadow-2xl relative overflow-hidden items-center justify-between group hover:border-white/10 transition-colors"
          >
            <div className="mb-6 md:mb-0 z-10">
              <h2 className="text-5xl font-display font-bold text-white mb-3">98.5%</h2>
              <p className="text-white/50 text-sm font-medium leading-relaxed max-w-[200px]">
                Marketing campaigns have achieved 98% success rate
              </p>
            </div>
            
            {/* Bar Chart Graphic */}
            <div className="flex items-end gap-3 h-28 mr-4 z-10">
              <motion.div 
                initial={{ height: 0 }} animate={{ height: '40%' }} transition={{ duration: 1, delay: 1 }}
                className="w-10 bg-white/5 rounded-t-lg group-hover:bg-white/10 transition-colors" 
              />
              <motion.div 
                initial={{ height: 0 }} animate={{ height: '65%' }} transition={{ duration: 1, delay: 1.1 }}
                className="w-10 bg-white/5 rounded-t-lg group-hover:bg-white/10 transition-colors" 
              />
              <motion.div 
                initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ duration: 1, delay: 1.2 }}
                className="w-10 bg-accent rounded-t-lg shadow-[0_0_20px_rgba(227,252,83,0.3)] relative overflow-hidden"
              >
                 <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,black_2px,black_4px)]" />
              </motion.div>
              <motion.div 
                initial={{ height: 0 }} animate={{ height: '30%' }} transition={{ duration: 1, delay: 1.3 }}
                className="w-10 bg-white/5 rounded-t-lg group-hover:bg-white/10 transition-colors" 
              />
            </div>
            
            {/* Subtle background glow for chart */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
