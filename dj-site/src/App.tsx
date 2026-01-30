import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MusicPlayer from './components/MusicPlayer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MusicPlayer />
        <Gallery />
        <Contact />
      </main>
    </>
  );
};

export default App
