import React, { useState, useEffect } from 'react';
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
import { ServicePage } from './components/ServicePage';
import { SeoHead } from './components/seo/SeoHead';
import { ServiceItem } from './types';
import { COMPANY_INFO } from './data/content';
import { SERVICE_PAGES_DATA } from './data/servicePagesData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [targetCategory, setTargetCategory] = useState<string | undefined>(undefined);
  const [targetService, setTargetService] = useState<string | undefined>(undefined);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToService = (slug: string) => {
    const targetUrl = `/services/${slug}`;
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', targetUrl);
    }
    setCurrentPath(targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/');
    }
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToQuote = (category?: string, service?: string) => {
    if (category) setTargetCategory(category);
    if (service) setTargetService(service);

    if (currentPath !== '/') {
      navigateHome();
      setTimeout(() => {
        const quoteSection = document.getElementById('contact');
        if (quoteSection) {
          quoteSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    const quoteSection = document.getElementById('contact');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    if (currentPath !== '/') {
      navigateHome();
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    if (currentPath !== '/') {
      navigateHome();
      setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    if (currentPath !== '/') {
      navigateHome();
      setTimeout(() => {
        const processSection = document.getElementById('how-it-works');
        if (processSection) {
          processSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

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

  // Determine if a dedicated service page is active
  const matchService = currentPath.startsWith('/services/')
    ? currentPath.replace('/services/', '').replace(/\/$/, '')
    : null;

  const activeServicePage = matchService && SERVICE_PAGES_DATA[matchService]
    ? SERVICE_PAGES_DATA[matchService]
    : null;

  // Home Page JSON-LD schema
  const homeSchemaJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      alternateName: COMPANY_INFO.shortName,
      url: typeof window !== 'undefined' ? window.location.origin : 'https://flyhighimports.com',
      logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : undefined,
      description: COMPANY_INFO.mission,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address,
        addressCountry: 'IN',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'China Sourcing & Logistics Services',
        itemListElement: Object.values(SERVICE_PAGES_DATA).map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            url: typeof window !== 'undefined' ? `${window.location.origin}${s.canonicalPath}` : s.canonicalPath,
            description: s.metaDescription,
          },
        })),
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#17202A] flex flex-col font-sans selection:bg-[#1455A0] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onQuoteClick={() => scrollToQuote()}
        onWhatsAppClick={handleWhatsAppClick}
        onNavigateHome={navigateHome}
        onNavigateToService={navigateToService}
        currentPath={currentPath}
      />

      {/* Render either a Dedicated Service Page or the Comprehensive Home Page */}
      {activeServicePage ? (
        <ServicePage
          service={activeServicePage}
          onNavigateHome={navigateHome}
          onNavigateToService={navigateToService}
          onOpenQuoteWithService={(serviceName) => scrollToQuote(undefined, serviceName)}
        />
      ) : (
        /* Home Experience */
        <main className="flex-1">
          {/* Default Home SEO Metadata */}
          <SeoHead
            title="FlyHigh Imports & Exports — Factory to Doorstep Sourcing from China"
            description="End-to-end China product sourcing, supplier coordination, quality inspection, and international logistics connecting global businesses with China manufacturing."
            canonicalPath="/"
            keywords={[
              'China product sourcing',
              'factory to doorstep China',
              'China imports exports',
              'B2B sourcing China',
              'Guangzhou Yiwu Shenzhen sourcing',
              'China logistics customs clearance',
            ]}
            ogImage="/src/assets/images/hero_china_manufacturing_1790924028893.jpg"
            schemaJsonLd={homeSchemaJsonLd}
          />

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
            onNavigateToServicePage={navigateToService}
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
      )}

      {/* Corporate Footer */}
      <Footer
        onQuoteClick={() => scrollToQuote()}
        onWhatsAppClick={handleWhatsAppClick}
        onNavigateHome={navigateHome}
        onNavigateToService={navigateToService}
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
