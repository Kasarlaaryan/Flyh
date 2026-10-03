import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { SERVICE_PAGES_DATA } from '../data/servicePagesData';

interface FooterProps {
  onQuoteClick: () => void;
  onWhatsAppClick: () => void;
  onNavigateHome?: () => void;
  onNavigateToService?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onQuoteClick,
  onWhatsAppClick,
  onNavigateHome,
  onNavigateToService,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = Object.values(SERVICE_PAGES_DATA);

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
                <button
                  onClick={onNavigateHome}
                  className="hover:text-[#2E8BCB] transition-colors focus:outline-none"
                >
                  About FlyHigh
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-[#2E8BCB] transition-colors focus:outline-none"
                >
                  Services Overview
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-[#2E8BCB] transition-colors focus:outline-none"
                >
                  Product Categories
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-[#2E8BCB] transition-colors focus:outline-none"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={onQuoteClick}
                  className="hover:text-[#2E8BCB] transition-colors focus:outline-none"
                >
                  Contact &amp; RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Dedicated Services Pages Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Sourcing Services (Pages)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {servicesList.map((svc) => (
                <li key={svc.slug}>
                  <button
                    onClick={() => onNavigateToService && onNavigateToService(svc.slug)}
                    className="hover:text-[#2E8BCB] transition-colors text-left flex items-center justify-between w-full group py-0.5"
                  >
                    <span>{svc.name}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-[#2E8BCB] transition-colors">
                      {svc.number} →
                    </span>
                  </button>
                </li>
              ))}
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

          <div>
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
