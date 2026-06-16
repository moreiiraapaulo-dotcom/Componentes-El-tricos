import { useState } from "react";
import { FAQItem } from "../types";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="oluap-faq" className="py-16 bg-white sm:py-20 border-b border-brand-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold tracking-widest text-brand-blue-500 uppercase font-mono bg-brand-blue-50 px-3 py-1 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-4 text-3xl font-extrabold font-display text-brand-blue-800 sm:text-4xl tracking-tight">
            Perguntas Comuns sobre a OLUAP
          </h2>
          <p className="mt-3 text-sm text-brand-slate-500">
            Esclareça suas principais dúvidas sobre faturamento corporativo no CNPJ, transporte expresso e normas de segurança.
          </p>
        </div>

        {/* FAQs List Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <div 
                key={i}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isExpanded 
                    ? "border-brand-blue-500 bg-brand-slate-50 shadow-sm" 
                    : "border-brand-slate-200 bg-white hover:border-brand-slate-300"
                }`}
                id={`faq-item-${i}`}
              >
                
                {/* Accordion Toggle Heading */}
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans select-none outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isExpanded ? "text-brand-blue-500" : "text-brand-slate-400"}`} />
                    <span className="text-xs font-extrabold text-brand-slate-900 font-display">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-lg border flex items-center justify-center transition-colors shrink-0 ${
                    isExpanded ? "bg-brand-blue-500 text-white border-brand-blue-500" : "bg-brand-slate-50 border-brand-slate-200 text-brand-slate-500"
                  }`}>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Animated Body height slide */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-0 border-t border-brand-slate-100 text-xs text-brand-slate-600 leading-relaxed font-sans">
                        <div className="pt-4 font-normal">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
