import { Phone, Mail, MessageCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export function ManagementSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Management Team
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Expert leadership in overseas recruitment and job placement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-light to-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-brand-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-brand-primary mb-2">Salman Khan</h3>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                Consultancy Manager / Operations Head
              </p>
              <p className="text-gray-600 italic">
                Expert in Overseas Recruitment & Job Placement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                    <SiWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2">🇮🇳</span> India Office
                    </p>
                    <a href="tel:+916363554699" className="text-brand-primary hover:underline font-semibold text-lg">
                      +91 63635 54699
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/916363554699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                    <SiWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2">🇦🇪</span> UAE Office
                    </p>
                    <a href="tel:+971542141042" className="text-brand-primary hover:underline font-semibold text-lg">
                      +971 54 214 1042
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/971542141042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2">📞</span> Additional Contact
                    </p>
                    <a href="tel:+919686005070" className="text-brand-primary hover:underline font-semibold text-lg">
                      +91 96860 05070
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2">📧</span> Email
                    </p>
                    <a href="mailto:ddremjob@gmail.com" className="text-brand-primary hover:underline font-semibold text-sm break-all">
                      ddremjob@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

