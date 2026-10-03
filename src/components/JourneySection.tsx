import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, FileText, ShieldAlert, Navigation, ArrowRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/content';

interface JourneySectionProps {
  onQuoteClick: () => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ onQuoteClick }) => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);
  const activeMilestone = JOURNEY_MILESTONES[activeMilestoneIndex];

  return (
    <section className="bg-[#0B1F33] text-white py-24 sm:py-32 relative overflow-hidden border-b border-slate-800">
      {/* Subtle structural grid texture background */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E8BCB] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E8BCB] animate-ping" />
            <span>End-to-End Trade Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight uppercase text-white">
            Your Product's Journey
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            From Chinese manufacturing floors to your receiving dock with unified accountability and zero intermediate handoff blindspots.
          </p>

          <div className="mt-6 inline-block bg-[#1455A0]/30 border border-[#2E8BCB]/40 px-5 py-2 rounded-full">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#2E8BCB] uppercase">
              Factory to Doorstep.
            </span>
          </div>
        </div>

        {/* Milestone Steps Flow (Vertical / Connected Stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Journey Line */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
              Milestone Gates (Click to Inspect)
            </span>

            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isSelected = activeMilestoneIndex === idx;

              return (
                <div key={milestone.step} className="relative">
                  <button
                    onClick={() => setActiveMilestoneIndex(idx)}
                    className={`w-full text-left p-5 rounded-lg border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#1455A0]/40 border-[#2E8BCB] shadow-lg translate-x-2'
                        : 'bg-[#0E2742]/70 border-slate-700/80 hover:border-slate-600 hover:bg-[#0E2742]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm font-mono font-bold px-2 py-1 rounded ${
                          isSelected ? 'bg-[#2E8BCB] text-[#0B1F33]' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {milestone.step}
                      </span>
                      <div>
                        <span
                          className={`text-sm font-bold block uppercase tracking-wide transition-colors ${
                            isSelected ? 'text-white' : 'text-slate-300'
                          }`}
                        >
                          {milestone.title}
                        </span>
                        <span className="text-xs text-slate-400 block mt-0.5">
                          {milestone.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400 hidden sm:inline-block">
                        {milestone.typicalDuration}
                      </span>
                      <div
                        className={`w-3 h-3 rounded-full border ${
                          isSelected
                            ? 'bg-[#2E8BCB] border-white'
                            : 'border-slate-600 bg-transparent'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Flow Arrow between steps */}
                  {idx < JOURNEY_MILESTONES.length - 1 && (
                    <div className="flex justify-center my-1">
                      <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Operational Dossier */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E2742] border border-slate-700 rounded-lg p-6 sm:p-9 shadow-xl relative">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between pb-5 border-b border-slate-700/80 gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#2E8BCB] bg-[#1455A0]/30 px-2.5 py-1 rounded">
                    Milestone Gate {activeMilestone.step}
                  </span>
                  <span className="text-xs text-slate-400">
                    Est. Duration: {activeMilestone.typicalDuration}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Audited Standard</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="pt-6">
                <h3 className="text-2xl font-heading font-extrabold text-white">
                  {activeMilestone.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Documentation & Audits Breakdown */}
              <div className="mt-8 space-y-4">
                <div className="bg-[#0B1F33] border border-slate-700/80 rounded p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E8BCB] mb-1.5">
                    <FileText className="w-4 h-4" />
                    <span>Official Trade Documentation</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">
                    {activeMilestone.documentation}
                  </p>
                </div>

                <div className="bg-[#0B1F33] border border-slate-700/80 rounded p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Compliance Verification &amp; Quality Audit</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">
                    {activeMilestone.verificationAudit}
                  </p>
                </div>
              </div>

              {/* Signature Banner */}
              <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Navigation className="w-4 h-4 text-[#2E8BCB]" />
                  <span>Guangzhou · Shenzhen · Ningbo → Global Destination</span>
                </div>

                <button
                  onClick={onQuoteClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1455A0] hover:bg-[#1b6cd0] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded transition-colors"
                >
                  <span>Start Your Shipment Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
