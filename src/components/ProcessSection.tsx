import React, { useState } from 'react';
import { ArrowRight, ChevronRight, FileCheck, Clock, CheckCircle } from 'lucide-react';
import { PROCESS_STAGES } from '../data/content';

interface ProcessSectionProps {
  onStartProcessClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProcessClick }) => {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const activeStage = PROCESS_STAGES[selectedStageIndex];

  return (
    <section id="how-it-works" className="bg-[#FFFFFF] py-24 sm:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-2">
            The FlyHigh Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F33] uppercase tracking-tight">
            A Simple Process.
            <span className="block text-[#1455A0] mt-1">A Global Journey.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Five synchronized operational milestones taking your goods from Chinese factory floors to your warehouse receiving dock.
          </p>
        </div>

        {/* Global Journey Path Bar */}
        <div className="bg-[#0B1F33] text-white rounded-lg p-4 sm:p-5 mb-14 shadow-sm border border-slate-800">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-300">
            <span className="text-white">Factory</span>
            <ChevronRight className="w-4 h-4 text-[#2E8BCB]" />
            <span className="text-white">Port</span>
            <ChevronRight className="w-4 h-4 text-[#2E8BCB]" />
            <span className="text-white">Destination</span>
            <ChevronRight className="w-4 h-4 text-[#2E8BCB]" />
            <span className="text-[#2E8BCB] font-bold">Doorstep</span>
          </div>
        </div>

        {/* Horizontal Timeline Track (Desktop) */}
        <div className="relative mb-12 hidden lg:block">
          {/* Connecting thin blue line */}
          <div
            className="absolute top-7 left-12 right-12 h-0.5 bg-slate-200 z-0"
            aria-hidden="true"
          >
            <div
              className="h-full bg-[#2E8BCB] transition-all duration-300"
              style={{ width: `${(selectedStageIndex / (PROCESS_STAGES.length - 1)) * 100}%` }}
            />
          </div>

          {/* Milestone Nodes */}
          <div className="relative z-10 grid grid-cols-5 gap-4">
            {PROCESS_STAGES.map((stage, idx) => {
              const isSelected = selectedStageIndex === idx;
              const isPast = idx < selectedStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageIndex(idx)}
                  className="group text-left focus:outline-none"
                  aria-label={`Select stage ${stage.stepNumber} ${stage.name}`}
                >
                  <div className="flex flex-col items-center">
                    {/* Circle Node */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-200 border-2 ${
                        isSelected
                          ? 'bg-[#1455A0] border-[#0B1F33] text-white shadow-md scale-110'
                          : isPast
                          ? 'bg-[#2E8BCB] border-[#2E8BCB] text-white'
                          : 'bg-white border-slate-300 text-slate-600 group-hover:border-[#1455A0] group-hover:text-[#0B1F33]'
                      }`}
                    >
                      {stage.stepNumber}
                    </div>

                    {/* Step Title */}
                    <div className="mt-4 text-center">
                      <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">
                        Step {stage.stepNumber}
                      </span>
                      <span
                        className={`text-sm font-bold uppercase transition-colors block mt-0.5 ${
                          isSelected ? 'text-[#1455A0]' : 'text-[#0B1F33]'
                        }`}
                      >
                        {stage.name}
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {stage.summary}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical List */}
        <div className="lg:hidden space-y-3 mb-10">
          {PROCESS_STAGES.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageIndex(idx)}
                className={`w-full p-4 rounded-lg border text-left flex items-start gap-4 transition-all ${
                  isSelected
                    ? 'border-[#1455A0] bg-[#F4F7FA] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected ? 'bg-[#1455A0] text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {stage.stepNumber}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-semibold text-[#1455A0]">
                      {stage.name}
                    </span>
                    <span className="text-xs text-slate-400">· {stage.duration}</span>
                  </div>
                  <p className="text-sm font-medium text-[#17202A] mt-0.5">
                    {stage.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="bg-[#F4F7FA] border border-slate-200 rounded-lg p-6 sm:p-10 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1455A0]">
                Stage {activeStage.stepNumber} Detail
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-[#0B1F33] mt-1">
                {activeStage.name} — {activeStage.summary}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3.5 py-1.5 rounded self-start md:self-auto">
              <Clock className="w-3.5 h-3.5 text-[#1455A0]" />
              <span>Timeline: {activeStage.duration}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
                Operational Execution
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeStage.keyAction}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
                Mandatory Checkpoint &amp; Verification
              </h4>
              <div className="flex items-start gap-2.5 bg-white border border-slate-200 rounded p-3">
                <FileCheck className="w-4 h-4 text-[#2E8BCB] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#0B1F33]">
                  {activeStage.checkpoint}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Full milestone transparency with photographic evidence</span>
            </div>

            <button
              onClick={onStartProcessClick}
              className="inline-flex items-center gap-2 bg-[#1455A0] hover:bg-[#0B1F33] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              <span>Begin With Step 01</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
