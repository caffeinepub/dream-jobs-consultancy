import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Contact & WhatsApp
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Get in touch with us today to start your overseas career journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
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
                      <h4 className="font-semibold text-gray-900 mb-1">India Office</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Professional Dream Jobs Consultancy<br />
                        Bengaluru – 560001<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Primary Contact</h4>
                      <a href="tel:+916363554699" className="text-brand-primary hover:underline text-lg font-semibold">
                        +91 63635 54699
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Available 9 AM - 6 PM (Mon-Sat)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:ddremjob@gmail.com" className="text-brand-primary hover:underline">
                        ddremjob@gmail.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-700">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-6 text-white">
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-bold">Salman Khan - Operations Head</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  For all queries, please contact Salman Khan via WhatsApp or Email. Our team will assist you promptly with your overseas career needs.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <span className="mr-2">🇮🇳</span>
                    <a href="tel:+916363554699" className="hover:underline">+91 63635 54699</a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">🇦🇪</span>
                    <a href="tel:+971542141042" className="hover:underline">+971 54 214 1042</a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a href="tel:+919686005070" className="hover:underline">+91 96860 05070</a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    <a href="mailto:ddremjob@gmail.com" className="hover:underline">ddremjob@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Buttons */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-accent/20">
                <h3 className="text-2xl font-bold text-brand-primary mb-6">Connect on WhatsApp</h3>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-accent to-green-600 rounded-xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-2 flex items-center">
                      <span className="mr-2">🇮🇳</span> India Office
                    </h4>
                    <p className="mb-4 text-white/90 text-sm">
                      Chat with us on WhatsApp for immediate assistance
                    </p>
                    <Button
                      size="lg"
                      className="bg-white text-brand-accent hover:bg-white/90 w-full font-bold"
                      onClick={() => window.open('https://wa.me/916363554699', '_blank')}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      WhatsApp: +91 63635 54699
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-brand-accent to-green-600 rounded-xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-2 flex items-center">
                      <span className="mr-2">🇦🇪</span> UAE Office
                    </h4>
                    <p className="mb-4 text-white/90 text-sm">
                      Connect with our UAE operations team directly
                    </p>
                    <Button
                      size="lg"
                      className="bg-white text-brand-accent hover:bg-white/90 w-full font-bold"
                      onClick={() => window.open('https://wa.me/971542141042', '_blank')}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      WhatsApp: +971 54 214 1042
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/generated/trust-handshake.dim_600x400.jpg"
                  alt="Trust and Partnership"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
