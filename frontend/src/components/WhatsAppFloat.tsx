import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

export function WhatsAppFloat() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110">
          <MessageCircle className="h-8 w-8 text-white" />
        </div>
      </button>

      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full z-10 mb-4 sm:mb-0">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-primary">WhatsApp Us</h3>
              <p className="text-gray-500 text-sm">Choose your preferred office</p>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/916363554699"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all group"
                onClick={() => setShowModal(false)}
              >
                <span className="text-2xl">🇮🇳</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">India Office</p>
                  <p className="text-green-600 font-semibold text-sm">+91 63635 54699</p>
                </div>
                <Phone className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/971542141042"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all group"
                onClick={() => setShowModal(false)}
              >
                <span className="text-2xl">🇦🇪</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">UAE Office</p>
                  <p className="text-green-600 font-semibold text-sm">+971 54 214 1042</p>
                </div>
                <Phone className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
