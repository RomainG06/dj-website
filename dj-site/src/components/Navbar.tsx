import React, { useState, useEffect, useRef } from 'react';
import diaz12 from '../assets/gregmantes.png';
import audioTrack from '../assets/dj-mix.mp3';


type Section = 'hero' | 'about' | 'platforms' | 'contact';

interface NavbarProps {
    activeSection: Section;
    onNavigate: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch(() => {
                    console.log('Autoplay bloqué, cliquez sur le logo pour démarrer la musique');
                    setIsPlaying(false);
                });

            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);

            audio.addEventListener('play', handlePlay);
            audio.addEventListener('pause', handlePause);

            return () => {
                audio.removeEventListener('play', handlePlay);
                audio.removeEventListener('pause', handlePause);
            };
        }
    }, []);

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play().catch(() => {
                });
            }
        }
    };

    const navLinks = [
        { id: 'hero' as Section, label: 'Accueil' },
        { id: 'about' as Section, label: 'À propos' },
        { id: 'platforms' as Section, label: 'Plateformes' },
        { id: 'contact' as Section, label: 'Contact' },
    ];

    const handleLinkClick = (section: Section) => {
        onNavigate(section);
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo avec Audio Player */}
                <button
                    onClick={toggleAudio}
                    className="navbar-logo"
                    aria-label={isPlaying ? 'Arrêter la musique' : 'Démarrer la musique'}
                    aria-pressed={isPlaying}
                >
                    <img
                        src={diaz12}
                        alt="Logo"
                        className={`logo-icon ${isPlaying ? 'logo-spinning' : ''}`}
                    />
                    <span className="logo-text">DIAZMANTES</span>
                </button>

                <audio
                    ref={audioRef}
                    loop
                    preload="auto"
                >
                    <source src={audioTrack} type="audio/mpeg" />
                </audio>

                {/* Desktop Links */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => handleLinkClick(link.id)}
                        className={`nav-link-mobile ${activeSection === link.id ? 'active' : ''}`}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
