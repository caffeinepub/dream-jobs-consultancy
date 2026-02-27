import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Now in Dubai, UAE',
    role: 'Civil Engineer',
    text: 'Dream Jobs Consultancy made my dream of working in Dubai a reality. The entire process was smooth, transparent, and professional. They guided me at every step, from CV preparation to visa processing. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mohammed Salim',
    location: 'Now in Saudi Arabia',
    role: 'Construction Supervisor',
    text: 'I am extremely grateful to the team at Dream Jobs Consultancy. They found me an excellent opportunity in Saudi Arabia with a reputable company. Their support and guidance throughout the process were exceptional. Thank you!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Now in Abu Dhabi, UAE',
    role: 'Hospitality Manager',
    text: 'Working with Dream Jobs Consultancy was the best decision I made for my career. They matched me with a luxury hotel in Abu Dhabi that perfectly suited my experience. The team was incredibly supportive and made the entire relocation process stress-free!',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    location: 'Now in Qatar',
    role: 'Electrical Engineer',
    text: 'I was skeptical at first, but Dream Jobs Consultancy exceeded all my expectations. They found me a fantastic position in Qatar with excellent benefits. Their professionalism and dedication are unmatched. Thank you for changing my life!',
    rating: 5,
  },
  {
    name: 'Sunita Patel',
    location: 'Now in Bahrain',
    role: 'Healthcare Professional',
    text: 'The team at Dream Jobs Consultancy is simply amazing! They helped me secure a nursing position in Bahrain with a top hospital. From interview preparation to documentation, they were with me every step of the way. Forever grateful!',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    location: 'Now in Kuwait',
    role: 'Mechanical Engineer',
    text: 'Dream Jobs Consultancy turned my overseas career dream into reality. They found me an excellent opportunity in Kuwait with a leading engineering firm. Their guidance, transparency, and support throughout the process were outstanding!',
    rating: 5,
  },
  {
    name: 'Fatima Ali',
    location: 'Now in Dubai, UAE',
    role: 'Marketing Executive',
    text: 'I cannot thank Dream Jobs Consultancy enough for helping me land my dream job in Dubai. The entire team was professional, responsive, and genuinely cared about my success. They made the impossible possible!',
    rating: 5,
  },
  {
    name: 'Arjun Reddy',
    location: 'Now in Oman',
    role: 'IT Specialist',
    text: 'Working with Dream Jobs Consultancy was a game-changer for my career. They secured me a fantastic IT position in Oman with great salary and benefits. Their expertise and dedication are truly commendable. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    location: 'Now in Saudi Arabia',
    role: 'HR Manager',
    text: 'Dream Jobs Consultancy made my transition to Saudi Arabia seamless and stress-free. They handled everything professionally, from job matching to visa processing. The team is trustworthy, efficient, and truly cares about their candidates!',
    rating: 5,
  },
  {
    name: 'Karim Abdullah',
    location: 'Now in Dubai, UAE',
    role: 'Sales Manager',
    text: 'I had an exceptional experience with Dream Jobs Consultancy. They found me a perfect sales role in Dubai that matched my skills and aspirations. Their support, guidance, and professionalism made all the difference. Thank you for everything!',
    rating: 5,
  },
  {
    name: 'Deepak Verma',
    location: 'Now in Abu Dhabi, UAE',
    role: 'Accountant',
    text: 'Dream Jobs Consultancy helped me achieve my goal of working in the UAE. They secured me an accounting position with a reputable firm in Abu Dhabi. The entire process was transparent, professional, and efficient. I highly recommend them!',
    rating: 5,
  },
  {
    name: 'Sana Khan',
    location: 'Now in Qatar',
    role: 'Teacher',
    text: 'Thanks to Dream Jobs Consultancy, I am now teaching at an international school in Qatar. The team was incredibly supportive, helping me with everything from CV enhancement to interview preparation. They truly care about their candidates\' success!',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const progress = ((currentIndex + 1) / testimonials.length) * 100;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-white/90">
            Hear from our satisfied candidates who achieved their overseas career dreams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl relative">
            <Quote className="h-16 w-16 text-brand-accent mb-6 mx-auto" />
            
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed italic mb-6">
                "{currentTestimonial.text}"
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <p className="text-white font-bold text-xl">{currentTestimonial.name}</p>
              <p className="text-white/80 text-sm">{currentTestimonial.role}</p>
              <p className="text-brand-accent font-semibold">{currentTestimonial.location}</p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={handlePrevious}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex flex-col items-center space-y-2 min-w-[200px]">
                {/* Counter */}
                <div className="text-white/90 text-sm font-medium">
                  {currentIndex + 1} / {testimonials.length}
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-brand-accent h-full transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
