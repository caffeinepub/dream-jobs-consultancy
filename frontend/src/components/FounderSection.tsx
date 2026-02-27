import { Quote } from 'lucide-react';

export function FounderSection() {
  return (
    <section id="founder" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Founder & CEO
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Leadership with vision, integrity, and 3 years of dedicated experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Quote Box - Left Side */}
            <div className="order-2 md:order-1">
              <div className="bg-brand-primary rounded-2xl p-8 md:p-10 shadow-xl text-white relative">
                <Quote className="absolute top-6 right-6 h-16 w-16 text-white/20" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Basheer Ahmed</h3>
                  <p className="text-white/90 font-semibold mb-6 text-lg">Founder & CEO</p>
                  <p className="text-white/90 mb-4 text-sm">3 Years of Experience in International Recruitment</p>
                  
                  <div className="space-y-4 text-white/95 leading-relaxed">
                    <p className="text-lg italic">
                      "Your success is our success. Together, we build dreams into reality."
                    </p>
                    <p>
                      With 3 years of dedicated experience in international recruitment and manpower consultancy, I founded Dream Jobs Consultancy with a simple yet powerful vision: to create a bridge between talented individuals and life-changing career opportunities abroad.
                    </p>
                    <p>
                      Having witnessed the transformative power of overseas employment firsthand, I am deeply committed to ensuring that every candidate who walks through our doors receives ethical, transparent, and professional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo - Right Side */}
            <div className="order-1 md:order-2">
              <div className="relative flex justify-center">
                <div className="rounded-full overflow-hidden shadow-2xl w-72 h-72 md:w-80 md:h-80">
                  <img
                    src="/assets/unnamed-1.jpg"
                    alt="Basheer Ahmed - Founder & CEO of Dream Jobs Consultancy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
