import { FileText, Search, Video, Plane, CheckCircle, HeadphonesIcon } from 'lucide-react';

export function RecruitmentProcessSection() {
  const steps = [
    {
      icon: FileText,
      title: 'Application & Profile Review',
      description: 'Submit your CV and complete your profile. Our team reviews your qualifications, experience, and career goals to understand your unique strengths.',
    },
    {
      icon: Search,
      title: 'Job Matching & Verification',
      description: 'We match you with verified employers whose requirements align with your skills. Every opportunity is vetted for legitimacy and quality.',
    },
    {
      icon: Video,
      title: 'Interview Preparation & Coordination',
      description: 'Receive personalized interview coaching and guidance. We coordinate with employers and prepare you for success at every stage.',
    },
    {
      icon: CheckCircle,
      title: 'Offer Evaluation & Acceptance',
      description: 'Review job offers with our expert guidance. We ensure terms are fair, transparent, and meet your expectations before acceptance.',
    },
    {
      icon: FileText,
      title: 'Documentation & Visa Processing',
      description: 'Complete assistance with all required documents, visa applications, and legal formalities. We handle the paperwork so you can focus on preparation.',
    },
    {
      icon: Plane,
      title: 'Deployment & Ongoing Support',
      description: 'Travel arrangements, pre-departure briefing, and continuous support even after you start your new role abroad.',
    },
  ];

  return (
    <section id="recruitment-process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Our Comprehensive Recruitment Process
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, step-by-step journey from application to deployment, designed with your success in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-brand-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mb-4 ml-6">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-center text-white">
            <HeadphonesIcon className="h-12 w-12 mx-auto mb-4 text-brand-accent" />
            <h3 className="text-2xl font-bold mb-3">Support at Every Step</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our dedicated team is with you throughout the entire process and beyond. From your first application to settling into your new role, we're here to ensure your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
