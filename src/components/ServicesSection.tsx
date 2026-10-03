import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { CORE_SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onQuoteWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onQuoteWithService,
}) => {
  return (
    <section id="services" className="bg-white py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1455A0] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1455A0]" />
            <span>Structured Sourcing Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F33] tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Six disciplined operational competencies designed to eliminate friction, secure pricing, and ensure compliance across the entire procurement lifecycle.
          </p>
        </div>

        {/* 6 Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white border border-slate-200/90 rounded-lg p-8 flex flex-col justify-between transition-all duration-200 hover:border-[#1455A0] hover:shadow-md focus-within:ring-2 focus-within:ring-[#1455A0]"
            >
              <div>
                {/* Top Row: Number & Action Affordance */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-heading font-bold text-[#1455A0]/80 group-hover:text-[#1455A0] transition-colors tabular-nums">
                    {service.number}
                  </span>
                  <button
                    onClick={() => onSelectService(service)}
                    className="p-1.5 rounded text-slate-400 group-hover:text-[#1455A0] group-hover:bg-[#F4F7FA] transition-colors focus:outline-none"
                    aria-label={`View scope for ${service.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-heading font-bold text-[#0B1F33] mb-3 group-hover:text-[#1455A0] transition-colors">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Clean Feature List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#2E8BCB] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectService(service)}
                  className="font-medium text-slate-600 hover:text-[#0B1F33] transition-colors focus:outline-none"
                >
                  View Scope &amp; Audit →
                </button>
                <button
                  onClick={() => onQuoteWithService(service.title)}
                  className="font-semibold text-[#1455A0] hover:text-[#0B1F33] transition-colors focus:outline-none"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
