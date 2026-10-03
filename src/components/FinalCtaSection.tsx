import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FinalCtaSectionProps {
  onQuoteClick: () => void;
  onWhatsAppClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onQuoteClick,
  onWhatsAppClick,
}) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0B1F33] overflow-hidden text-white">
      {/* Background Image with Deep Navy Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/cta_global_shipping_port_1790924078472.jpg"
          alt="International container shipping port terminal with cranes and cargo"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/85 to-[#0B1F33]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E8BCB] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2E8BCB]" />
          <span>Global Trade Partnerships</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight uppercase text-white leading-tight">
          Ready to Source From China?
        </h2>

        <p className="mt-4 text-xl sm:text-2xl text-slate-200 font-medium max-w-2xl mx-auto">
          Tell us what you need.
        </p>

        <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl mx-auto mt-2">
          We'll help you take it from factory to doorstep.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1455A0] hover:bg-[#1964bd] text-white px-8 py-4 rounded font-semibold text-base transition-all duration-150 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded font-semibold text-base transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Small note */}
        <div className="mt-8 text-xs text-slate-400 flex items-center justify-center gap-2">
          <span>Direct inquiries reviewed within 24 hours</span>
          <span>·</span>
          <span>Bilingual native account managers</span>
        </div>
      </div>
    </section>
  );
};
