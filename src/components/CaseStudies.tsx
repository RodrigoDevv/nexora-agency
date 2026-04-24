import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const cases = [
  {
    client: "Aura Fintech",
    category: "Performance & Brand",
    metrics: ["+320% ROI", "2.1M Signups"],
    image: "https://i.pinimg.com/736x/7f/5e/3f/7f5e3fcc6bdf8d1d4b08401494fb69cb.jpg"
  },
  {
    client: "Lumina EV",
    category: "Web & Conversions",
    metrics: ["+150K Traffic", "45% Lower CPA"],
    image: "https://i.pinimg.com/736x/15/a7/aa/15a7aa7ddf34719fb7c2ff4f5c04b3e3.jpg"
  },
  {
    client: "Nova Health",
    category: "Content & Strategy",
    metrics: ["4.5x ROAS", "1M+ Impressions"],
    image: "https://i.pinimg.com/736x/70/52/ad/7052ad5f76a69b85133af4569959dc32.jpg"
  }
];

export default function CaseStudies() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="work" className="py-32 bg-[#050605] px-6 md:px-12 text-white relative overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 left-[-10%] w-[40vw] h-[40vw] bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-screen pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '64px 64px' }}
      />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-bold tracking-widest text-accent uppercase">Select Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-2">
              Proven Results
            </h2>
            <p className="text-white/50 text-lg max-w-xl font-medium mt-6">
              We don't just talk about growth. We engineer it. Explore how we've 
              transformed brands into category leaders.
            </p>
          </div>
          <a href="#" className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest text-white/90 group-hover:text-white">View All Work</span>
            <ArrowUpRight size={16} className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-[32px] bg-[#111] border border-white/5 cursor-pointer shadow-2xl aspect-[4/3] ${index === 0 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  style={{ y: yImage, scale: 1.15 }}
                  src={study.image} 
                  alt={study.client} 
                  className="absolute inset-0 w-full h-[130%] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
                
                {/* Border glow on hover */}
                <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 rounded-[32px] transition-colors duration-500 pointer-events-none" />
              </div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold tracking-widest uppercase text-white/80 group-hover:border-accent/30 group-hover:text-white transition-colors duration-500">
                    {study.category}
                  </span>
                  <div className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-[0_0_20px_rgba(227,252,83,0.5)]">
                    <ArrowUpRight size={28} strokeWidth={2.5} />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out drop-shadow-lg">{study.client}</h3>
                  <div className="flex gap-8 opacity-0 border-t border-white/10 pt-6 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-2xl md:text-4xl font-display font-bold text-accent drop-shadow-[0_0_15px_rgba(227,252,83,0.3)]">{metric}</div>
                        <div className="text-xs uppercase tracking-widest text-white/40 mt-2 font-semibold">Impact {i + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
