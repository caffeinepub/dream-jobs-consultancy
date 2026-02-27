import { Shield, CheckCircle, Users, FileCheck, Globe, Award, HeadphonesIcon, TrendingUp } from 'lucide-react';

export function WhyTrustUsSection() {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Licensed & Authorized',
      description: 'Fully licensed recruitment agency operating in UAE and India with proper government authorization',
    },
    {
      icon: CheckCircle,
      title: 'Verified Employers',
      description: 'We work only with legitimate, verified companies that meet our strict vetting standards',
    },
    {
      icon: Users,
      title: 'Transparent Process',
      description: 'Clear communication at every stage with no hidden fees or surprise charges',
    },
    {
      icon: FileCheck,
      title: 'Legal Compliance',
      description: 'All placements follow international labor laws and ethical recruitment practices',
    },
    {
      icon: Globe,
      title: 'Proven Track Record',
      description: 'Successfully placed hundreds of candidates in reputable companies across the Middle East',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous screening ensures job offers match your skills, experience, and expectations',
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'Dedicated support team available before, during, and after your placement',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth Focus',
      description: 'We prioritize opportunities that offer genuine career advancement and professional development',
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Trust Us?
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Your career and future are important. Here's why thousands of candidates choose Dream Jobs Consultancy
            </p>
          </div>

          {/* Trust Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-4">
                  <point.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Success in Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">
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
