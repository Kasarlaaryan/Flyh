import React from 'react';
import { Network, Compass, MessageSquareText, SlidersHorizontal, Briefcase } from 'lucide-react';
import { WHY_FLYHIGH_POINTS } from '../data/content';

export const WhyFlyHigh: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    coordination: Network,
    'china-focused': Compass,
    communication: MessageSquareText,
    flexible: SlidersHorizontal,
    'business-first': Briefcase,
  };

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1455A0] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1455A0]" />
            <span>Operational Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F33] tracking-tight">
            Why Businesses Choose FlyHigh
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Practical, disciplined procurement coordination engineered to protect margins, avoid costly manufacturing misunderstandings, and maintain punctual delivery schedules.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_FLYHIGH_POINTS.map((point, index) => {
            const Icon = iconMap[point.id] || Network;

            return (
              <div
                key={point.id}
                className="bg-[#F4F7FA]/70 border border-slate-200/90 rounded-lg p-8 flex flex-col justify-between hover:border-[#1455A0] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#1455A0]/10 text-[#1455A0] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#0B1F33] mb-2">
                    {point.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#1455A0] mb-3">
                    {point.description}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>PILLAR {String(index + 1).padStart(2, '0')}</span>
                  <span className="text-[#1455A0] font-sans font-semibold">Verified Standard</span>
                </div>
              </div>
            );
          })}

          {/* Direct Benchmark summary card */}
          <div className="bg-[#0B1F33] text-white rounded-lg p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#2E8BCB] font-semibold block mb-2">
                Operational Metrics
              </span>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Accountable Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Direct factory rate benchmarking, bilingual native trade agents, and verifiable AQL 2.5 on-site testing before release.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/80 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Inspection Pass Standard</span>
                <span className="text-white font-mono font-bold">AQL 2.5 Major</span>
              </div>
              <div className="flex justify-between">
                <span>Direct Sourcing Markups</span>
                <span className="text-[#2E8BCB] font-mono font-bold">0% Hidden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
