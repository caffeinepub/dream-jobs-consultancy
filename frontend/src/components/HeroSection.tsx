import { Button } from '@/components/ui/button';
import { MessageCircle, Send } from 'lucide-react';

export function HeroSection() {
  const scrollToApply = () => {
    const element = document.querySelector('#apply');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Hero Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Dream Jobs Consultancy - Build Your Future Abroad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build Your Future Abroad with Confidence
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Your Trusted Partner for Overseas Career Opportunities
            </p>
            
            <div className="space-y-3 text-white/90 text-lg">
              <p className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong className="text-white">Professional</strong> recruitment services with 3 years of experience</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong className="text-white">Verified</strong> job opportunities in UAE, Saudi Arabia, Qatar & more</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong className="text-white">Ethical</strong> and transparent recruitment practices</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong className="text-white">Reliable</strong> support from application to deployment</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToApply}
              >
                <Send className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://wa.me/916363554699', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
