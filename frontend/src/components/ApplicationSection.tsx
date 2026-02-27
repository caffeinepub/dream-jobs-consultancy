import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Loader2, Send } from 'lucide-react';

const jobCategoryGroups = [
  {
    group: '🏠 Household & Domestic Staff',
    roles: [
      'House Driver', 'Fresh House Driver', 'House Cook', 'Fresh House Cook',
      'House Maid', 'House Boy', 'Nanny / Babysitter', 'Caregiver', 'Private Gardener',
    ],
  },
  {
    group: '🏨 Hospitality & Hotel Staff',
    roles: [
      'Waiter / Waitress', 'Room Attendant', 'Housekeeping Staff', 'Cleaner',
      'Kitchen Helper', 'Commis Chef', 'Restaurant Supervisor', 'Receptionist',
    ],
  },
  {
    group: '🛡 Security Services',
    roles: ['Security Guard', 'CCTV Operator', 'Security Supervisor'],
  },
  {
    group: '🚗 Drivers & Transport',
    roles: [
      'Light Vehicle Driver', 'Heavy Vehicle Driver', 'Delivery Driver',
      'Personal Driver', 'Company Driver',
    ],
  },
  {
    group: '🏗 Skilled & Technical Workers',
    roles: [
      'Electrician', 'Plumber', 'AC Technician', 'Carpenter',
      'Mason', 'Welder', 'Painter', 'Fabricator',
    ],
  },
  {
    group: '🏭 General & Semi-Skilled Workers',
    roles: ['Factory Worker', 'Packing Helper', 'Warehouse Worker', 'General Labour'],
  },
];

const gulfCountries = ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'];

interface FormData {
  fullName: string;
  phone: string;
  jobCategory: string;
  desiredCountry: string;
  experience: string;
  additionalInfo: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  jobCategory?: string;
  desiredCountry?: string;
  experience?: string;
}

export function ApplicationSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    jobCategory: '',
    desiredCountry: '',
    experience: '',
    additionalInfo: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.jobCategory) newErrors.jobCategory = 'Please select a job category';
    if (!formData.desiredCountry) newErrors.desiredCountry = 'Please select a desired country';
    if (!formData.experience.trim()) newErrors.experience = 'Years of experience is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({ fullName: '', phone: '', jobCategory: '', desiredCountry: '', experience: '', additionalInfo: '' });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <section id="apply" className="py-16 md:py-24 bg-gradient-to-br from-brand-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-green-200">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Application Submitted!</h2>
              <p className="text-gray-600 text-lg mb-2">
                Thank you, <strong>{formData.fullName}</strong>! Your application has been received.
              </p>
              <p className="text-gray-500 mb-8">
                Our team will review your application and contact you on <strong>{formData.phone}</strong> within 24–48 hours.
              </p>
              <div className="bg-green-50 rounded-xl p-4 mb-8 text-sm text-green-700">
                <p>📱 For faster response, WhatsApp us at <strong>+91 63635 54699</strong> or <strong>+971 54 214 1042</strong></p>
              </div>
              <Button onClick={handleReset} variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                Submit Another Application
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-16 md:py-24 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Apply for Overseas Job
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Fill in your details below and our team will contact you with matching opportunities
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-brand-primary/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 font-semibold">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={errors.fullName ? 'border-red-400' : ''}
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-semibold">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={errors.phone ? 'border-red-400' : ''}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Job Category */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-semibold">
                  Job Category <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.jobCategory}
                  onValueChange={(value) => setFormData({ ...formData, jobCategory: value })}
                >
                  <SelectTrigger className={errors.jobCategory ? 'border-red-400' : ''}>
                    <SelectValue placeholder="Select a job category" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobCategoryGroups.map((group) => (
                      <div key={group.group}>
                        <div className="px-2 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-50">
                          {group.group}
                        </div>
                        {group.roles.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
                {errors.jobCategory && <p className="text-red-500 text-sm">{errors.jobCategory}</p>}
              </div>

              {/* Desired Country */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-semibold">
                  Desired Country <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.desiredCountry}
                  onValueChange={(value) => setFormData({ ...formData, desiredCountry: value })}
                >
                  <SelectTrigger className={errors.desiredCountry ? 'border-red-400' : ''}>
                    <SelectValue placeholder="Select desired Gulf country" />
                  </SelectTrigger>
                  <SelectContent>
                    {gulfCountries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.desiredCountry && <p className="text-red-500 text-sm">{errors.desiredCountry}</p>}
              </div>

              {/* Years of Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-gray-700 font-semibold">
                  Years of Experience <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="experience"
                  type="number"
                  min="0"
                  max="50"
                  placeholder="e.g. 2"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className={errors.experience ? 'border-red-400' : ''}
                />
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-gray-700 font-semibold">
                  Additional Information <span className="text-gray-400 font-normal">(Optional)</span>
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any additional skills, certifications, or information you'd like to share..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold text-lg py-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                By submitting, you agree to be contacted by Dream Jobs Consultancy regarding job opportunities.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
