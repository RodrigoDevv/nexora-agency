import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you work with startups, or only established brands?",
    answer: "We partner primarily with brands doing $5M+ ARR, or well-funded Series A+ tech startups that have achieved clear product-market fit and are ready for aggressive, scalable acquisition."
  },
  {
    question: "What is your typical onboarding timeline?",
    answer: "Our Discovery and Strategy phase takes exactly 14 days. On day 15, we launch the initial scaling frameworks. We move extremely fast because we deploy established, proven systems rather than guessing."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "Unlike traditional agencies that lock you into 12-month retainers, we offer 90-day strategic sprints, or rolling month-to-month agreements for our Retained Growth tier. We prefer keeping our partners through performance, not legal bindings."
  },
  {
    question: "Who owns the ad accounts and the data?",
    answer: "You do. 100%. We operate directly within your Business Managers and platforms. Full transparency is a core pillar of our methodology; you see every dollar spent and every lead generated."
  },
  {
    question: "How do you integrate with our internal teams?",
    answer: "We set up shared Slack/Teams channels and operate essentially as a dedicated, elite department within your org. We collaborate closely with your internal creative or product teams to ensure perfect brand alignment."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} id="faq" className="py-32 bg-[#050605] px-6 md:px-12 relative border-t border-white/5 overflow-hidden">
      {/* Background Enhanced */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/3 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      />

      <motion.div style={{ y: yContent }} className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-bold tracking-widest text-accent uppercase">Clarifications</span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-white mb-6">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-[#121212] border-accent/20' : 'bg-transparent border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center gap-6"
                >
                  <span className={`text-xl font-display font-bold transition-colors ${isOpen ? 'text-accent' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-accent/10 text-accent rotate-180' : 'bg-white/5 text-white/50'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2 text-white/60 font-medium leading-relaxed border-t border-white/5 mx-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
