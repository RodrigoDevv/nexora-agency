import { motion } from 'motion/react';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030504] pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-accent/5 blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-2 text-3xl font-display font-black tracking-tight text-white mb-6 hover:text-accent transition-colors">
              NEXORA
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            </a>
            <p className="text-white/50 max-w-sm mb-10 leading-relaxed font-medium">
              We don't just market. We dominate attention. The premier growth partner for ambitious brands ready to scale.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-accent hover:bg-accent transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-start-7 md:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Capabilities</h4>
            <ul className="flex flex-col gap-5">
              {['Performance Marketing', 'Brand Strategy', 'Web Design', 'Content Creation', 'SEO & Data Analytics'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/50 hover:text-accent font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Agency</h4>
            <ul className="flex flex-col gap-5">
              {['About Us', 'Case Studies', 'Careers', 'Contact', 'Insights Grid'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/50 hover:text-accent font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-white/40 text-sm font-medium">© {new Date().getFullYear()} NEXORA Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
