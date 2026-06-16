import React from "react";
import { Category } from "../types";
import { 
  Cpu, Layers, Shuffle, Eye, Radio, 
  ShieldAlert, Cable, Zap, Sun, Wrench, ArrowRight 
} from "lucide-react";

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  scrollToCatalog: () => void;
}

// Icon mapper for dynamic string keys to Lucide icons
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Cpu,
  Layers,
  Shuffle,
  Eye,
  Radio,
  ShieldAlert,
  Cable,
  Zap,
  Sun,
  Wrench
};

export default function CategoryList({
  categories,
  selectedCategory,
  onSelectCategory,
  scrollToCatalog
}: CategoryListProps) {
  
  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    scrollToCatalog();
  };

  return (
    <section id="oluap-categories" className="py-16 bg-white sm:py-20 border-b border-brand-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-blue-500 uppercase font-mono bg-brand-blue-50 px-3 py-1 rounded-full">
            Especialidades OLUAP
          </span>
          <h2 className="mt-4 text-3xl font-extrabold font-display text-brand-blue-800 sm:text-4xl tracking-tight">
            Navegue por Categoria Comercial
          </h2>
          <p className="mt-3 text-base text-brand-slate-500 leading-relaxed">
            Selecione uma categoria técnica para visualizar as especificações, preços e disponibilidade de estoque.
          </p>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Cpu;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group text-left relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer h-48 outline-none ${
                  isSelected 
                    ? "bg-brand-blue-800 border-brand-blue-800 text-white shadow-lg shadow-brand-blue-800/15" 
                    : "bg-brand-slate-50 border-brand-slate-200 text-brand-slate-9003 hover:bg-white hover:border-brand-blue-500 hover:shadow-md"
                }`}
                id={`category-card-${cat.id}`}
              >
                {/* Background image preview with soft blend overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Top: Icon */}
                <div className="relative z-10">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                    isSelected 
                      ? "bg-brand-blue-500/20 text-cyan-300"
                      : "bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-white"
                  }`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                </div>

                {/* Bottom: Info */}
                <div className="relative z-10 mt-auto">
                  <h3 className={`font-bold text-sm tracking-tight font-display py-1 ${isSelected ? 'text-white' : 'text-brand-slate-900'}`}>
                    {cat.name}
                  </h3>
                  <p className={`text-[11px] leading-snug line-clamp-2 ${
                    isSelected ? "text-brand-slate-300" : "text-brand-slate-500"
                  }`}>
                    {cat.description}
                  </p>
                  
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mt-2.5 font-mono ${
                    isSelected ? "text-cyan-300" : "text-brand-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  }`}>
                    <span>Explorar</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
