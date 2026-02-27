import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { socialLinks } from '@/config/socialLinks';

export function ConnectWithUsSection() {
  const socialPlatforms = [
    { name: 'Facebook', icon: SiFacebook, url: socialLinks.facebook },
    { name: 'Twitter / X', icon: SiX, url: socialLinks.twitter },
    { name: 'LinkedIn', icon: SiLinkedin, url: socialLinks.linkedin },
    { name: 'Instagram', icon: SiInstagram, url: socialLinks.instagram },
  ];

  const activePlatforms = socialPlatforms.filter(platform => platform.url);

  // Only render section if there are active social links
  if (activePlatforms.length === 0) {
    return null;
  }

  return (
    <section id="connect" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Connect With Us
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 mb-8">
            Follow us on social media for the latest job opportunities and updates
          </p>

          <div className="flex justify-center space-x-6">
            {activePlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary hover:from-brand-accent hover:to-green-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                aria-label={platform.name}
              >
                <platform.icon className="h-8 w-8 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
