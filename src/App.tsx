import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { SERVICES, SERVICE_OPTIONS, CONTACT_INFO } from './data/servicesData.ts';
import { HeroIllustration } from './components/illustrations/HeroIllustration.tsx';
import {
  WebDevIllustration,
  MobileAppIllustration,
  UiUxIllustration,
  SeoIllustration,
  BrandingIllustration
} from './components/illustrations/ServiceIllustrations.tsx';
import { AboutIllustration } from './components/illustrations/AboutIllustration.tsx';
import {
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  AlertCircle,
  Copy
} from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(SERVICE_OPTIONS[0]);
  const [name, setName] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [errors, setErrors] = useState<{ name?: string; details?: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollTo('contact');
  };

  const validate = () => {
    const errs: { name?: string; details?: string } = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!projectDetails.trim()) errs.details = 'Please enter project details or notes';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Primary Action: Send via WhatsApp
  // Pre-filled encoded message: I am [Name], inquiring about your [Service] service.\n\n[Project Details / Note]
  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `I am ${name.trim()}, inquiring about your ${selectedService} service.\n\n${projectDetails.trim()}`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348148146268?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Secondary Action: Send via Email client
  const handleEmailSend = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `New Project Inquiry - ${selectedService}`;
    const body = `I am ${name.trim()}, inquiring about your ${selectedService} service.\n\n${projectDetails.trim()}`;
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const renderServiceIllustration = (id: string) => {
    switch (id) {
      case 'web-design-development':
        return <WebDevIllustration className="w-full h-36 object-contain" />;
      case 'mobile-app-development':
        return <MobileAppIllustration className="w-full h-36 object-contain" />;
      case 'ui-ux-design':
        return <UiUxIllustration className="w-full h-36 object-contain" />;
      case 'seo-optimization':
        return <SeoIllustration className="w-full h-36 object-contain" />;
      case 'branding-design':
        return <BrandingIllustration className="w-full h-36 object-contain" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-[#ADF802] selection:text-black">
      {/* Header */}
      <Header onNavigateToContact={() => scrollTo('contact')} />

      <main>
        {/* ========================================================= */}
        {/* HERO SECTION (#hero)                                     */}
        {/* ========================================================= */}
        <section
          id="hero"
          className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-neutral-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Headlines & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.12]">
                  Building High-Performance Websites &amp; Apps That Drive Real Growth
                  <span className="text-[#ADF802]">.</span>
                </h1>

                <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
                  We help startups and businesses build fast, scalable, and SEO-optimized digital products that turn visitors into loyal customers.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-[#ADF802] rounded-full transition-all duration-200 hover:bg-[#9ee000] hover:shadow-[0_0_25px_rgba(173,248,2,0.6)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollTo('services')}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 rounded-full transition-colors border border-neutral-200/60 cursor-pointer"
                  >
                    <span>Explore Services</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Illustration */}
              <div className="lg:col-span-5 relative">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SERVICES SECTION (#services)                              */}
        {/* ========================================================= */}
        <section id="services" className="py-20 md:py-28 border-b border-neutral-100 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header: Title and Subtitle only (no eyebrow or banners) */}
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                What We Do
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-neutral-600 leading-relaxed">
                High-performance digital solutions engineered to scale your business.
              </p>
            </div>

            {/* Service Cards Grid (5 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-neutral-200/80 p-7 flex flex-col justify-between transition-all duration-300 hover:border-black/30 hover:shadow-xl"
                >
                  <div>
                    {/* Service Illustration */}
                    <div className="mb-6 bg-neutral-50 rounded-xl p-4 flex items-center justify-center border border-neutral-100 h-44">
                      {renderServiceIllustration(service.id)}
                    </div>

                    <h3 className="text-xl font-bold text-black mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Direct action button that scrolls down to #contact and auto-selects service */}
                  <div className="mt-8 pt-4 border-t border-neutral-100">
                    <button
                      type="button"
                      onClick={() => handleSelectServiceFromCard(service.title)}
                      className="w-full inline-flex items-center justify-center py-3 px-5 rounded-full text-xs font-bold bg-[#ADF802] text-black hover:bg-[#9ee000] hover:shadow-sm transition-all cursor-pointer"
                    >
                      <span>Inquire About {service.title}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ABOUT SECTION (#about)                                   */}
        {/* ========================================================= */}
        <section id="about" className="py-20 md:py-28 border-b border-neutral-100 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Story & Mission */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                  About Cynabyte Tech
                </h2>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                  Engineering Digital Excellence for Modern Businesses
                </h3>

                <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Founded by{' '}
                    <a
                      href={CONTACT_INFO.founderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-black underline decoration-[#ADF802] decoration-4 underline-offset-4 hover:text-neutral-700 transition-colors inline-flex items-center"
                    >
                      <span>Samuel Udeala</span>
                      <ExternalLink className="ml-1 w-4 h-4 text-neutral-500" />
                    </a>
                    , Cynabyte Tech was built to help startups and businesses build fast, scalable, and SEO-optimized websites and applications that drive real results.
                  </p>

                  <p>
                    We bridge the gap between creative design and robust engineering. Whether you are launching a brand-new startup or scaling an existing enterprise, our team delivers clean code, modern user experiences, and high-performance digital products tailored to your goals.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-black bg-[#ADF802] rounded-full transition-all duration-200 hover:bg-[#9ee000] hover:shadow-[0_0_20px_rgba(173,248,2,0.6)] hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Work With Us</span>
                    <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Right Column: About Illustration */}
              <div className="lg:col-span-5">
                <AboutIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CONTACT SECTION (#contact)                               */}
        {/* ========================================================= */}
        <section id="contact" className="py-20 md:py-28 scroll-mt-12 bg-neutral-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header: Title and Subtitle only (no eyebrow or banners) */}
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                Get In Touch
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Have a project in mind? Let&apos;s talk about how we can help.
              </p>
            </div>

            {/* Split Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Direct Contacts & Social Links */}
              <div className="lg:col-span-5 space-y-8 bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/80 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Direct Contacts
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Reach out directly through any of our official channels.
                  </p>
                </div>

                {/* Direct Action Channels */}
                <div className="space-y-3">
                  {/* Phone / WhatsApp */}
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors group"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 font-medium">Phone / WhatsApp</div>
                        <div className="text-sm font-bold text-black">{CONTACT_INFO.phone}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Primary Email */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center space-x-3.5 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#ADF802]/25 text-black flex items-center justify-center">
                        <Mail className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 font-medium">Email</div>
                        <div className="text-sm font-bold text-black group-hover:underline">
                          {CONTACT_INFO.email}
                        </div>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 text-neutral-400 hover:text-black rounded transition-colors text-xs"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <span className="text-xs font-bold text-emerald-600">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Socials */}
                <div className="pt-2 border-t border-neutral-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    Social Channels
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/cynabytetech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-900 transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                        <span>LinkedIn: Cynabyte Tech</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-black" />
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href="https://x.com/cynabytetech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-900 transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <Twitter className="w-4 h-4 text-black" />
                        <span>X: @cynabytetech</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-black" />
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://tiktok.com/@cynabytetech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-900 transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 font-black text-xs flex items-center justify-center text-black">
                          TT
                        </span>
                        <span>TikTok: @cynabytetech</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-black" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/cynabytetech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-900 transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <Instagram className="w-4 h-4 text-pink-600" />
                        <span>Instagram: @cynabytetech</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-black" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/80 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black">
                    Send an Inquiry
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Fill in the details below to start a conversation with us.
                  </p>
                </div>

                <form onSubmit={handleWhatsAppSend} className="space-y-5">
                  {/* Field 1: Name */}
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-black placeholder:text-neutral-400 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 bg-rose-50/20'
                          : 'border-neutral-300 focus:border-black focus:ring-1 focus:ring-black'
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Field 2: Service Selector */}
                  <div>
                    <label htmlFor="form-service" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Service <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-black bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                      required
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field 3: Project Details / Note */}
                  <div>
                    <label htmlFor="form-details" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Project Details / Note <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="form-details"
                      rows={4}
                      value={projectDetails}
                      onChange={(e) => {
                        setProjectDetails(e.target.value);
                        if (errors.details) setErrors((prev) => ({ ...prev, details: undefined }));
                      }}
                      placeholder="Tell us about your project, timeline, and goals..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-black placeholder:text-neutral-400 focus:outline-none transition-colors resize-y ${
                        errors.details
                          ? 'border-rose-500 bg-rose-50/20'
                          : 'border-neutral-300 focus:border-black focus:ring-1 focus:ring-black'
                      }`}
                      required
                    />
                    {errors.details && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.details}
                      </p>
                    )}
                  </div>

                  {/* Form Action Buttons */}
                  <div className="pt-2 space-y-3">
                    {/* Primary Button: Send via WhatsApp */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center py-4 px-6 rounded-full font-bold text-sm text-black bg-[#ADF802] hover:bg-[#9ee000] hover:shadow-[0_0_20px_rgba(173,248,2,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <MessageSquare className="mr-2 w-4 h-4 stroke-[2.5]" />
                      <span>Send via WhatsApp</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>

                    {/* Secondary Button: Email client trigger */}
                    <button
                      type="button"
                      onClick={handleEmailSend}
                      className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full font-bold text-sm text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors cursor-pointer"
                    >
                      <Mail className="mr-2 w-4 h-4 text-neutral-600" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
