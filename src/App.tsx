import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ProductCategories } from './components/ProductCategories';
import { JourneySection } from './components/JourneySection';
import { WhyFlyHigh } from './components/WhyFlyHigh';
import { BusinessSection } from './components/BusinessSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutDetailModal } from './components/AboutDetailModal';
import { ServiceItem } from './types';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [targetCategory, setTargetCategory] = useState<string | undefined>(undefined);
  const [targetService, setTargetService] = useState<string | undefined>(undefined);

  const scrollToQuote = (category?: string, service?: string) => {
    if (category) setTargetCategory(category);
    if (service) setTargetService(service);

    const quoteSection = document.getElementById('contact');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const processSection = document.getElementById('how-it-works');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const defaultText = encodeURIComponent(
      `Hello FlyHigh Imports & Exports, I would like to inquire about product sourcing from China (Factory to Doorstep).`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsApp.replace(/[^0-9]/g, '')}?text=${defaultText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-[#17202A] flex flex-col font-sans selection:bg-[#1455A0] selection:text-white">
      {/* 1. Top Navigation */}
      <Navbar
        onQuoteClick={() => scrollToQuote()}
        onWhatsAppClick={handleWhatsAppClick}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Large Cinematic Factory Hero */}
        <HeroSection
          onQuoteClick={() => scrollToQuote()}
          onExploreServicesClick={scrollToServices}
        />

        {/* 3. Trust / Service Strip */}
        <TrustStrip />

        {/* 4. About FlyHigh */}
        <AboutSection
          onLearnMoreClick={() => setIsAboutModalOpen(true)}
          onExploreProductsClick={scrollToProducts}
        />

        {/* 5. 6 Corporate Service Cards */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onQuoteWithService={(serviceName) => scrollToQuote(undefined, serviceName)}
        />

        {/* 6. Factory → Doorstep Process */}
        <ProcessSection onStartProcessClick={scrollToProcess} />

        {/* 7. Product Categories */}
        <ProductCategories
          onRequestCategoryQuote={(categoryName) => scrollToQuote(categoryName)}
          onCustomRequirementClick={() => scrollToQuote('Custom Requirements')}
        />

        {/* 8. China → Destination Signature Visual Journey */}
        <JourneySection onQuoteClick={() => scrollToQuote()} />

        {/* 9. Why FlyHigh */}
        <WhyFlyHigh />

        {/* 10. Business Solutions */}
        <BusinessSection
          onStartConversation={(businessType) =>
            scrollToQuote(undefined, businessType ? `Inquiry for ${businessType}` : undefined)
          }
        />

        {/* 11. Quote Form */}
        <QuoteFormSection
          initialCategory={targetCategory}
          initialService={targetService}
        />

        {/* 12. FAQ */}
        <FaqSection />

        {/* 13. Final CTA */}
        <FinalCtaSection
          onQuoteClick={() => scrollToQuote()}
          onWhatsAppClick={handleWhatsAppClick}
        />
      </main>

      {/* 14. Corporate Footer */}
      <Footer
        onQuoteClick={() => scrollToQuote()}
        onWhatsAppClick={handleWhatsAppClick}
      />

      {/* Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onQuote={(title) => scrollToQuote(undefined, title)}
      />

      <AboutDetailModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onQuote={() => scrollToQuote()}
      />
    </div>
  );
}
