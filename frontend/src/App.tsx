import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { FounderSection } from './components/FounderSection';
import { ManagementSection } from './components/ManagementSection';
import { ServicesSection } from './components/ServicesSection';
import { JobCategoriesSection } from './components/JobCategoriesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { RecruitmentProcessSection } from './components/RecruitmentProcessSection';
import { WhyTrustUsSection } from './components/WhyTrustUsSection';
import { OurOfficesSection } from './components/OurOfficesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ApplicationSection } from './components/ApplicationSection';
import { ContactSection } from './components/ContactSection';
import { ConnectWithUsSection } from './components/ConnectWithUsSection';
import { DisclaimerSection } from './components/DisclaimerSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <FounderSection />
        <ManagementSection />
        <ServicesSection />
        <JobCategoriesSection />
        <HowItWorksSection />
        <RecruitmentProcessSection />
        <WhyTrustUsSection />
        <OurOfficesSection />
        <TestimonialsSection />
        <ApplicationSection />
        <ContactSection />
        <ConnectWithUsSection />
        <DisclaimerSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
