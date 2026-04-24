import { motion, useScroll, useTransform } from 'motion/react';
import { Quote } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "NEXORA completely re-engineered our acquisition funnel. We saw a 3x increase in qualified leads within the first 60 days.",
    author: "Sarah Jenkins",
    role: "CMO, Elevate Tech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    quote: "Their approach to brand strategy and paid media is unmatched. They don't just run ads; they build dominant market positions.",
    author: "Marcus Chen",
    role: "Founder, Aura Health",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    quote: "Working with NEXORA is like having an elite internal growth team. Data-driven, transparent, and incredibly effective.",
    author: "Elena Rodriguez",
    role: "CEO, Lumina",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="py-32 bg-[#030504] px-6 md:px-12 overflow-hidden relative">
      <motion.div style={{ y: yBg }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none z-0"
        style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(227,252,83,0.08),transparent_50%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-bold tracking-widest text-accent uppercase">Testimonials</span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-white mb-4">
            Hear From Our Partners
          </h2>
          <p className="text-white/50 max-w-xl font-medium">
            Don't just take our word for it. Here's what industry leaders have to say about partnering with our agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="relative p-10 bg-[#121212] light:bg-[#ffffff] rounded-[32px] border border-white/5 group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl border border-white/5 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors duration-500 shadow-inner inline-flex">
                <Quote size={28} className="text-white/30 group-hover:text-accent transition-colors duration-500" />
              </div>
              
              <p className="text-lg md:text-xl text-white/90 mb-10 min-h-[120px] font-medium leading-relaxed relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-accent rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                  <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10" />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-wider text-sm mb-1">{t.author}</div>
                  <div className="text-accent/80 text-xs font-semibold tracking-wider uppercase">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
