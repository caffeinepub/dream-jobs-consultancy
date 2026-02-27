import { MapPin, Award } from 'lucide-react';

export function OurOfficesSection() {
  return (
    <section id="offices" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Our Offices
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Serving you from strategic locations in UAE and India
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src="/assets/generated/office-location.dim_800x400.jpg"
              alt="Dream Jobs Consultancy Office Locations"
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* UAE Office */}
            <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-8 shadow-lg border-2 border-brand-primary/20">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇦🇪</span>
                <h3 className="text-2xl font-bold text-brand-primary">UAE Office</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold text-lg">Vimak Consultancy FZE</p>
                <p className="flex items-start text-sm">
                  <MapPin className="h-5 w-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    C1-1F-SF10239<br />
                    Ajman Free Zone C1 Building<br />
                    Ajman Free Zone, UAE
                  </span>
                </p>
                <p className="flex items-center font-semibold text-brand-primary text-sm">
                  <Award className="h-5 w-5 mr-2" />
                  License No.: 40157
                </p>
              </div>
            </div>

            {/* India Office - Bengaluru */}
            <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-8 shadow-lg border-2 border-brand-primary/20">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇮🇳</span>
                <h3 className="text-2xl font-bold text-brand-primary">India Office</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold text-lg">Professional Dream Jobs Consultancy</p>
                <p className="flex items-start text-sm">
                  <MapPin className="h-5 w-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Bengaluru – 560001<br />
                    Karnataka, India
                  </span>
                </p>
              </div>
            </div>

            {/* Ahmedabad Office */}
            <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-8 shadow-lg border-2 border-brand-primary/20">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇮🇳</span>
                <h3 className="text-2xl font-bold text-brand-primary">Ahmedabad</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold text-lg">Dream Jobs Consultancy</p>
                <p className="flex items-start text-sm">
                  <MapPin className="h-5 w-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Ahmedabad Office<br />
                    Gujarat, India
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
