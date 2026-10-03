import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onQuoteClick: () => void;
  onWhatsAppClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick, onWhatsAppClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

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
            <a
              href="#home"
              className="group flex flex-col focus:outline-none"
              aria-label="FlyHigh Imports & Exports Home"
            >
              <span className="font-heading font-extrabold text-2xl tracking-tight text-[#0B1F33] transition-colors group-hover:text-[#1455A0]">
                {COMPANY_INFO.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1455A0] -mt-1">
                Imports &amp; Exports
              </span>
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#17202A]/80 hover:text-[#1455A0] transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#1455A0]"
              >
                {link.label}
              </a>
            ))}
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
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#17202A] hover:text-[#1455A0] py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
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
