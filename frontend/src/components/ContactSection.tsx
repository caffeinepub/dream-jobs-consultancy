import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Begin Your Overseas Journey Today
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 font-semibold">
            Dream Jobs Consultancy
          </p>
          <p className="text-gray-500">Licensed Overseas Recruitment &amp; Placement Services</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold text-brand-primary mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">🇮🇳 India Office</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Dream Jobs Consultancy<br />
                        Bengaluru – 560001<br />
                        Karnataka, India
                      </p>
                      <a href="tel:+916363554699" className="text-brand-primary hover:underline font-semibold mt-1 block">
                        +91 63635 54699
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">🇦🇪 UAE Office</h4>
                      <a href="tel:+971542141042" className="text-brand-primary hover:underline font-semibold block">
                        +971 54 214 1042
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">📧 Email</h4>
                      <a href="mailto:ddremjob@gmail.com" className="text-brand-primary hover:underline font-semibold">
                        ddremjob@gmail.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">WhatsApp Us</h4>
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold w-full"
                        onClick={() => setShowWhatsAppModal(true)}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Connect on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Image + Quick Contact */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/generated/contact-support.dim_600x400.png"
                  alt="Dream Jobs Consultancy - Customer Support"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/generated/trust-handshake.dim_600x400.jpg';
                  }}
                />
              </div>

              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Quick Contact
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                    <span className="text-xl">🇮🇳</span>
                    <div>
                      <p className="text-white/70 text-xs">India Office</p>
                      <a href="tel:+916363554699" className="text-white font-semibold hover:underline">+91 63635 54699</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                    <span className="text-xl">🇦🇪</span>
                    <div>
                      <p className="text-white/70 text-xs">UAE Office</p>
                      <a href="tel:+971542141042" className="text-white font-semibold hover:underline">+971 54 214 1042</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                    <span className="text-xl">📧</span>
                    <div>
                      <p className="text-white/70 text-xs">Email</p>
                      <a href="mailto:ddremjob@gmail.com" className="text-white font-semibold hover:underline">ddremjob@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
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
