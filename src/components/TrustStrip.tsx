import React from 'react';
import { Search, Building2, ShieldCheck, Ship, PackageCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    { label: 'Product Sourcing', icon: Search, hint: 'Direct China factory matching' },
    { label: 'Supplier Coordination', icon: Building2, hint: 'Bilingual contract & terms' },
    { label: 'Quality', icon: ShieldCheck, hint: 'AQL 2.5 on-site testing' },
    { label: 'Logistics', icon: Ship, hint: 'Ocean FCL/LCL & air cargo' },
    { label: 'Delivery', icon: PackageCheck, hint: 'Customs cleared to door' },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6 sm:py-8" aria-label="Core Capabilities Strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Header Label */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-1.5 h-6 bg-[#1455A0] rounded-sm hidden sm:block" />
            <h2 className="text-sm sm:text-base font-heading font-bold text-[#0B1F33] uppercase tracking-wide">
              One Partner. Multiple Solutions.
            </h2>
          </div>

          {/* Solution Pillars */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 lg:flex items-center gap-3 sm:gap-6 lg:gap-8 justify-between">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 group">
                  {/* Subtle Separator on desktop */}
                  {index > 0 && (
                    <div className="hidden lg:block h-6 w-px bg-slate-200" aria-hidden="true" />
                  )}
                  
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-[#F4F7FA] text-[#1455A0] group-hover:bg-[#1455A0] group-hover:text-white transition-colors duration-150">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#17202A] block leading-tight group-hover:text-[#1455A0] transition-colors">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
                        {item.hint}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
