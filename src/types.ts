export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  deliverables: string[];
  typicalTimeline: string;
}

export interface ProcessStage {
  id: string;
  stepNumber: string;
  name: string;
  summary: string;
  keyAction: string;
  duration: string;
  checkpoint: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  hub: string;
  typicalMoq: string;
  leadTime: string;
  featuredItems: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  countryCode: string;
  whatsAppNumber: string;
  productRequired: string;
  quantity: string;
  deliveryLocation: string;
  productLink: string;
  productCategory: string;
  additionalNotes: string;
  imageFile: File | null;
  imagePreviewUrl: string | null;
}

export interface JourneyMilestone {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  documentation: string;
  verificationAudit: string;
  typicalDuration: string;
}
