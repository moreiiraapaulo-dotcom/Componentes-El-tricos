import React from "react";
import { Product } from "../types";
import { Star, Info, Phone } from "lucide-react";

interface ProductCardProps {
  key?: string;
  product: Product;
  onViewDetails: (p: Product) => void;
}

export default function ProductCard({
  product,
  onViewDetails
}: ProductCardProps) {
  
  // Rating generator
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : "text-brand-slate-300"
        }`}
      />
    ));
  };

  const handleWhatsAppQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    let msg = `*SOLICITAÇÃO DE ORÇAMENTO - OLUAP COMPONENTES*\n\n`;
    msg += `Olá, gostaria de solicitar um orçamento para o seguinte item:\n\n`;
    msg += `• *Dispositivo:* ${product.name}\n`;
    msg += `• *SKU Referência:* ${product.sku}\n`;
    msg += `• *Preço Unitário (Sob Consulta):* R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}\n\n`;
    msg += `Por favor, me informe as condições de faturamento para o meu CNPJ e frete de entrega. Obrigado!`;
    
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5544991655571?text=${encoded}`, "_blank");
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-brand-slate-200 overflow-hidden hover:border-brand-blue-500 hover:shadow-lg transition-all duration-300 h-full"
    >
      
      {/* Top Banner & Image Wrapper */}
      <div className="relative aspect-[4/3] bg-brand-slate-50 overflow-hidden shrink-0">
        
        {/* SKUs & Category Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2 py-0.5 rounded-md bg-brand-blue-800/80 text-[9px] font-mono tracking-wider font-bold uppercase text-white shadow-sm">
            {product.sku}
          </span>
          <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase font-sans tracking-wide shadow-sm bg-emerald-100 text-emerald-800`}>
            Pronta Entrega
          </span>
        </div>

        {/* Zoomable Image Product */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick View Layer On Hover */}
        <div className="absolute inset-0 bg-brand-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white text-brand-slate-900 text-xs font-semibold shadow-md hover:bg-brand-blue-50 hover:text-brand-blue-500 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300"
          >
            <Info className="w-4 h-4" />
            <span>Ficha Técnica</span>
          </button>
        </div>

      </div>

      {/* Product Content Specifications */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Category designation & rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-brand-blue-500 uppercase tracking-widest font-mono">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-[10px] font-medium text-brand-slate-400">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <button 
          onClick={() => onViewDetails(product)}
          className="text-left font-bold text-sm tracking-tight text-brand-slate-900 font-display line-clamp-2 hover:text-brand-blue-500 transition-colors mb-2 outline-none"
        >
          {product.name}
        </button>

        <p className="text-xs text-brand-slate-500 leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price & Buy Button Grid */}
        <div className="mt-auto pt-3 border-t border-brand-slate-100 flex flex-col gap-3">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono font-semibold tracking-wide text-brand-slate-400">VALOR ESTIMADO</span>
              <span className="text-base font-bold font-mono text-brand-blue-800">
                R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-600 font-mono">Faturamento CNPJ em até 28 dias</span>
          </div>

          <button
            onClick={handleWhatsAppQuote}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md shadow-green-500/10 hover:shadow-green-500/20 active:scale-[0.98] transition-all cursor-pointer outline-none"
            id={`btn-quote-zap-${product.id}`}
          >
            <Phone className="w-3.5 h-3.5 fill-white text-transparent" />
            <span>Orçamento WhatsApp</span>
          </button>
        </div>

      </div>

    </div>
  );
}
