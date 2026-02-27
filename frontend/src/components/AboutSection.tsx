import { Building2, Shield, Target, Globe } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            About Dream Jobs Consultancy
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            A professionally managed overseas recruitment firm specializing in Gulf manpower placement
          </p>
        </div>

        {/* Image + Text Layout */}
        <div className="max-w-6xl mx-auto mb-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/generated/about-meeting.dim_800x600.png"
                alt="Dream Jobs Consultancy - Professional Recruitment Office"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/generated/trust-handshake.dim_600x400.jpg';
                }}
              />
            </div>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                <strong className="text-brand-primary">Dream Jobs Consultancy</strong> is a professionally managed overseas recruitment firm specializing in Gulf manpower placement. We are committed to delivering <strong>reliable</strong>, <strong>ethical</strong>, and structured recruitment services aligned with international standards.
              </p>
              <p>
                Our recruitment team works closely with both candidates and employers to ensure the right talent is matched with the right opportunity. From screening to deployment, every step is handled with <strong>precision</strong>, <strong>transparency</strong>, and professionalism.
              </p>
              <p className="text-brand-primary font-semibold text-lg italic border-l-4 border-brand-accent pl-4">
                "We believe overseas employment is not just a job — it is a life-changing opportunity."
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-brand-primary/10">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">3+ Years</h3>
            <p className="text-gray-600 text-sm">Proven track record in overseas recruitment</p>
          </div>

          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-brand-primary/10">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">6 Gulf Countries</h3>
            <p className="text-gray-600 text-sm">UAE, Saudi Arabia, Qatar, Oman, Kuwait &amp; Bahrain</p>
          </div>

          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-brand-primary/10">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">5000+ Placements</h3>
            <p className="text-gray-600 text-sm">Successfully placed candidates worldwide</p>
          </div>

          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-brand-primary/10">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">Licensed</h3>
            <p className="text-gray-600 text-sm">Registered &amp; authorized consultancy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
