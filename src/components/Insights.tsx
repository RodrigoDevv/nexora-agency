import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { useRef } from 'react';

const articles = [
  {
    category: "Strategy",
    readTime: "5 min read",
    title: "The Death of Traditional ROAS: Why Blended CAC is the ultimate metric.",
    image: "https://i.pinimg.com/736x/88/c2/a6/88c2a619772b9141295e766ca769cd55.jpg"
  },
  {
    category: "Creative",
    readTime: "7 min read",
    title: "Direct Response Architecture: Engineering hooks that stop the dopamine scroll.",
    image: "https://i.pinimg.com/1200x/cb/1b/5f/cb1b5fa96c33975ddcea0e5cb4a69848.jpg"
  },
  {
    category: "Scaling",
    readTime: "10 min read",
    title: "Crossing the $10M ARR Chasm: Operational pivots required for aggressive scaling.",
    image: "https://i.pinimg.com/736x/cc/23/1c/cc231c09cd3e67cc1a15ad6d1c7956e7.jpg"
  }
];

export default function Insights() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="insights" className="py-32 bg-[#030504] px-6 md:px-12 relative border-t border-white/5 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,252,83,0.04),transparent_50%)] pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen z-0"
        style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-bold tracking-widest text-accent uppercase">Thought Leadership</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-2">
              Industry Insights
            </h2>
            <p className="text-white/50 text-lg max-w-xl font-medium mt-6">
              Executive-level strategies, tear-downs, and frameworks straight from the minds of our lead growth architects.
            </p>
          </div>
          <a href="#" className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest text-white/90 group-hover:text-white">Read All Articles</span>
            <ArrowUpRight size={16} className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] mb-8 shadow-xl">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img 
                  style={{ y: yImage, scale: 1.15 }}
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-[130%] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 border border-white/10 rounded-[24px] group-hover:border-accent/40 transition-colors duration-500 pointer-events-none z-20" />
              </div>
              
              <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest">
                <span className="text-accent">{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-white/40 flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white leading-snug group-hover:text-white/80 transition-colors mb-6 flex-1">
                {article.title}
              </h3>
              
              <div className="mt-auto flex items-center gap-2 text-white/50 group-hover:text-accent font-semibold text-sm transition-colors uppercase tracking-widest">
                Read Article <ArrowUpRight size={18} className="translate-y-[1px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
