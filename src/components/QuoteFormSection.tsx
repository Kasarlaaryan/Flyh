import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Upload, CheckCircle2, MessageSquare, AlertCircle, X, FileText, Image as ImageIcon } from 'lucide-react';
import { QuoteFormData } from '../types';
import { COMPANY_INFO } from '../data/content';

interface QuoteFormSectionProps {
  initialCategory?: string;
  initialService?: string;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  initialCategory,
  initialService,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    countryCode: '+91',
    whatsAppNumber: '',
    productRequired: '',
    quantity: '',
    deliveryLocation: '',
    productLink: '',
    productCategory: 'Electronics',
    additionalNotes: '',
    imageFile: null,
    imagePreviewUrl: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync initialCategory or initialService if passed
  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({
        ...prev,
        productCategory: initialCategory,
        productRequired: prev.productRequired || `Requirement for ${initialCategory}`,
      }));
    }
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        additionalNotes: prev.additionalNotes || `Inquiry regarding ${initialService} services.`,
      }));
    }
  }, [initialCategory, initialService]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, image: 'Please upload an image file (PNG, JPG, WEBP).' }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: 'File size must be less than 5MB.' }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        imagePreviewUrl: reader.result as string,
      }));
      setErrors((prev) => ({ ...prev, image: '' }));
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, imageFile: null, imagePreviewUrl: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required.';
    }
    if (!formData.whatsAppNumber.trim()) {
      newErrors.whatsAppNumber = 'WhatsApp Number is required.';
    } else if (!/^\d{7,15}$/.test(formData.whatsAppNumber.replace(/[\s-+()]/g, ''))) {
      newErrors.whatsAppNumber = 'Please enter a valid phone number (7-15 digits).';
    }
    if (!formData.productRequired.trim()) {
      newErrors.productRequired = 'Please specify the product you are looking for.';
    }
    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Please enter approximate quantity or volume.';
    }
    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Please specify city and country for delivery.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean corporate RFQ generation
    setTimeout(() => {
      const generatedRfq = `FH-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setRfqNumber(generatedRfq);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const constructWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello FlyHigh Imports & Exports,\n\nI have submitted RFQ Reference: *${rfqNumber}*.\n\n*Name:* ${formData.fullName}\n*Company:* ${formData.companyName}\n*Product:* ${formData.productRequired}\n*Quantity:* ${formData.quantity}\n*Destination:* ${formData.deliveryLocation}\n${formData.productLink ? `*Link:* ${formData.productLink}\n` : ''}\nPlease review my sourcing requirement.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsApp.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      companyName: '',
      countryCode: '+91',
      whatsAppNumber: '',
      productRequired: '',
      quantity: '',
      deliveryLocation: '',
      productLink: '',
      productCategory: 'Electronics',
      additionalNotes: '',
      imageFile: null,
      imagePreviewUrl: null,
    });
    setIsSubmitted(false);
    setRfqNumber('');
  };

  return (
    <section id="contact" className="bg-[#FFFFFF] py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1455A0] block mb-2">
            Tell Us What You Need
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F33] tracking-tight">
            Request a Sourcing Quote
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Submit your product specifications or reference link. Our on-ground sourcing team in China will evaluate manufacturer availability and return a comprehensive quotation.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#F4F7FA] border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  Requirement Registered
                </span>
                <h3 className="text-2xl font-heading font-bold text-[#0B1F33] mt-1">
                  RFQ Reference: <span className="text-[#1455A0]">{rfqNumber}</span>
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mt-2">
                  Thank you, <span className="font-semibold text-[#0B1F33]">{formData.fullName}</span>. Our sourcing desk has received your requirement for{' '}
                  <span className="font-semibold text-[#0B1F33]">{formData.productRequired}</span> ({formData.quantity}).
                </p>
              </div>

              {/* Next Steps Card */}
              <div className="bg-white border border-slate-200 rounded-lg p-5 max-w-lg mx-auto text-left text-xs sm:text-sm text-slate-600 space-y-2">
                <div className="font-semibold text-[#0B1F33] uppercase text-xs tracking-wider">
                  Next Steps:
                </div>
                <p>1. Our ground coordinators in China will review product feasibility and factory-gate price points.</p>
                <p>2. We will contact you via WhatsApp ({formData.countryCode} {formData.whatsAppNumber}) with preliminary MOQ and timeline metrics.</p>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <a
                  href={constructWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continue on WhatsApp Now</span>
                </a>

                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto text-xs text-slate-600 hover:text-[#0B1F33] font-medium py-3 underline"
                >
                  Submit Another Sourcing Requirement
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-sm text-[#17202A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1455A0] transition-colors ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-sm text-[#17202A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1455A0] transition-colors ${
                      errors.companyName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.companyName && (
                    <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.companyName}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: WhatsApp Number & Product Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsAppNumber" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="bg-white border border-r-0 border-slate-300 rounded-l-lg px-3 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                    >
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US/CA)</option>
                      <option value="+971">+971 (UAE)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+86">+86 (CN)</option>
                      <option value="+65">+65 (SG)</option>
                      <option value="+61">+61 (AU)</option>
                    </select>
                    <input
                      type="tel"
                      id="whatsAppNumber"
                      name="whatsAppNumber"
                      value={formData.whatsAppNumber}
                      onChange={handleInputChange}
                      placeholder="XXXXX XXXXX"
                      className={`flex-1 bg-white border rounded-r-lg px-4 py-3 text-sm text-[#17202A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1455A0] transition-colors ${
                        errors.whatsAppNumber ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.whatsAppNumber && (
                    <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.whatsAppNumber}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="productCategory" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Industry Category
                  </label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#17202A] focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                  >
                    <option value="Electronics">Electronics &amp; Smart Hardware</option>
                    <option value="Machinery & Equipment">Machinery &amp; Equipment</option>
                    <option value="Home & Kitchen">Home &amp; Kitchen</option>
                    <option value="Packaging">Packaging &amp; Containers</option>
                    <option value="Fashion & Accessories">Fashion &amp; Accessories</option>
                    <option value="Industrial Products">Industrial Products &amp; Fasteners</option>
                    <option value="Beauty & Lifestyle">Beauty &amp; Lifestyle</option>
                    <option value="Custom Requirements">Custom Requirements / OEM</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Product Required & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="productRequired" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Product Required <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="productRequired"
                    name="productRequired"
                    value={formData.productRequired}
                    onChange={handleInputChange}
                    placeholder="What are you looking for?"
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-sm text-[#17202A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1455A0] transition-colors ${
                      errors.productRequired ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.productRequired && (
                    <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.productRequired}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="Approximate quantity (e.g. 1000 pcs / 1 FCL)"
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-sm text-[#17202A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1455A0] transition-colors ${
                      errors.quantity ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.quantity && (
                    <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.quantity}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 4: Delivery Location & Product Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="deliveryLocation" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Delivery Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    placeholder="City / Country (e.g. Mumbai, India)"
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-sm text-[#17202A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1455A0] transition-colors ${
                      errors.deliveryLocation ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.deliveryLocation && (
                    <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.deliveryLocation}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="productLink" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Product Link <span className="text-slate-400 lowercase font-normal">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="productLink"
                    name="productLink"
                    value={formData.productLink}
                    onChange={handleInputChange}
                    placeholder="Paste product URL (Alibaba, Amazon, 1688)"
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#17202A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                  />
                </div>
              </div>

              {/* Upload Product Image Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Upload Product Image <span className="text-slate-400 lowercase font-normal">(optional)</span>
                </label>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileChange(e.target.files[0]);
                    }
                  }}
                />

                {formData.imagePreviewUrl ? (
                  <div className="bg-white border border-slate-300 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={formData.imagePreviewUrl}
                        alt="Product preview"
                        className="w-14 h-14 object-cover rounded border border-slate-200"
                      />
                      <div>
                        <span className="text-xs font-medium text-[#0B1F33] block">
                          {formData.imageFile?.name || 'Uploaded Product Image'}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {formData.imageFile ? `${(formData.imageFile.size / 1024).toFixed(1)} KB` : 'Image attached'}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeImage}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors"
                      aria-label="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragActive(true);
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragActive(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        handleFileChange(e.dataTransfer.files[0]);
                      }
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors bg-white ${
                      dragActive ? 'border-[#1455A0] bg-[#1455A0]/5' : 'border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1455A0] block">
                      Click to upload or drag &amp; drop reference photo
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      PNG, JPG, WEBP up to 5MB
                    </span>
                  </div>
                )}
                {errors.image && (
                  <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.image}
                  </span>
                )}
              </div>

              {/* Submit Button & Small Note */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1455A0] hover:bg-[#0B1F33] text-white py-4 rounded-lg font-semibold text-base transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#1455A0]"
                >
                  {isSubmitting ? (
                    <span>Registering Requirement...</span>
                  ) : (
                    <>
                      <span>Submit Requirement</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed">
                  Our team will review your requirement and contact you regarding the next steps.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
