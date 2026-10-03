import React, { useState } from 'react';
import { ArrowRight, MapPin, Box, Clock, ChevronRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/content';
import { ProductCategory } from '../types';

interface ProductCategoriesProps {
  onRequestCategoryQuote: (categoryName: string) => void;
  onCustomRequirementClick: () => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  onRequestCategoryQuote,
  onCustomRequirementClick,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('electronics');

  const activeCategory =
    PRODUCT_CATEGORIES.find((cat) => cat.id === selectedCategoryId) || PRODUCT_CATEGORIES[0];

  return (
    <section id="products" className="bg-[#F4F7FA] py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-2">
              Manufacturing Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F33] tracking-tight">
              What Can We Source?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
              Direct access to specialized Chinese industrial manufacturing corridors with audited supplier compliance.
            </p>
          </div>

          <button
            onClick={onCustomRequirementClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1455A0] hover:text-[#0B1F33] transition-colors py-2"
          >
            <span>Have a custom drawing / BOM?</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Product Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category) => {
            const isSelected = category.id === selectedCategoryId;

            return (
              <div
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`group bg-white rounded-lg border overflow-hidden flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-[#1455A0] ring-1 ring-[#1455A0] shadow-md'
                    : 'border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {/* Image Container with Fallback */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.name} sourcing from China`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback gradient if file fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold tracking-tight text-white drop-shadow-sm">
                      {category.name}
                    </span>
                    <span className="text-[10px] text-slate-200 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                      {category.hub.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {category.description}
                    </p>

                    <div className="space-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-[#2E8BCB]" />
                        <span>MOQ: {category.typicalMoq}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#2E8BCB]" />
                        <span>Lead: {category.leadTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#1455A0] group-hover:underline">
                      Inquire Specs
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1455A0] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Category Feature Spotlight */}
        <div className="mt-12 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1455A0] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Primary Hub: {activeCategory.hub}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#0B1F33]">
                {activeCategory.name} Sourcing Specifications
              </h3>
            </div>
            <button
              onClick={() => onRequestCategoryQuote(activeCategory.name)}
              className="inline-flex items-center gap-2 bg-[#1455A0] hover:bg-[#0B1F33] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded transition-colors self-start md:self-auto"
            >
              <span>Request Quote for {activeCategory.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeCategory.featuredItems.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded bg-[#F4F7FA] border border-slate-200/80 text-xs font-medium text-[#17202A] flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#1455A0] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner: Can't find what you're looking for? */}
        <div className="mt-12 bg-[#0B1F33] rounded-lg p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-[#2E8BCB] font-semibold block">
              Custom Industrial Sourcing
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Can't find what you're looking for?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Tell us what you need. Send specifications, reference URLs, CAD drawings, or sample photos.
            </p>
          </div>

          <button
            onClick={onCustomRequirementClick}
            className="inline-flex items-center gap-2.5 bg-[#2E8BCB] hover:bg-[#2573a8] text-white px-7 py-3 rounded font-semibold text-sm sm:text-base transition-colors shrink-0 shadow-md"
          >
            <span>Submit Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
