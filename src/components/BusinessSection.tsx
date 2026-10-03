import React from 'react';
import { ArrowRight, Rocket, Store, Layers, Building } from 'lucide-react';
import { BUSINESS_SOLUTIONS } from '../data/content';

interface BusinessSectionProps {
  onStartConversation: (businessType?: string) => void;
}

export const BusinessSection: React.FC<BusinessSectionProps> = ({ onStartConversation }) => {
  const iconMap: Record<string, React.ElementType> = {
    startup: Rocket,
    retailer: Store,
    wholesaler: Layers,
    established: Building,
  };

  return (
    <section className="bg-[#0B1F33] text-white py-20 sm:py-28 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2E8BCB] block mb-2">
            Tailored Commercial Engagements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            Build Your Supply Chain With FlyHigh
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether launching an initial SKU or re-engineering multi-port container freight, our coordination adapts to your enterprise structure.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_SOLUTIONS.map((solution) => {
            const Icon = iconMap[solution.id] || Rocket;

            return (
              <div
                key={solution.id}
                className="bg-[#0E2742] border border-slate-700/80 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-[#2E8BCB] transition-all duration-200 group"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#1455A0]/30 text-[#2E8BCB] flex items-center justify-center mb-5 group-hover:bg-[#1455A0] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-xs uppercase font-semibold text-slate-400 block tracking-wider">
                    {solution.label}
                  </span>

                  <h3 className="text-lg font-heading font-bold text-white mt-1 mb-3">
                    {solution.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-700/60 pt-4">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-[#2E8BCB]" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-700/60">
                  <button
                    onClick={() => onStartConversation(solution.label)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#2E8BCB] group-hover:text-white transition-colors"
                  >
                    <span>Inquire as {solution.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 pt-10 border-t border-slate-800 text-center">
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            We can help you explore sourcing opportunities in China.
          </p>
          <div className="mt-6">
            <button
              onClick={() => onStartConversation()}
              className="inline-flex items-center gap-2.5 bg-[#1455A0] hover:bg-[#1964bd] text-white px-8 py-3.5 rounded font-semibold text-base transition-colors shadow-lg"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
