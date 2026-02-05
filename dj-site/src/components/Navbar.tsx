import React, { useState, useEffect } from 'react';
import diaz12 from '../assets/gregmantes.png';


type Section = 'hero' | 'about' | 'platforms' | 'contact';

interface NavbarProps {
    activeSection: Section;
    onNavigate: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                {/* Logo */}
                <button onClick={() => handleLinkClick('hero')} className="navbar-logo">
                    <img src={diaz12} alt="Logo" className="logo-icon" />
                    <span className="logo-text">DIAZMANTES</span>
                </button>

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
