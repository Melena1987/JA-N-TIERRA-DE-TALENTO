import React from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import ObjectivesSection from '../components/home/ObjectivesSection';
import DirectorSection from '../components/home/DirectorSection';
import FormatSection from '../components/home/FormatSection';
import CollaboratorsSection from '../components/home/CollaboratorsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] pb-16 md:pb-0"> {/* Padding bottom for mobile nav */}
      <HeroSection />
      <IntroSection />
      <ObjectivesSection />
      <DirectorSection />
      <FormatSection />
      <CollaboratorsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;