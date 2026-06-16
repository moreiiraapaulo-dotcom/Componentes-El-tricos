import { Testimonial } from "../types";
import { Star, MessageSquare } from "lucide-react";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  return (
    <section id="oluap-testimonials" className="py-16 bg-brand-slate-100 sm:py-20 border-b border-brand-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-blue-500 uppercase font-mono bg-brand-blue-55 px-3 py-1 rounded-full">
            Casos de Sucesso
          </span>
          <h2 className="mt-4 text-3xl font-extrabold font-display text-brand-blue-800 sm:text-4xl tracking-tight">
            Parceiros de Confiança que Escolhem a OLUAP
          </h2>
          <p className="mt-3 text-base text-brand-slate-500 leading-relaxed">
            Veja as avaliações de engenheiros de campo, diretores industriais e gerentes de compras técnicas em todo o Brasil.
          </p>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-brand-slate-200 shadow-sm hover:border-brand-blue-500 hover:shadow-md transition-all duration-300 relative"
              id={`testimonial-card-${t.id}`}
            >
              {/* Quotes asset background icon */}
              <MessageSquare className="absolute top-5 right-5 w-8 h-8 text-brand-slate-100 rotate-180 pointer-events-none" />

              <div>
                {/* Stars group */}
                <div className="flex text-amber-400 gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-brand-slate-600 leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* User profile row */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-slate-100 mt-auto">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-brand-slate-200 bg-brand-slate-50 shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-slate-900 leading-tight font-sans">
                    {t.name}
                  </h4>
                  <span className="text-[10px] text-brand-slate-400 block mt-0.5 leading-snug">
                    {t.role} — <b className="text-brand-blue-500 font-bold">{t.company}</b>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
