import { Truck, ShieldCheck, Headphones, Award } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Despachamos no mesmo dia para todo o Brasil. Estoque robusto com mais de 50.000 componentes elétricos prontos para embarque.",
      colorClass: "bg-blue-50 text-brand-blue-500 hover:bg-brand-blue-500 hover:text-white"
    },
    {
      icon: ShieldCheck,
      title: "Compra 100% Segura",
      description: "Transparência total sob o CNPJ 32.322.345/0001-89. Emissão imediata de NFe, rastreamento ativo e criptografia de ponta.",
      colorClass: "bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Fale diretamente com nossa equipe técnica de engenheiros no WhatsApp para dimensionamento, equivalência ou dúvidas técnicas sem filas.",
      colorClass: "bg-purple-50 text-purple-500 hover:bg-purple-500 hover:text-white"
    },
    {
      icon: Award,
      title: "Garantia de Qualidade",
      description: "Componentes rigorosamente ensaiados de acordo com normas técnicas nacionais e garantia oficial de fábrica mínima de 12 meses.",
      colorClass: "bg-amber-50 text-amber-500 hover:bg-amber-500 hover:text-white"
    }
  ];

  return (
    <section id="oluap-benefits" className="py-16 bg-white sm:py-20 border-b border-brand-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Wrapper */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div 
                key={i} 
                className="group relative flex flex-col p-6 rounded-2xl border border-brand-slate-200 bg-brand-slate-50/30 hover:bg-white hover:border-brand-blue-500 hover:shadow-lg transition-all duration-300"
                id={`benefit-card-${i}`}
              >
                {/* Decorative border bar */}
                <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-transparent group-hover:bg-brand-blue-500 rounded-b transition-colors" />

                {/* Icon wrapper */}
                <div className={`mb-5 h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${b.colorClass}`}>
                  <Icon className="w-6.5 h-6.5" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-sm tracking-tight text-brand-slate-900 font-display mb-2.5">
                  {b.title}
                </h3>
                
                <p className="text-xs text-brand-slate-500 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
