import React from 'react';
import {
  ScrollProgress,
  Navbar,
  Hero,
  AboutSection,
  RolesSection,
  TimelineSection,
  ContactSection,
  Footer
} from '../components';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#7C3AED] selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AboutSection />
      <RolesSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
