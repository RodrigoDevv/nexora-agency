import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, Crosshair, MonitorSmartphone, PenTool, BarChart3, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: <TrendingUp size={28} />,
    title: "Performance Marketing",
    description: "Data-driven campaigns across Google, Meta, and TikTok designed to maximize ROI and scale revenue predictably.",
  },
  {
    icon: <Crosshair size={28} />,
    title: "Brand Strategy",
    description: "Positioning, messaging, and identity design that sets you apart from the competition and builds lasting loyalty.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Web Design & Dev",
    description: "High-performance, conversion-optimized websites and digital experiences built for scale.",
  },
  {
    icon: <PenTool size={28} />,
    title: "Content Creation",
    description: "High-impact video production, copywriting, and creative assets that stop the scroll and capture attention.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Paid Ads & Funnels",
    description: "End-to-end funnel optimization, from click to conversion, engineered for maximum customer lifetime value.",
  }
];

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id="services" className="py-32 bg-primary px-6 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,252,83,0.05),transparent_50%)] pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <motion.div style={{ y: yBg }} className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-bold tracking-widest text-accent uppercase">Our Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-tight">
              We design for <br className="hidden md:block" />
              <span className="text-white/50">maximum impact.</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm md:text-right font-medium">
            A comprehensive suite of digital services engineered to dominate your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative p-10 rounded-[32px] bg-[#121212] light:bg-[#ffffff] border border-white/5 overflow-hidden group hover:border-white/20 transition-colors shadow-2xl ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              } ${index === 3 || index === 4 ? 'lg:col-span-1 md:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full min-h-[220px]">
                <div className="flex justify-between items-start mb-auto">
                  <div className="p-4 bg-white/5 rounded-2xl text-white group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-500 backdrop-blur-sm border border-white/5 shadow-inner">
                    {service.icon}
                  </div>
                  <motion.div 
                    className="p-3 bg-white text-primary rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative corner glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
