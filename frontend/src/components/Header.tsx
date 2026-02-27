import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Founder', href: '#founder' },
  { label: 'Services', href: '#services' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Process', href: '#process' },
  { label: 'Offices', href: '#offices' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Apply', href: '#apply' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md dark:bg-gray-900/95' : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3 group"
            aria-label="Dream Jobs Consultancy Home"
          >
            <img
              src="/assets/generated/dream-jobs-logo.dim_200x200.png"
              alt="Dream Jobs Consultancy Logo"
              className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <h1 className="text-xl font-bold text-brand-primary leading-tight">
                Dream Jobs
              </h1>
              <p className="text-xs text-brand-secondary">Consultancy</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.label === 'Apply'
                    ? 'bg-brand-accent text-white hover:bg-brand-accent/90 font-semibold'
                    : 'text-gray-700 hover:text-brand-primary hover:bg-brand-light dark:text-gray-300 dark:hover:text-brand-primary dark:hover:bg-brand-light/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex items-center space-x-3 mb-8">
                <img
                  src="/assets/generated/dream-jobs-logo.dim_200x200.png"
                  alt="Dream Jobs Consultancy Logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h2 className="text-lg font-bold text-brand-primary leading-tight">
                    Dream Jobs
                  </h2>
                  <p className="text-xs text-brand-secondary">Consultancy</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-3 text-base font-medium rounded-md transition-colors ${
                      item.label === 'Apply'
                        ? 'bg-brand-accent text-white hover:bg-brand-accent/90 font-semibold'
                        : 'text-gray-700 hover:text-brand-primary hover:bg-brand-light dark:text-gray-300 dark:hover:text-brand-primary dark:hover:bg-brand-light/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
