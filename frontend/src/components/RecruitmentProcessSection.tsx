import { FileText, Search, Video, CheckCircle, Stethoscope, Plane } from 'lucide-react';

export function RecruitmentProcessSection() {
  const steps = [
    {
      icon: FileText,
      title: 'Application & Document Submission',
      description: 'Submit your CV and required documents. Our team reviews your qualifications, experience, and career goals to understand your unique strengths.',
    },
    {
      icon: Search,
      title: 'Screening & Shortlisting',
      description: 'Candidates undergo structured screening to match skills with verified employer requirements. Only qualified candidates are shortlisted.',
    },
    {
      icon: Video,
      title: 'Direct Employer Interview',
      description: 'We coordinate direct interviews between shortlisted candidates and verified Gulf employers. Receive personalized coaching for success.',
    },
    {
      icon: CheckCircle,
      title: 'Selection & Official Offer Letter',
      description: 'Selected candidates receive an official offer letter. We ensure all terms are fair, transparent, and meet your expectations before acceptance.',
    },
    {
      icon: Stethoscope,
      title: 'Medical & Visa Processing',
      description: 'Complete assistance with medical fitness tests, visa applications, and all legal formalities. We handle the paperwork so you can focus on preparation.',
    },
    {
      icon: Plane,
      title: 'Deployment & Travel Coordination',
      description: 'Travel arrangements, pre-departure briefing, and continuous support until you successfully reach your destination and start your new role.',
    },
  ];

  return (
    <section id="recruitment-process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Step-by-Step Placement System
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, structured journey from application to deployment, designed with your success in mind
            </p>
          </div>

          {/* Travel Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img
              src="/assets/generated/process-travel.dim_800x500.png"
              alt="Recruitment Process - Travel & Deployment"
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/generated/recruitment-process.dim_800x300.jpg';
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-brand-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mb-4 ml-6">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Closing Note */}
          <div className="text-center bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white shadow-xl">
            <p className="text-xl font-semibold">
              ✅ We ensure smooth and secure processing until successful placement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
