import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Upload, Loader2, FileText } from 'lucide-react';

const positionOptions = [
  'Civil Engineer',
  'Mechanical Engineer',
  'Electrical Engineer',
  'IT Professional',
  'Technician / Supervisor',
  'Registered Nurse',
  'Doctor / Medical Professional',
  'Medical / Lab Technician',
  'Healthcare Assistant',
  'Site Supervisor / Foreman',
  'Project Manager',
  'Mason / Carpenter / Welder',
  'Chef / Cook',
  'Hotel / Hospitality Staff',
  'Housekeeping / Cleaning Staff',
  'Factory / Production Worker',
  'Machine Operator',
  'Quality Controller',
  'Construction Laborer',
  'Warehouse / General Worker',
  'Driver',
  'Security Guard',
  'Other',
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  position: string;
  experience: string;
  resume: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  nationality?: string;
  position?: string;
  experience?: string;
  resume?: string;
}

export function ApplicationSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    position: '',
    experience: '',
    resume: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required.';
    if (!formData.position) newErrors.position = 'Please select a position.';
    if (!formData.experience.trim()) {
      newErrors.experience = 'Years of experience is required.';
    } else if (isNaN(Number(formData.experience)) || Number(formData.experience) < 0) {
      newErrors.experience = 'Please enter a valid number.';
    }
    if (!formData.resume) newErrors.resume = 'Please upload your resume/CV.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    if (errors.resume) setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate a brief processing delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      nationality: '',
      position: '',
      experience: '',
      resume: null,
    });
    setErrors({});
    setIsSuccess(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="apply" className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Apply for a Job
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Take the first step towards your overseas career. Fill in the form below and our team will get in touch with you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSuccess ? (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-20 w-20 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-3">Application Submitted!</h3>
              <p className="text-gray-600 mb-2 text-lg">
                Thank you, <span className="font-semibold text-brand-primary">{formData.fullName}</span>!
              </p>
              <p className="text-gray-600 mb-8">
                We have received your application for <span className="font-semibold">{formData.position}</span>. Our team will review your details and contact you shortly at <span className="font-semibold">{formData.email}</span>.
              </p>
              <Button
                onClick={handleReset}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-3"
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-6"
            >
              {/* Full Name */}
              <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className={errors.fullName ? 'border-red-400 focus-visible:ring-red-400' : 'border-gray-300'}
                />
                {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={errors.email ? 'border-red-400 focus-visible:ring-red-400' : 'border-gray-300'}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={errors.phone ? 'border-red-400 focus-visible:ring-red-400' : 'border-gray-300'}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Nationality */}
              <div className="space-y-1.5">
                <Label htmlFor="nationality" className="text-sm font-semibold text-gray-700">
                  Nationality <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nationality"
                  type="text"
                  placeholder="e.g. Indian, Pakistani, Bangladeshi"
                  value={formData.nationality}
                  onChange={(e) => handleChange('nationality', e.target.value)}
                  className={errors.nationality ? 'border-red-400 focus-visible:ring-red-400' : 'border-gray-300'}
                />
                {errors.nationality && <p className="text-xs text-red-500">{errors.nationality}</p>}
              </div>

              {/* Position Applied For */}
              <div className="space-y-1.5">
                <Label htmlFor="position" className="text-sm font-semibold text-gray-700">
                  Position Applied For <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.position}
                  onValueChange={(value) => handleChange('position', value)}
                >
                  <SelectTrigger
                    id="position"
                    className={errors.position ? 'border-red-400 focus:ring-red-400' : 'border-gray-300'}
                  >
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positionOptions.map((pos) => (
                      <SelectItem key={pos} value={pos}>
                        {pos}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.position && <p className="text-xs text-red-500">{errors.position}</p>}
              </div>

              {/* Years of Experience */}
              <div className="space-y-1.5">
                <Label htmlFor="experience" className="text-sm font-semibold text-gray-700">
                  Years of Experience <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="experience"
                  type="number"
                  min="0"
                  max="50"
                  placeholder="e.g. 3"
                  value={formData.experience}
                  onChange={(e) => handleChange('experience', e.target.value)}
                  className={errors.experience ? 'border-red-400 focus-visible:ring-red-400' : 'border-gray-300'}
                />
                {errors.experience && <p className="text-xs text-red-500">{errors.experience}</p>}
              </div>

              {/* Resume Upload */}
              <div className="space-y-1.5">
                <Label htmlFor="resume" className="text-sm font-semibold text-gray-700">
                  Resume / CV <span className="text-red-500">*</span>
                </Label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                    errors.resume
                      ? 'border-red-400 bg-red-50'
                      : formData.resume
                      ? 'border-brand-accent bg-green-50'
                      : 'border-gray-300 hover:border-brand-primary bg-gray-50 hover:bg-brand-light/30'
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {formData.resume ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="h-6 w-6 text-brand-accent" />
                      <span className="text-sm font-medium text-brand-primary truncate max-w-xs">
                        {formData.resume.name}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-gray-400" />
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-brand-primary">Click to upload</span> your resume
                      </p>
                      <p className="text-xs text-gray-400">PDF, DOC, DOCX accepted</p>
                    </div>
                  )}
                </div>
                {errors.resume && <p className="text-xs text-red-500">{errors.resume}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-base py-6 shadow-md hover:shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting Application…
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>

              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to be contacted by our recruitment team regarding your application.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
