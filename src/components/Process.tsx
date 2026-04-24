import { motion, useScroll, useTransform } from 'motion/react';
import { Search, PenTool, Rocket, Outdent as LayoutScreen, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    num: "01",
    icon: <Search size={28} />,
    title: "Discover",
    desc: "Deep-dive analysis into your market, competitors, and current bottlenecks to uncover hidden opportunities."
  },
  {
    num: "02",
    icon: <PenTool size={28} />,
    title: "Strategize",
    desc: "We engineer a bespoke roadmap mapping every touchpoint from first click to loyal customer."
  },
  {
    num: "03",
    icon: <LayoutScreen size={28} />,
    title: "Execute",
    desc: "Deployment of high-converting assets, landing pages, and ad networks with relentless precision."
  },
  {
    num: "04",
    icon: <Rocket size={28} />,
    title: "Scale",
    desc: "Continuous A/B testing, budget optimization, and data-driven iterations to multiply your ROI."
  }
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id="process" className="py-32 bg-primary px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div style={{ y: yBg }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen z-0" />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-screen z-0"
        style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, #fff 2px, #fff 4px)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-bold tracking-widest text-accent uppercase">How it works</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white mb-2">
              Our Methodology
            </h2>
            <p className="text-white/50 text-lg max-w-xl font-medium mt-6">
              From initial audit to explosive scale, here is the exact framework we use to engineer market dominance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-[32px] bg-[#121212] light:bg-[#ffffff] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl group flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              {/* Animated node dot on the connecting line */}
              <div className="hidden lg:block absolute -top-[53px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[3px] border-[#121212] bg-white/20 group-hover:bg-accent group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(227,252,83,0)] group-hover:shadow-[0_0_15px_rgba(227,252,83,0.5)] z-10" />

              <div className="mb-6 relative w-full flex justify-center lg:justify-start">
                <div className="absolute top-4 right-0 lg:-right-4 text-7xl font-display font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 select-none">
                  {step.num}
                </div>
                <div className="w-20 h-20 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-primary group-hover:bg-accent transition-colors duration-500 relative z-10 shadow-lg group-hover:shadow-[0_0_30px_rgba(227,252,83,0.3)]">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-accent transition-colors duration-500 relative z-10">{step.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium relative z-10">
                {step.desc}
              </p>

              {/* Progress arrow indicators except for last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center text-white/20 group-hover:text-accent transition-colors duration-500">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
