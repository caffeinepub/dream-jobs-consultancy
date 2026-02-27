import { Wrench, GraduationCap, HardHat, Stethoscope, ChefHat, Building, Factory, Hammer } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const jobCategories = [
  {
    category: 'Engineering & Technical',
    icon: Wrench,
    jobs: ['Civil Engineers', 'Mechanical Engineers', 'Electrical Engineers', 'IT Professionals', 'Technicians', 'Supervisors'],
  },
  {
    category: 'Healthcare & Medical',
    icon: Stethoscope,
    jobs: ['Registered Nurses', 'Doctors', 'Medical Technicians', 'Pharmacists', 'Healthcare Assistants', 'Lab Technicians'],
  },
  {
    category: 'Construction & Building',
    icon: Building,
    jobs: ['Site Supervisors', 'Foremen', 'Project Managers', 'Masons', 'Carpenters', 'Welders'],
  },
  {
    category: 'Hospitality & Services',
    icon: ChefHat,
    jobs: ['Chefs', 'Waiters', 'Hotel Staff', 'Cleaners', 'Kitchen Helpers', 'Housekeeping Staff'],
  },
  {
    category: 'Manufacturing & Production',
    icon: Factory,
    jobs: ['Factory Workers', 'Machine Operators', 'Quality Controllers', 'Packers', 'Assembly Workers', 'Production Supervisors'],
  },
  {
    category: 'General Labor',
    icon: HardHat,
    jobs: ['Construction Laborers', 'Warehouse Workers', 'Helpers', 'Maintenance Staff', 'Cleaners', 'General Workers'],
  },
];

export function JobCategoriesSection() {
  return (
    <section id="jobs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Job Categories
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Wide range of opportunities for skilled and unskilled professionals across multiple industries
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {jobCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-light to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-brand-primary/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.jobs.map((job, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-brand-accent mr-2">•</span>
                      <span>{job}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Accordion */}
        <div className="md:hidden max-w-2xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {jobCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-md border border-brand-primary/10">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-3">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-base font-bold text-brand-primary">{category.category}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2">
                      {category.jobs.map((job, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>{job}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-8 shadow-md">
            <h4 className="text-xl font-bold text-brand-primary mb-4">Popular Destinations</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Malaysia', 'Singapore'].map((country) => (
                <span key={country} className="px-4 py-2 bg-white border-2 border-brand-accent text-brand-primary rounded-full text-sm font-semibold hover:bg-brand-accent hover:text-white transition-colors">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

