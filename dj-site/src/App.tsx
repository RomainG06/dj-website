import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MusicPlayer from './components/MusicPlayer';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';

type Section = 'hero' | 'about' | 'music' | 'contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero />;
      case 'about':
        return <About />;
      case 'music':
        return <MusicPlayer />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </>
  );
};

export default App;
