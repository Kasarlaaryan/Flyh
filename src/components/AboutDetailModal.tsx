import React from 'react';
import { X, Globe2, ShieldCheck, Check, ArrowRight, Building, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuote: () => void;
}

export const AboutDetailModal: React.FC<AboutDetailModalProps> = ({
  isOpen,
  onClose,
  onQuote,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl border border-slate-200 max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded text-slate-400 hover:text-[#0B1F33] hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-1">
            Corporate Profile &amp; Ground Presence
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F33]">
            {COMPANY_INFO.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-[#1455A0]">
            {COMPANY_INFO.tagline} · {COMPANY_INFO.subTagline}
          </p>
        </div>

        {/* Narrative */}
        <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Established to provide structured, institutional transparency in international trade, FlyHigh bridges global businesses directly with verified manufacturing clusters in China.
          </p>
          <p>
            Unlike fragmented middlemen or opportunistic broker networks, we manage sourcing as an integrated supply chain discipline. From preliminary vendor balance sheet audits and golden sample approvals, to during-production monitoring, AQL 2.5 defect inspections, and container vessel allocation — every phase is governed by clear legal documentation and verified checkpoints.
          </p>
        </div>

        {/* Ground Hubs & Guarantees */}
        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#F4F7FA] border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F33] mb-2 uppercase tracking-wide">
              <Building className="w-4 h-4 text-[#1455A0]" />
              <span>Liaison Desk in Guangzhou</span>
            </div>
            <p className="text-xs text-slate-600 leading-normal">
              {COMPANY_INFO.chinaHubAddress}
            </p>
          </div>

          <div className="bg-[#F4F7FA] border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F33] mb-2 uppercase tracking-wide">
              <Award className="w-4 h-4 text-[#2E8BCB]" />
              <span>Inspection Standard</span>
            </div>
            <p className="text-xs text-slate-600 leading-normal">
              Zero shipment release without signed AQL 2.5 defect reports and photo/video sign-off by the buyer.
            </p>
          </div>
        </div>

        {/* Operational Pillars */}
        <div className="mt-6 pt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-700">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Escrow milestone payments safeguarding buyer capital</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-700">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Harmonized Tariff (HS Code) compliance to eliminate customs penalty risk</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-700">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Consolidated container packing to minimize dead-space freight surcharges</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-xs font-semibold text-slate-600 hover:text-[#0B1F33] py-2 px-4"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onQuote();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1455A0] hover:bg-[#0B1F33] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded transition-colors"
          >
            <span>Request a Sourcing Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
