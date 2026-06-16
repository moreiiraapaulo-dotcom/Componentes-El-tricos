import { Cpu, Mail, Phone, MapPin, Clock, ShieldAlert, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="oluap-footer" className="bg-[#0b1320] text-brand-slate-350 border-t border-white/5 pt-16 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue-500 text-white shadow-md shadow-brand-blue-500/10">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black font-display tracking-wider text-white">OLUAP</span>
                <span className="text-[9px] uppercase tracking-widest font-mono text-brand-blue-400 -mt-1">
                  Componentes Elétricos
                </span>
              </div>
            </div>
            
            <p className="text-xs text-brand-slate-400 leading-relaxed max-w-sm">
              Sua distribuidora definitiva de alta performance para componentes de painéis industriais, 
              instalações prediais de grande porte e automação inteligente. Ampla conformidade técnica em todos os lotes.
            </p>

            <div className="text-[10px] text-brand-slate-400 font-mono pt-1">
              <span className="block font-bold">CNPJ: 32.322.345/0001-89</span>
              <span className="block text-brand-blue-300">Inscrição Estadual Homologada</span>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            
            {/* Institucionais */}
            <div className="space-y-3.5">
              <h4 className="font-extrabold text-[#f1f5f9] uppercase font-mono tracking-wider text-[11px]">Navegação</h4>
              <ul className="space-y-2 text-brand-slate-400">
                <li><a href="#oluap-banner" className="hover:text-brand-blue-400 transition-colors">Início</a></li>
                <li><a href="#oluap-categories" className="hover:text-brand-blue-400 transition-colors">Categorias</a></li>
                <li><a href="#oluap-products" className="hover:text-brand-blue-400 transition-colors">Produtos</a></li>
                <li><a href="#oluap-about" className="hover:text-brand-blue-400 transition-colors">Sobre Nós</a></li>
              </ul>
            </div>

            {/* Suporte Técnico */}
            <div className="space-y-3.5">
              <h4 className="font-extrabold text-[#f1f5f9] uppercase font-mono tracking-wider text-[11px]">Suporte Técnico</h4>
              <ul className="space-y-2 text-brand-slate-400">
                <li><a href="#oluap-testimonials" className="hover:text-brand-blue-400 transition-colors">Avaliações</a></li>
                <li><a href="#oluap-faq" className="hover:text-brand-blue-400 transition-colors">Dúvidas (FAQ)</a></li>
                <li><a href="#oluap-newsletter" className="hover:text-brand-blue-400 transition-colors">Newsletter</a></li>
                <li><span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> SAC WhatsApp</span></li>
              </ul>
            </div>

          </div>

          {/* Contact and schedule */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-extrabold text-[#f1f5f9] uppercase font-mono tracking-wider text-[11px]">Contatos e Vendas</h4>
            
            <div className="space-y-2.5 text-brand-slate-405 text-brand-slate-350">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-blue-400 shrink-0 mt-0.5" />
                <span className="leading-tight">Alameda dos Eletricistas, 840, Pinheiros - São Paulo - SP, CEP 05400-000</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-blue-400 shrink-0" />
                <span>+55 (44) 99165-5571</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-blue-400 shrink-0" />
                <span>vendas@oluapcomponentes.com.br</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4.5 h-4.5 text-brand-blue-400 shrink-0 mt-0.5" />
                <div className="leading-tight text-[11px]">
                  <span className="block font-bold">Atendimento Vendas:</span>
                  <span className="block text-brand-slate-400">Segunda a Sexta — 08h às 18h</span>
                  <span className="block text-brand-slate-400">Plantão Engenharia sábados — 09h às 12h</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-brand-slate-500 text-[10px] text-center sm:text-left">
          
          <div className="space-y-1">
            <p>
              &copy; {currentYear} <b>OLUAP COMPONENTES ELÉTRICOS S.A.</b> Todos os direitos reservados.
            </p>
            <p>
              CNPJ: 32.322.345/0001-89 | Imagens licenciadas sob padrões industriais de integradoras comerciais brasileiras.
            </p>
          </div>

          {/* Standards certifications stamps layout */}
          <div className="flex items-center gap-3 select-none">
            <span className="px-2 py-1 rounded bg-[#172337] border border-white/5 font-mono text-[9px] font-bold text-brand-blue-400 tracking-wide uppercase">
              NBR 5410 Homologado
            </span>
            <span className="px-2 py-1 rounded bg-[#172337] border border-white/5 font-mono text-[9px] font-bold text-brand-blue-400 tracking-wide uppercase">
              ABNT IEC Certificado
            </span>
            <span className="px-1.5 py-1 rounded bg-[#172337] border border-white/5 font-mono text-[9px] font-bold text-emerald-400 text-xs">
              ★ ISO 9001
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
