import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, MessageSquare, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { SERVICE_PAGES_DATA } from '../data/servicePagesData';

interface NavbarProps {
  onQuoteClick: () => void;
  onWhatsAppClick: () => void;
  onNavigateHome: () => void;
  onNavigateToService: (slug: string) => void;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onQuoteClick,
  onWhatsAppClick,
  onNavigateHome,
  onNavigateToService,
  currentPath = '/',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesList = Object.values(SERVICE_PAGES_DATA);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        onNavigateHome();
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#FFFFFF] ${
        isScrolled ? 'shadow-sm border-b border-slate-200' : 'border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Wordmark */}
          <div className="flex items-center">
            <button
              onClick={onNavigateHome}
              className="group flex flex-col text-left focus:outline-none"
              aria-label="FlyHigh Imports & Exports Home"
            >
              <span className="font-heading font-extrabold text-2xl tracking-tight text-[#0B1F33] transition-colors group-hover:text-[#1455A0]">
                {COMPANY_INFO.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1455A0] -mt-1">
                Imports &amp; Exports
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-sm font-medium text-[#17202A]/80 hover:text-[#1455A0] transition-colors py-1 focus:outline-none"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('#about')}
              className="text-sm font-medium text-[#17202A]/80 hover:text-[#1455A0] transition-colors py-1 focus:outline-none"
            >
              About
            </button>

            {/* Services with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-[#17202A]/80 hover:text-[#1455A0] transition-colors py-1 focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 w-72 bg-white rounded-lg border border-slate-200 shadow-xl py-2 mt-1 z-50 animate-in fade-in zoom-in-95 duration-100"
                >
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100">
                    Sourcing &amp; Logistics Services
                  </div>
                  {servicesList.map((svc) => (
                    <button
                      key={svc.slug}
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        onNavigateToService(svc.slug);
                      }}
                      className="w-full px-4 py-2.5 text-left flex items-start gap-2.5 hover:bg-[#F4F7FA] transition-colors group"
                    >
                      <span className="text-xs font-mono font-bold text-[#1455A0] mt-0.5">
                        {svc.number}
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-[#0B1F33] group-hover:text-[#1455A0] block">
                          {svc.name}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1">
                          {svc.tagline}
                        </span>
                      </div>
                    </button>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1 px-3">
                    <button
                      onClick={() => handleNavClick('#services')}
                      className="w-full text-center text-xs text-[#1455A0] font-medium py-1.5 hover:underline"
                    >
                      View All Services Overview →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('#products')}
              className="text-sm font-medium text-[#17202A]/80 hover:text-[#1455A0] transition-colors py-1 focus:outline-none"
            >
              Products
            </button>

            <button
              onClick={() => handleNavClick('#how-it-works')}
              className="text-sm font-medium text-[#17202A]/80 hover:text-[#1455A0] transition-colors py-1 focus:outline-none"
            >
              How It Works
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              className="text-sm font-medium text-[#17202A]/80 hover:text-[#1455A0] transition-colors py-1 focus:outline-none"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onWhatsAppClick}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1F33] hover:text-[#1455A0] px-3 py-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1455A0]"
              aria-label="Contact via WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </button>

            <button
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2 bg-[#1455A0] hover:bg-[#0B1F33] text-white text-sm font-medium px-5 py-2.5 rounded transition-all duration-150 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1455A0]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onQuoteClick}
              className="bg-[#1455A0] text-white text-xs font-medium px-3 py-1.5 rounded"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B1F33] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-left text-base font-medium text-[#17202A] hover:text-[#1455A0] py-2 border-b border-slate-100"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('#about')}
              className="text-left text-base font-medium text-[#17202A] hover:text-[#1455A0] py-2 border-b border-slate-100"
            >
              About
            </button>

            {/* Mobile Services Accordion */}
            <div className="py-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Our Services (Pages)
              </span>
              <div className="pl-2 space-y-1.5">
                {servicesList.map((svc) => (
                  <button
                    key={svc.slug}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToService(svc.slug);
                    }}
                    className="w-full text-left text-sm font-medium text-[#0B1F33] hover:text-[#1455A0] py-1 flex items-center justify-between"
                  >
                    <span>{svc.number}. {svc.name}</span>
                    <span className="text-[10px] text-slate-400">View Page →</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('#products')}
              className="text-left text-base font-medium text-[#17202A] hover:text-[#1455A0] py-2 border-b border-slate-100"
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick('#how-it-works')}
              className="text-left text-base font-medium text-[#17202A] hover:text-[#1455A0] py-2 border-b border-slate-100"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-left text-base font-medium text-[#17202A] hover:text-[#1455A0] py-2 border-b border-slate-100"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onWhatsAppClick();
              }}
              className="w-full flex items-center justify-center gap-2 border border-slate-300 py-2.5 rounded text-sm font-medium text-[#0B1F33]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1455A0] text-white py-2.5 rounded text-sm font-medium"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
