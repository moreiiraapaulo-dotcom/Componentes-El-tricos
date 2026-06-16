import { motion } from "motion/react";
import { ArrowRight, FileText, CheckCircle, ShieldCheck, Truck, Zap } from "lucide-react";

interface BannerProps {
  onScrollToCatalog: () => void;
}

export default function Banner({ onScrollToCatalog }: BannerProps) {
  const handleGeneralWhatsAppQuote = () => {
    const msg = `*PROPÓSITO DE COTAÇÃO - OLUAP COMPONENTES*\n\nOlá, gostaria de solicitar um orçamento corporativo para componentes elétricos/automação e detalhar nossa lista de necessidades técnicas. Aguardo contato de um consultor de engenharia. Obrigado!`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5544991655571?text=${encoded}`, "_blank");
  };

  return (
    <section id="oluap-banner" className="relative overflow-hidden bg-gradient-to-br from-brand-blue-800 via-brand-blue-700 to-brand-slate-900 text-white py-20 lg:py-28">
      {/* Decorative vector background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/CTA Area */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-500/20 border border-brand-blue-500/30 text-brand-blue-100 text-xs font-semibold tracking-wider uppercase font-mono"
            >
              <Zap className="w-3.5 h-3.5 text-brand-blue-100 fill-brand-blue-100/30" />
              <span>Distribuidora Certificada Especializada</span>
            </motion.div>

            {/* Essential Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight"
            >
              Os componentes elétricos que você procura estão na <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">OLUAP</span>
            </motion.h1>

            {/* Essential Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Qualidade, segurança e os melhores preços para seus projetos elétricos. Fornecemos materiais normatizados com faturamento direto de fábrica.
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-3"
            >
              <button
                onClick={onScrollToCatalog}
                className="group flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-blue-500 hover:bg-brand-blue-600 text-sm font-bold text-white shadow-lg shadow-brand-blue-500/20 hover:shadow-brand-blue-600/30 hover:-translate-y-0.5 transition-all outline-none animate-shimmer"
                id="hero-cta-view-products"
              >
                <span>Ver Produtos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleGeneralWhatsAppQuote}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-transparent hover:bg-white/10 text-sm font-bold text-white border-2 border-white/20 hover:border-white/40 transition-all shadow-sm outline-none"
                id="hero-cta-request-quote"
              >
                <FileText className="w-4 h-4 text-cyan-300" />
                <span>Orçamento WhatsApp</span>
              </button>
            </motion.div>

            {/* Core Trust Indicators Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
            >
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wide text-white">PRODUTOS 100%</h4>
                  <p className="text-[10px] text-brand-slate-400">Homologados NBR</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Truck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wide text-white">ENVIO IMEDIATO</h4>
                  <p className="text-[10px] text-brand-slate-400">Estoque Próprio</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wide text-white">FATURAMENTO</h4>
                  <p className="text-[10px] text-brand-slate-400">Condições de Prazo</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphical Display Area */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-b from-brand-slate-800/80 to-brand-slate-900/90 rounded-2xl p-6 border border-white/10 shadow-2xl backdrop-blur-sm self-center"
            >
              {/* Image Frame with glowing glass accent */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 group shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                  alt="Painel de Automação Industrial e Componentes Elétricos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-blue-800/70 border border-white/10 text-[9px] font-mono tracking-wider text-cyan-400-accent uppercase text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Estoque Ativo central</span>
                </div>
              </div>

              {/* Dynamic specs box overlay */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-center text-xs text-brand-slate-400 font-mono">
                  <span>ITEM EM DESTAQUE</span>
                  <span>SKU: OL-CLP-M1200</span>
                </div>
                <h3 className="text-lg font-bold font-display text-white">CLP Programável Max-1200</h3>
                <p className="text-xs text-brand-slate-300 leading-relaxed">
                  Controle avançado de esteiras, inversores e sistemas de automação de pequenos a grandes lotes.
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-white/5">
                  <div>
                    <span className="block text-[9px] text-brand-slate-400 font-mono">Sob consulta / Preço base</span>
                    <span className="text-base font-bold font-mono text-emerald-400">R$ 1.249,00</span>
                  </div>
                  <button
                    onClick={onScrollToCatalog}
                    className="px-4 py-2 border border-brand-blue-500/40 hover:border-brand-blue-500 hover:bg-brand-blue-500/10 text-[11px] font-bold uppercase rounded-lg text-brand-blue-300 transition-all font-mono"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
