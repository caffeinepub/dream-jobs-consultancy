import { Home, UtensilsCrossed, Shield, Car, Wrench, Factory } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const jobCategories = [
  {
    category: 'Household & Domestic Staff',
    icon: Home,
    emoji: '🏠',
    image: '/assets/generated/category-driver.dim_400x400.png',
    jobs: [
      'House Driver', 'Fresh House Driver', 'House Cook', 'Fresh House Cook',
      'House Maid', 'House Boy', 'Nanny / Babysitter', 'Caregiver', 'Private Gardener',
    ],
  },
  {
    category: 'Hospitality & Hotel Staff',
    icon: UtensilsCrossed,
    emoji: '🏨',
    image: '/assets/generated/category-waiter.dim_400x400.png',
    jobs: [
      'Waiter / Waitress', 'Room Attendant', 'Housekeeping Staff', 'Cleaner',
      'Kitchen Helper', 'Commis Chef', 'Restaurant Supervisor', 'Receptionist',
    ],
  },
  {
    category: 'Security Services',
    icon: Shield,
    emoji: '🛡',
    image: '/assets/generated/category-security.dim_400x400.png',
    jobs: ['Security Guard', 'CCTV Operator', 'Security Supervisor'],
  },
  {
    category: 'Drivers & Transport',
    icon: Car,
    emoji: '🚗',
    image: null,
    jobs: [
      'Light Vehicle Driver', 'Heavy Vehicle Driver', 'Delivery Driver',
      'Personal Driver', 'Company Driver',
    ],
  },
  {
    category: 'Skilled & Technical Workers',
    icon: Wrench,
    emoji: '🏗',
    image: '/assets/generated/category-worker.dim_400x400.png',
    jobs: [
      'Electrician', 'Plumber', 'AC Technician', 'Carpenter',
      'Mason', 'Welder', 'Painter', 'Fabricator',
    ],
  },
  {
    category: 'General & Semi-Skilled Workers',
    icon: Factory,
    emoji: '🏭',
    image: null,
    jobs: ['Factory Worker', 'Packing Helper', 'Warehouse Worker', 'General Labour'],
  },
];

export function JobCategoriesSection() {
  return (
    <section id="jobs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Complete Overseas Recruitment Categories
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Dream Jobs Consultancy provides professional overseas recruitment solutions across multiple sectors in Gulf countries.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {jobCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-light to-white rounded-xl shadow-md hover:shadow-xl transition-all border border-brand-primary/10 overflow-hidden"
              >
                {category.image && (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.category}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-brand-primary leading-tight">{category.emoji} {category.category}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {category.jobs.map((job, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-yellow-500 mr-2 font-bold">•</span>
                        <span>{job}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-md border border-brand-primary/10 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-base font-bold text-brand-primary text-left">{category.emoji} {category.category}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    {category.image && (
                      <div className="mb-4 rounded-lg overflow-hidden h-36">
                        <img src={category.image} alt={category.category} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <ul className="space-y-2">
                      {category.jobs.map((job, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-yellow-500 mr-2 font-bold">•</span>
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

        {/* Footer Note */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl p-8 shadow-md text-white">
            <h4 className="text-xl font-bold mb-4">🌍 We Recruit For</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇶🇦 Qatar', '🇴🇲 Oman', '🇰🇼 Kuwait', '🇧🇭 Bahrain'].map((country) => (
                <span key={country} className="px-4 py-2 bg-white/20 border border-white/30 text-white rounded-full text-sm font-semibold hover:bg-white/30 transition-colors">
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
