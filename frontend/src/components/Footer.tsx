import { Heart, Mail, Phone, Award } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { socialLinks } from '@/config/socialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/generated/dream-jobs-logo.dim_200x200.png"
                alt="Dream Jobs Consultancy"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Dream Jobs</h3>
                <p className="text-xs text-gray-400">Consultancy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Your trusted partner for overseas careers. Building bridges between talent and opportunity.
            </p>
            <div className="flex items-center text-xs text-gray-400">
              <Award className="h-4 w-4 text-brand-accent mr-1" />
              <span>Licensed & Authorized</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Jobs', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const href = `#${link.toLowerCase()}`;
                      const element = document.querySelector(href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-brand-accent transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Offices</h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">🇦🇪</span>
                  <p className="text-sm font-semibold text-gray-300">UAE Office</p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Vimak Consultancy FZE<br />
                  C1-1F-SF10239, Ajman Free Zone<br />
                  <span className="text-brand-accent">License No.: 40157</span>
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">🇮🇳</span>
                  <p className="text-sm font-semibold text-gray-300">India Office</p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Professional Dream Jobs Consultancy<br />
                  Bengaluru – 560001<br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start text-sm">
                <Phone className="h-4 w-4 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+916363554699" className="text-gray-400 hover:text-brand-accent transition-colors block">
                    +91 63635 54699
                  </a>
                  <a href="tel:+971542141042" className="text-gray-400 hover:text-brand-accent transition-colors block">
                    +971 54 214 1042
                  </a>
                </div>
              </li>
              <li className="flex items-start text-sm">
                <Mail className="h-4 w-4 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:ddremjob@gmail.com" className="text-gray-400 hover:text-brand-accent transition-colors">
                  ddremjob@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-3">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-brand-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-brand-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <SiX className="h-5 w-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-brand-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-brand-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Dream Jobs Consultancy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline ml-1"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
