import { Target, Eye, Heart, Shield, Users, Award } from 'lucide-react';

export function VisionMissionSection() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest and transparent in all our dealings',
    },
    {
      icon: Users,
      title: 'Candidate-First',
      description: 'Your success is our priority',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Supporting you every step of the way',
    },
  ];

  return (
    <section id="vision-mission" className="py-16 md:py-24 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To be the most trusted and reliable overseas recruitment consultancy, empowering talented professionals to achieve their career aspirations abroad while maintaining the highest standards of ethics and transparency.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To connect skilled professionals with verified international employers through a transparent, ethical, and supportive recruitment process that prioritizes candidate welfare and long-term career success.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Our Core Values</h3>
            <p className="text-white/80">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-white/80 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
