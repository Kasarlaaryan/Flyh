import React from 'react';
import { X, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
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
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1455A0] mb-1">
            <span>Service {service.number}</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5" /> {service.typicalTimeline}
            </span>
          </div>
          <h3 className="text-2xl font-heading font-extrabold text-[#0B1F33]">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Scope Details */}
        <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Operational Scope &amp; Methodology
          </h4>
          <div className="space-y-2.5">
            {service.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1455A0] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Client Deliverables &amp; Documentation
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4F7FA] border border-slate-200/80 rounded p-2.5 flex items-center gap-2 text-xs text-[#0B1F33] font-medium"
              >
                <FileText className="w-3.5 h-3.5 text-[#2E8BCB] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-xs font-semibold text-slate-600 hover:text-[#0B1F33] py-2 px-4"
          >
            Close Scope View
          </button>
          <button
            onClick={() => {
              onClose();
              onQuote(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1455A0] hover:bg-[#0B1F33] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded transition-colors shadow-sm"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
