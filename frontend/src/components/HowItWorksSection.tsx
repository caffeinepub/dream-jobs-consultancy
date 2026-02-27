import { FileText, Search, Video, Plane } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit CV',
    description: 'Share your resume and documents with us',
  },
  {
    icon: Search,
    title: 'Matching',
    description: 'We find the perfect job for your profile',
  },
  {
    icon: Video,
    title: 'Interview',
    description: 'Connect with employers and ace the interview',
  },
  {
    icon: Plane,
    title: 'Deployment',
    description: 'Complete documentation and fly to your new job',
  },
];

export function HowItWorksSection() {
  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 mb-4">
            A streamlined process to make your overseas career dreams come true
          </p>
          <div className="flex items-center justify-center space-x-4 text-brand-primary font-bold text-lg">
            <span>Simple</span>
            <span className="text-brand-accent">|</span>
            <span>Transparent</span>
            <span className="text-brand-accent">|</span>
            <span>Reliable</span>
          </div>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary" style={{ top: '80px' }} />
            
            <div className="grid md:grid-cols-4 gap-8 md:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon Circle */}
                      <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-2 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-20">
                        {index + 1}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-brand-primary mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md text-center border-2 border-brand-accent/20">
          <p className="text-lg text-gray-700">
            <strong className="text-brand-primary">Average Timeline:</strong> The complete process typically takes 4-8 weeks, depending on the destination country and job requirements. We keep you informed at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}

