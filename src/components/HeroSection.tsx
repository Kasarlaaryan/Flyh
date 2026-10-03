import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Factory, ShieldCheck, Truck, FileCheck, Package, Building2 } from 'lucide-react';

interface HeroSectionProps {
  onQuoteClick: () => void;
  onExploreServicesClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onQuoteClick,
  onExploreServicesClick,
}) => {
  const [activeCardItem, setActiveCardItem] = useState<number | null>(null);

  const requirementSteps = [
    { label: 'Product sourcing', icon: Building2, desc: 'Factory verification & price benchmark' },
    { label: 'Supplier coordination', icon: Factory, desc: 'Bilingual contract & production timeline' },
    { label: 'Quality inspection', icon: ShieldCheck, desc: 'AQL 2.5 on-site testing before shipment' },
    { label: 'Shipping', icon: Truck, desc: 'Air cargo & ocean container allocation' },
    { label: 'Customs coordination', icon: FileCheck, desc: 'HS code filing, duty clearance & documentation' },
    { label: 'Doorstep delivery', icon: Package, desc: 'Final bonded transport to your destination' },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-[#0B1F33] pt-24 pb-20 overflow-hidden">
      {/* Background Image with Deep Navy Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_china_manufacturing_1790924028893.jpg"
          alt="High-tech manufacturing and production assembly facility in China"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/90 to-[#0B1F33]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1455A0]/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#2E8BCB]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2E8BCB] uppercase">
                China Sourcing · Imports · Exports
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-[1.08]">
                From Factory
                <span className="block text-[#2E8BCB] mt-1">To Doorstep.</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed">
              End-to-end sourcing and import solutions connecting you with manufacturers and suppliers in China.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2.5 bg-[#1455A0] hover:bg-[#1964bd] text-white px-7 py-3.5 rounded font-medium text-base transition-all duration-150 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServicesClick}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded font-medium text-base transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Discrete Trust Metadata */}
            <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8BCB]" />
                Direct Factory Benchmarking
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8BCB]" />
                Pre-Shipment Inspection (AQL 2.5)
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8BCB]" />
                Guangzhou &amp; Yiwu Sourcing Hubs
              </span>
            </div>
          </div>

          {/* Right Column: Floating Information Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0E2742]/95 backdrop-blur-md border border-slate-700/80 rounded-lg p-6 sm:p-7 shadow-2xl transition-all duration-200 hover:border-slate-600">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/70 mb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                    Integrated Workflow
                  </span>
                  <h2 className="text-lg font-heading font-bold text-white mt-0.5">
                    Your Requirement
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium">Single Accountable Partner</span>
                </div>
              </div>

              {/* Requirement Checklist */}
              <div className="space-y-3">
                {requirementSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeCardItem === idx;

                  return (
                    <div
                      key={step.label}
                      onMouseEnter={() => setActiveCardItem(idx)}
                      onMouseLeave={() => setActiveCardItem(null)}
                      className={`group p-3 rounded border transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-[#1455A0]/30 border-[#2E8BCB] translate-x-1'
                          : 'bg-[#0B1F33]/60 border-slate-800 hover:border-slate-700 hover:bg-[#0B1F33]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded ${isActive ? 'bg-[#1455A0] text-white' : 'bg-slate-800 text-[#2E8BCB]'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-white block">
                              {step.label}
                            </span>
                            <span className="text-xs text-slate-400 block mt-0.5">
                              {step.desc}
                            </span>
                          </div>
                        </div>
                        <CheckCircle2
                          className={`w-4 h-4 transition-colors ${
                            isActive ? 'text-[#2E8BCB]' : 'text-slate-600 group-hover:text-slate-400'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span>Coverage: FCL · LCL · Air Cargo</span>
                <span className="text-[#2E8BCB] font-semibold">Factory → Doorstep</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
