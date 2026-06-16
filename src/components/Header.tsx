import React, { useState } from "react";
import { Search, User, ShoppingCart, Phone, Cpu, Menu, X, FileText, Globe } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  scrollToCatalog: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  scrollToCatalog
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToCatalog();
  };

  const handleQuickCategorySelect = (categoryId: string) => {
    // If we want to set category, parent state manages it.
    // For now we will scroll and filter.
    scrollToCatalog();
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="oluap-header" className="sticky top-0 z-40 w-full bg-white border-b border-brand-slate-200 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Area */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue-500 text-white shadow-md shadow-brand-blue-500/20">
              <Cpu className="w-7 h-7 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display tracking-wider text-brand-blue-800">
                OLUAP
              </span>
              <span className="text-[9px] uppercase tracking-widest font-mono text-brand-blue-500 -mt-1">
                Componentes Elétricos
              </span>
            </div>
          </div>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-slate-800">
            <a href="#oluap-banner" className="hover:text-brand-blue-500 transition-colors py-2">Início</a>
            <a href="#oluap-categories" className="hover:text-brand-blue-500 transition-colors py-2">Categorias</a>
            <a href="#oluap-products" className="hover:text-brand-blue-500 transition-colors py-2">Produtos</a>
            <a href="#oluap-about" className="hover:text-brand-blue-500 transition-colors py-2">Sobre Nós</a>
            <a href="#oluap-testimonials" className="hover:text-brand-blue-500 transition-colors py-2">Avaliações</a>
            <a href="#oluap-faq" className="hover:text-brand-blue-500 transition-colors py-2">Dúvidas</a>
          </nav>

          {/* Search Box Desktop */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative max-w-xs w-full mx-4">
            <input
              type="text"
              placeholder="Buscar componentes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-slate-100 text-brand-slate-900 pl-10 pr-4 py-2 rounded-full text-xs border border-transparent focus:outline-none focus:border-brand-blue-500 focus:bg-white transition-all font-sans"
            />
            <Search className="w-4 h-4 text-brand-slate-300 absolute left-3.5 pointer-events-none" />
          </form>

          {/* Header Actions Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Direct WhatsApp Call Button */}
            <a
              href="https://wa.me/5544991655571?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20componentes%20el%C3%A9tricos%20com%20a%20OLUAP."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md shadow-green-500/10 hover:shadow-green-500/20 hover:-translate-y-0.5 transition-all"
              id="btn-whatsapp"
            >
              <Phone className="w-4 h-4 fill-white text-transparent" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburguer & Cart Row */}
          <div className="flex sm:hidden items-center gap-3">
            {/* Hamburguer Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-slate-800 hover:text-brand-blue-500 focus:outline-none"
              id="btn-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide-down Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-slate-200 px-4 py-6 space-y-4 animate-fadeIn shadow-inner">
          
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="flex items-center relative w-full">
            <input
              type="text"
              placeholder="Buscar no catálogo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-slate-100 text-brand-slate-950 pl-10 pr-4 py-2.5 rounded-xl text-xs border border-transparent focus:outline-none focus:border-brand-blue-500"
            />
            <Search className="w-4 h-4 text-brand-slate-400 absolute left-3.5 pointer-events-none" />
          </form>

          {/* Links Row */}
          <nav className="flex flex-col gap-3.5 font-medium text-sm text-brand-slate-800 pl-2">
            <a href="#oluap-banner" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-blue-500 py-1 border-b border-brand-slate-50">Início</a>
            <a href="#oluap-categories" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-blue-500 py-1 border-b border-brand-slate-50">Categorias</a>
            <a href="#oluap-products" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-blue-500 py-1 border-b border-brand-slate-50">Produtos</a>
            <a href="#oluap-about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-blue-500 py-1 border-b border-brand-slate-50">Sobre Nós</a>
            <a href="#oluap-testimonials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-blue-500 py-1 border-b border-brand-slate-50">Avaliações</a>
            <a href="#oluap-faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-blue-500 py-1 border-b border-brand-slate-50">Dúvidas</a>
          </nav>

          {/* Interactive Actions Mobile */}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://wa.me/5544991655571?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20componentes%20el%C3%A9tricos!"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25d366] text-white text-xs font-bold"
            >
              <Phone className="w-4 h-4 fill-white text-transparent" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
