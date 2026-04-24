import { motion, useScroll, useTransform } from 'motion/react';
import { Twitter, Linkedin, Users, Trophy, Target } from 'lucide-react';
import { useRef } from 'react';

const team = [
  {
    name: "Alex Vance",
    role: "Founder & Chief Strategist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "Head of Performance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "David Kim",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  }
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="about" className="py-32 bg-primary px-6 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <motion.div style={{ y: yBg }} className="absolute top-1/2 right-[-10%] w-[40vw] h-[40vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-screen" 
        style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-accent uppercase">The Collective</span>
            </div>
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We don't follow best practices. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">We invent them.</span>
            </motion.h2>
          </div>
          <div className="flex flex-col justify-center">
            <motion.p 
              className="text-lg md:text-xl text-white/50 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              NEXORA was born from a simple truth: most marketing agencies are optimized 
              for safety, not scale. We exist to break the mold. Our collective comprises 
              elite analysts, visionary creatives, and ruthless executors dedicated to one 
              objective—total market dominance for our partners. 
              <br /><br />
              We blend data-driven precision with cutting-edge narrative design to create 
              campaigns that don't just capture attention, but convert it into measurable, 
              scalable revenue.
            </motion.p>
          </div>
        </div>

        {/* Global Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          <div className="bg-[#121212] p-8 rounded-[32px] border border-white/5 flex items-center gap-6 group hover:border-white/10 transition-colors shadow-xl">
             <div className="w-16 h-16 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
               <Users size={32} />
             </div>
             <div>
               <h4 className="text-4xl font-display font-bold text-white mb-1">50+</h4>
               <p className="text-white/40 text-sm font-semibold uppercase tracking-wider">Elite Experts</p>
             </div>
          </div>
          <div className="bg-[#121212] p-8 rounded-[32px] border border-white/5 flex items-center gap-6 group hover:border-white/10 transition-colors shadow-xl">
             <div className="w-16 h-16 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
               <Trophy size={32} />
             </div>
             <div>
               <h4 className="text-4xl font-display font-bold text-white mb-1">$2.4B</h4>
               <p className="text-white/40 text-sm font-semibold uppercase tracking-wider">Revenue Generated</p>
             </div>
          </div>
          <div className="bg-[#121212] p-8 rounded-[32px] border border-white/5 flex items-center gap-6 group hover:border-white/10 transition-colors shadow-xl">
             <div className="w-16 h-16 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
               <Target size={32} />
             </div>
             <div>
               <h4 className="text-4xl font-display font-bold text-white mb-1">99%</h4>
               <p className="text-white/40 text-sm font-semibold uppercase tracking-wider">Client Retention</p>
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-[32px] aspect-[3/4] border border-white/5 hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  style={{ y: yImage, scale: 1.15 }}
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-[120%] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050605] via-[#050605]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-display font-bold text-white mb-2">{member.name}</h3>
                <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">{member.role}</p>
                
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors border border-white/10 hover:border-accent">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors border border-white/10 hover:border-accent">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
