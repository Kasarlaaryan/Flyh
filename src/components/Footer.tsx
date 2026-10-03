import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onQuoteClick: () => void;
  onWhatsAppClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuoteClick, onWhatsAppClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F33] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white block">
                {COMPANY_INFO.shortName}
              </span>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#2E8BCB] block">
                {COMPANY_INFO.tagline}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              China sourcing and import/export solutions for businesses. We coordinate the journey from factory to final destination with institutional reliability.
            </p>

            <div className="pt-2">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 bg-[#1455A0] hover:bg-[#1964bd] text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors"
              >
                <span>Request a Sourcing Quote</span>
              </button>
            </div>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-[#2E8BCB] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2E8BCB] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2E8BCB] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#2E8BCB] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2E8BCB] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-[#2E8BCB] transition-colors">
                  Product Sourcing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2E8BCB] transition-colors">
                  Supplier Coordination
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2E8BCB] transition-colors">
                  Quality Inspection
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2E8BCB] transition-colors">
                  Consolidation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2E8BCB] transition-colors">
                  Logistics &amp; Shipping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2E8BCB] transition-colors">
                  Doorstep Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#2E8BCB] shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#2E8BCB] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <button
                  onClick={onWhatsAppClick}
                  className="hover:text-white transition-colors text-left"
                >
                  WhatsApp: {COMPANY_INFO.whatsAppDisplay}
                </button>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2E8BCB] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-400">
                  {COMPANY_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Factory to Doorstep.
          </p>

          <div className="flex items-center gap-6">
            <span>International Trade Compliance Verified</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
