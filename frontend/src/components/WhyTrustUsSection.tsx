import { Shield, CheckCircle, Users, FileCheck, Globe, Award, HeadphonesIcon, TrendingUp } from 'lucide-react';

export function WhyTrustUsSection() {
  const trustPoints = [
    {
      icon: CheckCircle,
      title: 'Verified International Employers',
      description: 'We work only with legitimate, verified companies across the Gulf that meet our strict vetting standards.',
    },
    {
      icon: Shield,
      title: 'Transparent & Ethical Processing',
      description: 'Clear communication at every stage with no hidden fees, surprise charges, or unethical practices.',
    },
    {
      icon: FileCheck,
      title: 'Professional Documentation Support',
      description: 'Expert assistance with all visa, medical, and legal documentation required for overseas deployment.',
    },
    {
      icon: TrendingUp,
      title: 'Fast Interview Coordination',
      description: 'We quickly coordinate direct interviews between shortlisted candidates and verified Gulf employers.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Candidate Assistance',
      description: 'Our dedicated support team is available before, during, and after your placement for any assistance.',
    },
    {
      icon: Globe,
      title: 'Strong Employer Network Across Gulf',
      description: 'Extensive network of verified employers across UAE, Saudi Arabia, Qatar, Oman, Kuwait & Bahrain.',
    },
  ];

  const metrics = [
    { value: '500+', label: 'Successful Placements' },
    { value: '50+', label: 'Partner Companies' },
    { value: '98%', label: 'Candidate Satisfaction' },
    { value: '3+', label: 'Years of Excellence' },
  ];

  return (
    <section id="why-trust-us" className="py-16 md:py-24 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Dream Jobs Consultancy?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6" />
          </div>

          {/* Expertise Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-10 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Recruitment Specialization</h3>
            <p className="text-white/90 leading-relaxed max-w-3xl mx-auto">
              We provide manpower solutions for <strong className="text-yellow-300">Household Staff</strong> (Drivers, Cooks, House Maids, House Boys), <strong className="text-yellow-300">Hospitality Professionals</strong> (Waiters, Cleaners, Supervisors), <strong className="text-yellow-300">Skilled &amp; Semi-Skilled Workers</strong>, and <strong className="text-yellow-300">Security Personnel</strong>. Each candidate undergoes structured screening to maintain quality placement standards.
            </p>
          </div>

          {/* Trust Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <point.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">✔ {point.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center mb-10">
            <p className="text-xl font-semibold text-yellow-300 italic">
              "Integrity and professionalism define our services."
            </p>
          </div>

          {/* Success Metrics */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Success in Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white/90 text-sm font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
