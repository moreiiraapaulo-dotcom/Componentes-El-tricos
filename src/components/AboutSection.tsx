import { Shield, Settings, Users, Star, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="oluap-about" className="py-16 bg-brand-slate-100 sm:py-20 border-b border-brand-slate-200 relative overflow-hidden">
      
      {/* Visual glowing patterns */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue-500 rounded-full blur-3xl opacity-5 pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images visual block on the left (collage) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5]">
              {/* Main Backing Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-brand-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop&q=80"
                  alt="Linha de montagem industrial e montagem de painéis elétricos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Floating Stats Panel */}
              <div className="absolute -bottom-6 -right-6 md:-right-8 bg-brand-blue-800 text-white rounded-2xl p-5 shadow-2xl border border-white/10 max-w-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-wide text-brand-blue-300 uppercase">OLUAP LOGÍSTICA</span>
                </div>
                <h4 className="text-base font-extrabold font-display leading-tight">ISO 9001 e NBR IEC Homologados</h4>
                <p className="text-[11px] text-brand-slate-300 leading-relaxed">
                  Rastreadores, conformidades de lote e integridade garantida de ponta a ponta.
                </p>
              </div>
            </div>
          </div>

          {/* Copy Institutional on the right */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag name */}
            <div>
              <span className="text-xs font-extrabold tracking-widest text-brand-blue-500 uppercase font-mono bg-brand-blue-50 px-3 py-1 rounded-full">
                Quem Somos
              </span>
              <h2 className="mt-4 text-3xl font-extrabold font-display text-brand-blue-800 sm:text-4xl tracking-tight">
                A Escolha Definitiva de Engenheiros, Clientes e Distribuidores
              </h2>
            </div>

            <p className="text-sm text-brand-slate-600 leading-relaxed">
              Fundada sob preceitos rígidos de <b>tecnologia e segurança elétrica</b>, a <b>OLUAP</b> (CNPJ: 32.322.345.0001-89) consolidou-se como principal fornecedora nacional de peças técnicas para painéis industriais, automações complexas e infraestruturas prediais.
            </p>

            <p className="text-sm text-brand-slate-600 leading-relaxed">
              Mantemos parcerias sólidas com as maiores certificadoras nacionais e globais, assegurando que cada contator, sinaleiro, disjuntor ou cabo que sai de nosso estoque central supere as expectativas de robustez e conformidade operacional.
            </p>

            {/* Grid of 4 Key Differentiators */}
            <div className="grid sm:grid-cols-2 gap-4.5 pt-4">
              
              <div className="flex gap-3">
                <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-slate-900 font-sans">Normas e Laudos Técnicos</h4>
                  <p className="text-[11px] text-brand-slate-500 leading-snug mt-1">Conformidade integral com as exigências da portaria ABNT NBR.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-500">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-slate-900 font-sans">Customização de Lotes</h4>
                  <p className="text-[11px] text-brand-slate-500 leading-snug mt-1">Dimensionamento correto de componentes especiais por engenheiros.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-500">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-slate-900 font-sans">Logística Descomplicada</h4>
                  <p className="text-[11px] text-brand-slate-500 leading-snug mt-1">Despacho mercantil de faturamentos corporativos em até 24h úteis.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-500">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-slate-900 font-sans">Garantia Integrada Nacional</h4>
                  <p className="text-[11px] text-brand-slate-500 leading-snug mt-1">Troca expresso garantida direto em nosso estoque por 1 ano.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
