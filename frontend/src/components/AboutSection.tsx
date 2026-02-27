import { Building2, Shield, Target, Globe } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Building bridges between talent and opportunity with 3 years of dedicated service
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Dream Jobs Consultancy is a <strong>professional</strong>, <strong>verified</strong>, and <strong>ethical</strong> overseas recruitment agency dedicated to connecting talented individuals with life-changing career opportunities abroad. With 3 years of proven experience in international manpower recruitment, we have successfully placed thousands of candidates in reputable companies across the Gulf region and beyond.
            </p>
            <p>
              Operating from our offices in <span className="inline-flex items-center"><span className="mr-1">🇦🇪</span> UAE</span> and <span className="inline-flex items-center"><span className="mr-1">🇮🇳</span> India</span>, we offer a unique combination of local expertise and global reach. Our team of experienced recruitment professionals understands the complexities of international employment and works tirelessly to ensure a smooth, transparent, and <strong>reliable</strong> process for every candidate.
            </p>
            <p>
              As a <strong>Registered & Authorized Consultancy</strong> (License No.: 40157 in UAE), we are committed to maintaining the highest standards of integrity and professionalism. We believe in building long-term relationships based on trust, transparency, and mutual success.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-brand-primary/10">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">3+ Years</h3>
            <p className="text-gray-600 text-sm">
              Proven track record in overseas recruitment
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-brand-primary/10">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">Global Reach</h3>
            <p className="text-gray-600 text-sm">
              Offices in UAE and India serving worldwide
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-brand-primary/10">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">5000+ Placements</h3>
            <p className="text-gray-600 text-sm">
              Successfully placed candidates worldwide
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-brand-primary/10">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">Licensed</h3>
            <p className="text-gray-600 text-sm">
              Registered & authorized consultancy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

