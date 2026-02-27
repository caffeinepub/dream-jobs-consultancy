import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, X, Phone } from 'lucide-react';

export function HeroSection() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const scrollToApply = () => {
    const element = document.querySelector('#apply');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[600px] flex items-center">
      {/* Hero Background Image with Blue Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-airport.dim_1920x1080.png"
          alt="Dream Jobs Consultancy - Empowering Careers Beyond Borders"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/generated/hero-banner.dim_1200x600.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/75 to-blue-800/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <div className="inline-block bg-brand-accent/20 border border-brand-accent/40 rounded-full px-4 py-1 text-brand-accent text-sm font-semibold mb-2">
              🌍 Gulf Recruitment Specialists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Empowering Careers<br />
              <span className="text-yellow-400">Beyond Borders</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Premium Overseas Recruitment for Gulf Countries
            </p>

            <p className="text-white/80 text-base md:text-lg">
              Connecting skilled professionals from India with verified employers across UAE, Saudi Arabia, Qatar, Oman, Kuwait &amp; Bahrain.
            </p>

            <div className="space-y-3 text-white/90 text-base md:text-lg">
              <p className="flex items-center gap-2">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm flex-shrink-0">✔</span>
                <span><strong className="text-white">Trusted &amp; Verified Employers</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm flex-shrink-0">✔</span>
                <span><strong className="text-white">Structured &amp; Transparent Recruitment</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm flex-shrink-0">✔</span>
                <span><strong className="text-white">Professional Visa &amp; Documentation Support</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm flex-shrink-0">✔</span>
                <span><strong className="text-white">End-to-End Deployment Assistance</strong></span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToApply}
              >
                <Send className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => setShowWhatsAppModal(true)}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowWhatsAppModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full z-10">
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary">WhatsApp Us</h3>
              <p className="text-gray-500 text-sm mt-1">Choose your preferred office to connect</p>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/916363554699"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all group"
                onClick={() => setShowWhatsAppModal(false)}
              >
                <span className="text-2xl">🇮🇳</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">India Office</p>
                  <p className="text-green-600 font-semibold">+91 63635 54699</p>
                </div>
                <Phone className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/971542141042"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all group"
                onClick={() => setShowWhatsAppModal(false)}
              >
                <span className="text-2xl">🇦🇪</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">UAE Office</p>
                  <p className="text-green-600 font-semibold">+971 54 214 1042</p>
                </div>
                <Phone className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
