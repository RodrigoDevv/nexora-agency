import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldAlert, Zap, BarChart, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const models = [
  {
    icon: <BarChart size={32} />,
    title: "Retained Growth",
    subtitle: "Month-to-Month Partnership",
    desc: "A dedicated offshore growth team acting as your internal department. Full-funnel management, daily optimizations, and weekly strategic sprints.",
    features: ["Dedicated Account Lead", "Media Buying & Creative", "CRO & Analytics", "Weekly Reporting"],
    popular: false
  },
  {
    icon: <Zap size={32} />,
    title: "Performance Partner",
    subtitle: "Revenue Share / Equity",
    desc: "We invest our resources, taking on the risk alongside you. We only scale our fees when your top-line revenue hits predefined explosive thresholds.",
    features: ["Skin in the game", "Priority Resource Allocation", "C-Suite Advisory", "Aggressive Scale Mandate"],
    popular: true
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "Strategic Sprint",
    subtitle: "90-Day Execution",
    desc: "A high-intensity, 90-day intervention to audit, rebuild, and re-launch your acquisition funnel. Perfect for brands needing an immediate paradigm shift.",
    features: ["Comprehensive Audit", "Funnel Re-engineering", "Asset Overhaul", "Team Handover"],
    popular: false
  }
];

export default function EngagementModels() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id="engagement" className="py-32 bg-[#050605] px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y: yBg }} className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen z-0"
        style={{
          backgroundImage: `linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-bold tracking-widest text-accent uppercase">Partnership Models</span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-white mb-4">
            How We Engage
          </h2>
          <p className="text-white/50 max-w-xl font-medium">
            We offer flexible, high-stakes partnership models designed to align with your aggressive growth targets and mitigate downside risk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className={`relative p-10 rounded-[32px] bg-[#121212] light:bg-[#ffffff] border transition-all duration-500 group overflow-hidden ${
                model.popular ? 'border-accent/50 shadow-[0_0_30px_rgba(227,252,83,0.1)] hover:shadow-[0_0_40px_rgba(227,252,83,0.2)]' : 'border-white/5 hover:border-white/20 hover:-translate-y-2'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {model.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent text-black font-bold uppercase tracking-widest text-xs px-6 py-1.5 rounded-b-xl shadow-[0_0_15px_rgba(227,252,83,0.5)]">
                  Most Elite
                </div>
              )}

              <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 mt-4">
                {model.icon}
              </div>
              
              <h3 className="text-3xl font-display font-bold text-white mb-1">{model.title}</h3>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-6">{model.subtitle}</p>
              
              <p className="text-white/60 leading-relaxed font-medium mb-10 min-h-[100px]">
                {model.desc}
              </p>

              <div className="space-y-4 mb-10">
                {model.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    <span className="text-white/80 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#" className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all duration-300 uppercase tracking-widest text-sm ${
                model.popular 
                  ? 'bg-accent text-black hover:bg-black hover:text-white' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                Apply For Tier <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
