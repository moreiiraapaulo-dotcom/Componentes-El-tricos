import { motion, AnimatePresence } from "motion/react";
import { Product } from "../types";
import { X, Star, Download, ShieldCheck, Milestone, Phone } from "lucide-react";
import React, { useState } from "react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onShowToast
}: ProductDetailModalProps) {
  
  if (!product) return null;

  const [activeTab, setActiveTab] = useState<"specs" | "general">("specs");
  const [downloading, setDownloading] = useState(false);

  const simulateDatasheetDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      onShowToast(`Datasheet Técnico OLUAP ${product.sku} baixado com sucesso!`);
    }, 1500);
  };

  const handleWhatsAppQuote = () => {
    let msg = `*SOLICITAÇÃO DE ORÇAMENTO - OLUAP COMPONENTES*\n\n`;
    msg += `Olá, consultei a Ficha Técnica do seguinte dispositivo e quero solicitar cotação formal:\n\n`;
    msg += `• *Componente:* ${product.name}\n`;
    msg += `• *SKU Referência:* ${product.sku}\n`;
    msg += `• *Preço de Referência:* R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}\n\n`;
    msg += `Gostaria de saber a disponibilidade, prazos para entrega interestadual e faturamento corporativo no meu CNPJ.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5544991655571?text=${encoded}`, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
        
        {/* Animated Card Body */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.95, y: 20 }}
           className="relative w-full max-w-3xl bg-white rounded-3xl border border-brand-slate-200 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
           id="product-detail-modal"
        >
          
          {/* Header Bar */}
          <div className="flex justify-between items-center px-6 py-4.5 border-b border-brand-slate-100 bg-brand-slate-50 shrink-0">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold font-mono text-brand-blue-500 tracking-wider uppercase">SUPORTE AO PROJETO</span>
              <h2 className="text-base font-extrabold font-display text-brand-blue-800">Visualização de Especificação</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white border border-brand-slate-200 hover:text-red-500 hover:border-red-200 transition-colors cursor-pointer outline-none"
              id="btn-close-detail"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Container Scrollable */}
          <div className="overflow-y-auto p-6 space-y-6">
            
            {/* Top overview row with image and side characteristics */}
            <div className="grid md:grid-cols-12 gap-6">
              
              {/* Product Photo section */}
              <div className="md:col-span-5 bg-brand-slate-100 rounded-2xl aspect-square overflow-hidden border border-brand-slate-200 relative flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-white border border-brand-slate-200 text-[9px] font-mono font-bold uppercase text-brand-blue-800">
                  REF: {product.sku}
                </span>
              </div>

              {/* Quick Info text block */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1.5 items-center mb-1.5">
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }, (_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4 h-4 ${idx < Math.floor(product.rating) ? "fill-amber-400" : "text-brand-slate-200"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-brand-slate-500 mt-0.5">
                      {product.rating} ({product.reviewsCount} engenheiros avaliaram)
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-brand-slate-900 leading-snug mb-3">
                    {product.name}
                  </h3>

                  <p className="text-xs text-brand-slate-500 leading-relaxed mb-4">
                    {product.longDescription || product.description}
                  </p>
                </div>

                {/* Stock and Price highlight */}
                <div className="flex items-center gap-6 p-4 rounded-2xl bg-brand-slate-50 border border-brand-slate-100 mb-2">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-brand-slate-400 font-mono">VALOR ESPECIAL</span>
                    <span className="text-xl font-bold font-mono text-brand-blue-800">
                      R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="h-8 w-[1px] bg-brand-slate-200" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-brand-slate-400 font-mono">ESTOQUE DO LOTE</span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Pronto para Entrega
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Middle Grid: Dynamic Tabs (Specs vs. Certifications) */}
            <div>
              <div className="flex border-b border-brand-slate-200 mb-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`pb-2.5 px-4 -mb-[1px] transition-all cursor-pointer outline-none ${
                    activeTab === "specs"
                      ? "text-brand-blue-500 border-b-2 border-brand-blue-500 font-bold"
                      : "text-brand-slate-400 hover:text-brand-slate-700"
                  }`}
                >
                  Características Técnicas
                </button>
                <button
                  onClick={() => setActiveTab("general")}
                  className={`pb-2.5 px-4 -mb-[1px] transition-all cursor-pointer outline-none ${
                    activeTab === "general"
                      ? "text-brand-blue-500 border-b-2 border-brand-blue-500 font-bold"
                      : "text-brand-slate-400 hover:text-brand-slate-700"
                  }`}
                >
                  Conformidades e Instalação
                </button>
              </div>

              {activeTab === "specs" ? (
                <div className="space-y-1.5">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-12 py-2 px-3 text-xs border-b border-brand-slate-100 hover:bg-brand-slate-50 transition-colors">
                      <span className="col-span-5 font-bold text-brand-slate-500 font-sans">{key}</span>
                      <span className="col-span-7 font-mono text-brand-slate-800 text-right md:text-left">{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-brand-blue-50/50 border border-brand-blue-100/40 text-xs text-brand-slate-600 space-y-3.5">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-brand-blue-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-blue-800 mb-0.5">Certificação Integrada OLUAP</h4>
                      <p className="leading-relaxed">Este lote segue os critérios de teste da série brasileira <b>NBR IEC 60947</b> correspondente, conferindo estabilidade dielétrica e proteção superior contra aquecimento excessivo na carcaça plástica.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Milestone className="w-5 h-5 text-brand-blue-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-blue-800 mb-0.5 font-sans">Guia de Instalação e Segurança</h4>
                      <p className="leading-relaxed">A fixação deve ser realizada exclusivamente por profissional habilitado em trilho metálico DIN padrão (35mm), respeitando o torque de aperto recomendado nos parafusos dos bornes para evitar arcos elétricos.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Footer Actions Row */}
          <div className="px-6 py-4.5 bg-brand-slate-50 border-t border-brand-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between shrink-0">
            {/* Datasheet download trigger */}
            <button
              onClick={simulateDatasheetDownload}
              disabled={downloading}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-brand-slate-200 hover:border-brand-slate-300 bg-white text-xs font-semibold text-brand-slate-700 transition-all cursor-pointer outline-none active:scale-95 disabled:opacity-50"
              id="btn-download-datasheet"
            >
              <Download className={`w-4 h-4 ${downloading ? "animate-bounce" : ""}`} />
              <span>{downloading ? "Preparando PDF..." : "Baixar Datasheet PDF"}</span>
            </button>

            {/* Direct WhatsApp quote click */}
            <button
              onClick={handleWhatsAppQuote}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer outline-none bg-[#25d366] hover:bg-[#20ba5a] text-white"
              id="btn-modal-quote-whatsapp"
            >
              <Phone className="w-4 h-4 fill-white text-transparent" />
              <span>Solicitar via WhatsApp</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
