import React, { useState } from "react";
import { Send, FileText, Gift, Sparkles } from "lucide-react";

interface NewsletterProps {
  onShowToast: (msg: string) => void;
}

export default function NewsletterForm({ onShowToast }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      onShowToast("Por favor, digite seu e-mail.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      onShowToast(`Seu e-mail '${email}' foi cadastrado! Você receberá nosso catálogo 2026/01 em breve.`);
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="oluap-newsletter" className="py-16 bg-gradient-to-br from-brand-blue-800 to-brand-slate-900 text-white relative">
      {/* Decorative vector meshes */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center bg-brand-slate-800/40 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
          
          {/* Pitch area */}
          <div className="md:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-blue-500/20 text-brand-blue-200 text-[10px] font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Informativos Técnicos Gratuitos</span>
            </div>

            <h3 className="text-2xl font-extrabold font-display leading-tight sm:text-3xl">
              Cadastre-se para Receber Ofertas e Tabela de Preços
            </h3>

            <p className="text-xs text-brand-slate-300 leading-relaxed max-w-md">
              Seja o primeiro a receber lançamentos de automação, revisões de datasheets, convites para webinars de CLP e cupons de frete grátis da OLUAP.
            </p>

            {/* List advantages */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-[11px] text-brand-slate-300">
              <span className="flex items-center gap-1.5 font-semibold">
                <FileText className="w-4 h-4 text-cyan-300" /> Tabela de Equivalência PDF
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <Gift className="w-4 h-4 text-emerald-400" /> Cupons de 5% p/ Primeira Compra
              </span>
            </div>

          </div>

          {/* Form area */}
          <div className="md:col-span-5 w-full">
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col space-y-1">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail corporativo..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:outline-none focus:border-cyan-400 text-xs text-white placeholder-brand-slate-400 transition-all font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-brand-blue-500 hover:bg-brand-blue-600 font-bold text-xs shadow-md transition-all cursor-pointer outline-none active:scale-[0.99] disabled:bg-brand-blue-300"
                id="btn-subscribe-newsletter"
              >
                <span>{loading ? "Cadastrando..." : "Quero Receber Catálogo e Ofertas"}</span>
                <Send className="w-3.5 h-3.5 text-cyan-300" />
              </button>

              <p className="text-[9px] text-brand-slate-400 text-center leading-normal mt-2.5">
                Respeitamos sua caixa de entrada. Descadastre-se a qualquer momento com apenas 1 clique.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
