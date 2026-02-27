import { Briefcase, FileCheck, Video, Users, FileText, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Overseas Job Placement',
    description: 'Comprehensive talent acquisition for skilled and unskilled positions across various industries and countries worldwide.',
  },
  {
    icon: FileCheck,
    title: 'CV Enhancement',
    description: 'Professional CV writing and optimization services to make your profile stand out to international employers.',
  },
  {
    icon: Video,
    title: 'Interview Preparation',
    description: 'Expert coaching and mock interviews to help you confidently face employer interviews and secure your dream job.',
  },
  {
    icon: Users,
    title: 'Employer Coordination',
    description: 'Direct liaison with international employers to ensure smooth recruitment processes and perfect job matches.',
  },
  {
    icon: FileText,
    title: 'Documentation Guidance',
    description: 'Complete support with visa processing, attestation, medical certificates, and all required documentation.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Candidate Support',
    description: 'Continuous assistance from registration to deployment, including pre-departure orientation and post-arrival support.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Comprehensive recruitment solutions tailored to your career aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-accent"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

