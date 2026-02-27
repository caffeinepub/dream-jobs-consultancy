import { AlertCircle, Info, Shield, FileText } from 'lucide-react';

export function DisclaimerSection() {
  return (
    <section id="disclaimer" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Important Information
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto" />
          </div>

          <div className="space-y-6">
            {/* Job Placements */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-brand-accent shadow-sm">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-brand-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2">Job Placements & Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All job opportunities presented by Dream Jobs Consultancy are from verified employers. While we make every effort to ensure accuracy, final employment terms are subject to employer confirmation. We recommend candidates verify all details during the interview process.
                  </p>
                </div>
              </div>
            </div>

            {/* Fees & Charges */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-brand-accent shadow-sm">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-brand-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2">Service Fees & Transparency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our service fees are clearly communicated upfront with no hidden charges. Fees cover recruitment services, documentation assistance, and candidate support. Visa processing fees and government charges are separate and payable directly to relevant authorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Visa Processing */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-brand-accent shadow-sm">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-brand-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2">Visa Processing & Approval</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Visa approval is subject to the immigration authorities of the destination country. While we provide comprehensive documentation support and guidance, final visa decisions rest with government authorities. Processing times may vary based on individual circumstances and country-specific regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Compliance */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-brand-accent shadow-sm">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-brand-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2">Legal Compliance & Ethics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dream Jobs Consultancy operates in full compliance with international labor laws and ethical recruitment standards. We are licensed in UAE (License No. 40157) and India. All our practices adhere to fair recruitment principles and candidate protection guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Candidate Responsibility */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Candidate Responsibility</h3>
              <p className="text-white/90 leading-relaxed mb-3">
                Candidates are responsible for providing accurate information, maintaining valid documentation, and complying with all legal requirements of their destination country. We strongly advise candidates to:
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Verify all employment terms before acceptance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep copies of all documents and correspondence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Report any concerns or discrepancies immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Understand their rights and responsibilities as overseas workers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              For questions or concerns, please contact us at{' '}
              <a href="mailto:ddremjob@gmail.com" className="text-brand-accent hover:underline font-medium">
                ddremjob@gmail.com
              </a>
              {' '}or call{' '}
              <a href="tel:+916363554699" className="text-brand-accent hover:underline font-medium">
                +91 63635 54699
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
