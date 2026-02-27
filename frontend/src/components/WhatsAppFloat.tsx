import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/916363554699"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-16 h-16 bg-brand-accent hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110">
        <MessageCircle className="h-8 w-8 text-white" />
      </div>
    </a>
  );
}

