import React, { useState, useEffect, useRef } from "react";
import { CATEGORIES, PRODUCTS, TESTIMONIALS, FAQS } from "./data";
import { Product } from "./types";
import { Filter, X, RefreshCw, AlertCircle } from "lucide-react";

// Component imports
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductCard from "./components/ProductCard";
import ProductDetailModal from "./components/ProductDetailModal";
import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import NewsletterForm from "./components/NewsletterForm";
import Footer from "./components/Footer";

export default function App() {
  // Dialog and details state
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);

  // Sorting and filter state
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured"); // featured, price-asc, price-desc

  // Custom Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll target reference
  const catalogRef = useRef<HTMLDivElement>(null);

  // Utility toast notification activator
  const showToast = (message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filter products based on search inputs and category filters
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      product.name.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    // Default - Featured items first
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const activeCategoryObject = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-brand-slate-50 flex flex-col relative" id="oluap-root-app">
      
      {/* Floating Animated Toast Notifications */}
      {toastMessage && (
        <div 
          className="fixed top-24 right-4 z-50 p-4 rounded-2xl bg-brand-slate-900 border border-white/10 text-white text-xs font-bold shadow-2xl flex items-center gap-3 max-w-sm animate-bounce"
          role="alert"
          id="system-floating-toast"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <p className="leading-snug">{toastMessage}</p>
          <button 
            onClick={() => setToastMessage(null)}
            className="p-1 hover:text-cyan-300 ml-auto"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Modern Static & Mobile Headers */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        scrollToCatalog={scrollToCatalog}
      />

      {/* Main visual Banner */}
      <Banner
        onScrollToCatalog={scrollToCatalog}
      />

      {/* Bento Grid Category Browser */}
      <CategoryList
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        scrollToCatalog={scrollToCatalog}
      />

      {/* Primary Products Explorer Catalog */}
      <main 
        ref={catalogRef} 
        id="oluap-products" 
        className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-20"
      >
        
        {/* Section Heading & Grid Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-8 border-b border-brand-slate-200 mb-10">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-brand-blue-500 uppercase font-mono bg-brand-blue-50 px-3 py-1 rounded-full">
              Canal de Vendas Diretas
            </span>
            <h2 className="mt-3 text-2.5xl font-extrabold font-display text-brand-blue-800 tracking-tight">
              {activeCategoryObject ? activeCategoryObject.name : "Catálogo Integrado de Componentes"}
            </h2>
            <p className="text-xs text-brand-slate-400 font-normal mt-1 max-w-lg leading-relaxed">
              Exibindo componentes normatizados disponíveis no estoque da OLUAP. Adicione itens à cotação para emitir sua fatura.
            </p>
          </div>

          {/* Quick Filter Selection Panels */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            {/* Quick tag categories indicator scrolling strip */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight whitespace-nowrap transition-colors outline-none ${
                  selectedCategory === "all"
                    ? "bg-brand-blue-500 text-white"
                    : "bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700"
                }`}
              >
                Todos
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight whitespace-nowrap transition-colors outline-none ${
                    selectedCategory === cat.id
                      ? "bg-brand-blue-500 text-white"
                      : "bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sorting selectivity */}
            <div className="flex items-center gap-2 border border-brand-slate-200 rounded-xl px-3 py-1.5 bg-white shrink-0 ml-auto lg:ml-0 shadow-sm text-xs">
              <Filter className="w-3.5 h-3.5 text-brand-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-semibold text-brand-slate-700 focus:outline-none"
              >
                <option value="featured">Relevância / Destaques</option>
                <option value="price-asc">Preço: Menor para Maior</option>
                <option value="price-desc">Preço: Maior para Menor</option>
              </select>
            </div>

          </div>
        </div>

        {/* Live Search Indicator Badges */}
        {(searchQuery || selectedCategory !== "all") && (
          <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-brand-slate-600 bg-brand-blue-50/50 border border-brand-blue-100/40 px-4 py-3 rounded-xl animate-fadeIn">
            <span className="font-semibold text-brand-blue-800">Filtros Ativos:</span>
            
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-brand-blue-100 text-brand-blue-700 font-bold">
                Categoria: {activeCategoryObject?.name}
                <button 
                  onClick={() => setSelectedCategory("all")} 
                  className="hover:text-red-500 p-0.5"
                  title="remover filtro de categoria"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-brand-blue-100 text-brand-blue-700 font-bold">
                Pesquisa: &ldquo;{searchQuery}&rdquo;
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="hover:text-red-500 p-0.5"
                  title="limpar barra de busca"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setSortBy("featured");
              }}
              className="text-brand-blue-500 hover:text-brand-blue-700 font-bold hover:underline ml-auto flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Limpar todos os filtros</span>
            </button>
          </div>
        )}

        {/* Responsive Grid Catalog Layout */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-brand-slate-200 shadow-sm p-8 max-w-xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center border border-dashed border-amber-200 mb-4 animate-pulse">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-brand-slate-950 font-display">Nenhum componente técnico localizado</h3>
            <p className="text-xs text-brand-slate-400 mt-2.5 leading-relaxed">
              Não encontramos nenhum dispositivo correspondente aos termos digitados nas referências da OLUAP. Redefina a busca ou selecione outra categoria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-6 px-5 py-2.5 rounded-xl bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold text-xs"
            >
              Exibir Catálogo Completo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedDetailProduct}
              />
            ))}
          </div>
        )}

      </main>

      {/* Institutional About section highlighting faturamentos/CNPJ */}
      <AboutSection />

      {/* Complete Benefits banner items */}
      <BenefitsSection />

      {/* Customer testimonial proofs */}
      <TestimonialSection testimonials={TESTIMONIALS} />

      {/* FAQ toggling accordion answers */}
      <FAQSection faqs={FAQS} />

      {/* Capturing leads section */}
      <NewsletterForm onShowToast={showToast} />

      {/* Corporate detailed structure Footer */}
      <Footer />

      {/* Detail information technical sheets modal */}
      {selectedDetailProduct && (
        <ProductDetailModal
          product={selectedDetailProduct}
          onClose={() => setSelectedDetailProduct(null)}
          onShowToast={showToast}
        />
      )}

    </div>
  );
}
