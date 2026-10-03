import React from 'react';
import { ArrowRight, Globe, Shield, Layers, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
  onExploreProductsClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMoreClick,
  onExploreProductsClick,
}) => {
  const hubs = [
    { name: 'Guangzhou', specialty: 'Apparel, leather goods, hotelware & auto parts' },
    { name: 'Shenzhen', specialty: 'Electronics, smart hardware, PCB & wearables' },
    { name: 'Yiwu', specialty: 'Small commodities, sundries, hardware & stationery' },
    { name: 'Ningbo / Jiangsu', specialty: 'Heavy machinery, tools, kitchenware & fasteners' },
  ];

  return (
    <section id="about" className="bg-[#F4F7FA] py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1455A0]">
              <span className="w-2 h-2 rounded-full bg-[#1455A0]" />
              <span>About FlyHigh Imports &amp; Exports</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F33] leading-tight text-balance">
              Connecting Businesses to China's Manufacturing Ecosystem
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#17202A]/80 font-normal leading-relaxed">
              <p>
                China offers enormous sourcing opportunities, but international procurement can involve multiple suppliers, communication, quality checks, logistics, documentation and customs processes.
              </p>
              <p className="font-medium text-[#0B1F33]">
                {COMPANY_INFO.name} helps simplify this journey.
              </p>
              <p>
                We coordinate the sourcing and movement of products from Chinese suppliers toward your destination, helping businesses focus on what matters most — their business.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1455A0] hover:text-[#0B1F33] transition-colors py-2 px-1 border-b-2 border-[#1455A0] hover:border-[#0B1F33] focus:outline-none"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProductsClick}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B1F33] transition-colors py-2 px-3"
              >
                <span>Browse Sourcing Categories</span>
              </button>
            </div>
          </div>

          {/* Right Column: Strategic Pillars & Hub Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/90 rounded-lg p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    On-Ground Presence
                  </span>
                  <h3 className="text-base font-heading font-bold text-[#0B1F33]">
                    China Manufacturing Clusters
                  </h3>
                </div>
                <Globe className="w-5 h-5 text-[#1455A0]" />
              </div>

              <div className="space-y-4">
                {hubs.map((hub) => (
                  <div key={hub.name} className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#2E8BCB] shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-[#0B1F33] block">
                        {hub.name}
                      </span>
                      <span className="text-xs text-slate-500 leading-normal block">
                        {hub.specialty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#1455A0] pl-3">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Scope</span>
                  <span className="text-sm font-bold text-[#0B1F33]">Direct Factory Access</span>
                </div>
                <div className="border-l-2 border-[#2E8BCB] pl-3">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Standard</span>
                  <span className="text-sm font-bold text-[#0B1F33]">AQL 2.5 Audited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
