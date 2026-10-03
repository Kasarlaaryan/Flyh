import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  ShieldCheck,
  ChevronDown,
  Building2,
  TrendingDown,
  MessageSquare,
  ChevronRight,
  Send,
} from 'lucide-react';
import { DetailedServicePage, SERVICE_PAGES_DATA } from '../data/servicePagesData';
import { COMPANY_INFO } from '../data/content';
import { SeoHead } from './seo/SeoHead';

interface ServicePageProps {
  service: DetailedServicePage;
  onNavigateHome: () => void;
  onNavigateToService: (slug: string) => void;
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  service,
  onNavigateHome,
  onNavigateToService,
  onOpenQuoteWithService,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rfqId, setRfqId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    volume: '',
    notes: '',
  });

  const allServicesList = Object.values(SERVICE_PAGES_DATA);
  const otherServices = allServicesList.filter((s) => s.slug !== service.slug);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `FH-RFQ-${service.shortName.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqId(id);
    setFormSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello FlyHigh Imports & Exports, I would like to inquire about your ${service.name} service (Factory to Doorstep).`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsApp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  // Build JSON-LD structured data
  const jsonLdSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      serviceType: service.kicker,
      description: service.metaDescription,
      provider: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
        url: typeof window !== 'undefined' ? window.location.origin : 'https://flyhighimports.com',
        logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : undefined,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_INFO.address,
          addressCountry: 'IN',
        },
      },
      areaServed: ['Global', 'India', 'United States', 'United Arab Emirates', 'Europe'],
      termsOfService: 'Factory to Doorstep verifiable trade terms under Incoterms 2020.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: typeof window !== 'undefined' ? window.location.origin : '/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: typeof window !== 'undefined' ? `${window.location.origin}/#services` : '/#services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.name,
          item: typeof window !== 'undefined' ? `${window.location.origin}${service.canonicalPath}` : service.canonicalPath,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <article className="min-h-screen bg-white text-[#17202A]">
      {/* Inject SEO Metadata & JSON-LD */}
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={service.canonicalPath}
        keywords={service.keywords}
        ogImage={service.heroImage}
        schemaJsonLd={jsonLdSchema}
      />

      {/* SEO Breadcrumbs Bar */}
      <nav aria-label="Breadcrumb" className="bg-[#F4F7FA] border-b border-slate-200 pt-24 pb-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
            <li>
              <button
                onClick={onNavigateHome}
                className="hover:text-[#1455A0] transition-colors focus:outline-none"
              >
                Home
              </button>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li>
              <button
                onClick={onNavigateHome}
                className="hover:text-[#1455A0] transition-colors focus:outline-none"
              >
                Services
              </button>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li className="text-[#0B1F33] font-semibold" aria-current="page">
              {service.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Dedicated Service Hero */}
      <header className="relative bg-[#0B1F33] text-white py-16 sm:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.name}
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/95 to-[#0B1F33]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Number & Kicker */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono font-bold px-2.5 py-1 rounded bg-[#1455A0] text-white">
                SERVICE {service.number}
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2E8BCB]">
                {service.kicker}
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
              {service.h1}
            </h1>

            {/* Value Tagline */}
            <p className="mt-4 text-lg sm:text-xl text-[#2E8BCB] font-medium leading-snug">
              {service.tagline}
            </p>

            {/* Hero Summary */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {service.heroSummary}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteWithService(service.name)}
                className="inline-flex items-center gap-2 bg-[#1455A0] hover:bg-[#1964bd] text-white px-7 py-3.5 rounded font-semibold text-sm sm:text-base transition-colors shadow-sm"
              >
                <span>Request {service.shortName} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded font-semibold text-sm sm:text-base transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Sourcing Desk</span>
              </button>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.keyMetrics.map((metric, i) => (
              <div key={i} className="bg-[#0E2742]/80 border border-slate-700/80 rounded-lg p-5">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1 block">
                  {metric.value}
                </span>
                <span className="text-xs text-[#2E8BCB] mt-1 block">
                  {metric.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* Section 1: Geographic Sourcing Corridors & Industrial Clusters */}
        <section aria-labelledby="clusters-heading">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-1">
              Geographic Supply Chain Topology
            </span>
            <h2 id="clusters-heading" className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F33]">
              {service.marketContext.title}
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.marketContext.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.marketContext.clusters.map((cluster, idx) => (
              <div
                key={idx}
                className="bg-[#F4F7FA] border border-slate-200/90 rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1455A0] mb-2 uppercase">
                    <MapPin className="w-4 h-4 text-[#2E8BCB]" />
                    <span>{cluster.region}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F33] mb-2">
                    Specialized Manufacturing Corridors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cluster.specialization}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Export Terminal Gateway:</span>
                  <span className="text-[#0B1F33] font-semibold">{cluster.port}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 4-Stage Operational Methodology */}
        <section aria-labelledby="methodology-heading" className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-1">
              Step-by-Step Execution Protocol
            </span>
            <h2 id="methodology-heading" className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F33]">
              Operational Methodology &amp; Audit Gates
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Every stage is locked behind verifiable quality gates to eliminate financial and operational exposure.
            </p>
          </div>

          <div className="space-y-6">
            {service.operationalStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 hover:border-[#1455A0] transition-colors shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1455A0] text-white flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[#0B1F33]">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-[#1455A0] bg-[#F4F7FA] border border-slate-200 px-3 py-1 rounded self-start sm:self-auto">
                    Lead Time: {stage.leadTime}
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {stage.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider block mb-2">
                    Mandatory Stage Checkpoints:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {stage.checks.map((chk, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-[#F4F7FA] p-2.5 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Official Deliverables & Audit Documentation */}
        <section aria-labelledby="deliverables-heading" className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-1">
              Verifiable Documentation
            </span>
            <h2 id="deliverables-heading" className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F33]">
              Official Client Deliverables
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Transparent trade documents issued at each milestone to satisfy banking, tax, and insurance requirements.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-[#F4F7FA] text-xs font-bold uppercase text-[#0B1F33] border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-4">Document / Certification</th>
                  <th scope="col" className="px-6 py-4">Format</th>
                  <th scope="col" className="px-6 py-4">Regulatory &amp; Commercial Purpose</th>
                  <th scope="col" className="px-6 py-4">Issuing / Verifying Entity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {service.deliverablesTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#0B1F33] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#1455A0] shrink-0" />
                      <span>{item.documentName}</span>
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-500">{item.format}</td>
                    <td className="px-6 py-4 text-xs sm:text-sm leading-relaxed">{item.purpose}</td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-700">{item.verificationEntity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Verified B2B Case Study */}
        <section aria-labelledby="casestudy-heading" className="pt-8 border-t border-slate-200">
          <div className="bg-[#0B1F33] text-white rounded-xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#2E8BCB] font-semibold block mb-2">
                Operational Case Study · {service.caseStudy.industry}
              </span>
              <h2 id="casestudy-heading" className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                {service.caseStudy.clientType}
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-red-400 block mb-1">
                    The Challenge
                  </span>
                  <p>{service.caseStudy.challenge}</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 block mb-1">
                    FlyHigh Intervention
                  </span>
                  <p>{service.caseStudy.intervention}</p>
                </div>
              </div>

              {/* Quantified Results */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {service.caseStudy.results.map((res, rIdx) => (
                  <div key={rIdx} className="bg-[#0E2742] border border-slate-700 rounded-lg p-4">
                    <span className="text-xl sm:text-2xl font-heading font-bold text-[#2E8BCB] block">
                      {res.metric}
                    </span>
                    <span className="text-xs text-slate-300 mt-1 block">
                      {res.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Service-Specific FAQ Section */}
        <section aria-labelledby="faq-heading" className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-1">
              Direct Answers
            </span>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F33]">
              Frequently Asked Questions About {service.name}
            </h2>
          </div>

          <div className="space-y-3 max-w-4xl">
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;

              return (
                <div key={fIdx} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-[#F4F7FA] hover:bg-slate-100 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-heading font-bold text-[#0B1F33]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        isOpen ? 'rotate-180 text-[#1455A0]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 py-4 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: Tailored Service RFQ Form */}
        <section aria-labelledby="rfq-heading" className="pt-8 border-t border-slate-200">
          <div className="bg-[#F4F7FA] border border-slate-200 rounded-xl p-8 sm:p-12">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-1">
                Direct Procurement Action
              </span>
              <h2 id="rfq-heading" className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F33]">
                Request a Detailed {service.name} Proposal
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Provide your estimated specifications or project timeline. Our China desk responds with a feasibility report within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white border border-emerald-300 rounded-lg p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-[#0B1F33]">
                  Inquiry Registered: {rfqId}
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Our ground lead for {service.name} has received your requirement and will contact you via WhatsApp with preliminary metrics.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white text-xs font-semibold px-5 py-2.5 rounded hover:bg-emerald-700 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 max-w-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                      Estimated Volume / Budget *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2,000 units / 1 FCL Container"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                    Specific Requirement or Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder={`Describe your ${service.name} specifications, target delivery date, or questions...`}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#1455A0] hover:bg-[#0B1F33] text-white px-7 py-3 rounded font-semibold text-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit {service.shortName} Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Section 7: Internal Cross-Linking to Other Services */}
        <section aria-labelledby="other-services-heading" className="pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-1">
                Integrated Supply Chain Solutions
              </span>
              <h2 id="other-services-heading" className="text-2xl font-heading font-extrabold text-[#0B1F33]">
                Explore Other FlyHigh Services
              </h2>
            </div>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1455A0] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Capabilities</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <div
                key={other.slug}
                onClick={() => onNavigateToService(other.slug)}
                className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-[#1455A0] hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                    <span>SERVICE {other.number}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[#1455A0] transition-transform text-slate-300" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#0B1F33] group-hover:text-[#1455A0] transition-colors mb-2">
                    {other.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {other.heroSummary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1455A0]">
                  <span>View Dedicated Service Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </article>
  );
};
