import React from 'react';
import './Hero.css';
import VideoGallery from './VideoGallery';
import diaz1 from '../assets/diaz1.jpg';
import diaz2 from '../assets/diaz2.jpg';
import diaz3 from '../assets/diaz3.jpg';
import diaz4 from '../assets/diaz4.jpg';
import diaz5 from '../assets/diaz5.jpg';
import diaz6 from '../assets/diaz6.jpg';
import diaz7 from '../assets/diaz7.jpg';
import diaz9 from '../assets/diaz9.jpg';
import diaz10 from '../assets/diaz10.jpg';
import diaz11 from '../assets/diaz11.jpg';
import diaz12 from '../assets/diaz12.jpg';
import diaz13 from '../assets/diaz13.jpg';

const Hero: React.FC = () => {
    const backgroundImages = [
        { src: diaz1, accent: 'violet' },
        { src: diaz2, accent: 'pink' },
        { src: diaz3, accent: 'blue' },
        { src: diaz4, accent: 'violet' },
        { src: diaz5, accent: 'pink' },
        { src: diaz6, accent: 'blue' },
        { src: diaz7, accent: 'violet' },
        { src: diaz9, accent: 'pink' },
        { src: diaz10, accent: 'blue' },
        { src: diaz11, accent: 'violet' },
        { src: diaz12, accent: 'pink' },
        { src: diaz13, accent: 'blue' },
    ];

    function openMixcloud() { window.open('https://open.spotify.com/artist/4o8S39nuz3AATq2pTSZvWg?si=yGWdANWMQXeXXQFBB5EjAg', '_blank'); }

    return (
        <>
            {/* Dark Overlay */}
            <div className="hero-overlay"></div>
            <section id="hero" className="hero-section">
                {/* Background Grid */}
                <div className="hero-background-grid" aria-hidden="true">
                    {backgroundImages.map((img, index) => (
                        <div key={index} className={`hero-bg-image hero-bg-image-${img.accent}`}>
                            <img src={img.src} alt="" loading="lazy" />
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Diazmantes</h1>
                        <p className='hero-job'>DJ / PRODUCTEUR / REMIXEUR</p>
                        <p className="hero-subtitle">Les meilleurs sets pour vos soirées</p>
                        <button className="hero-cta" onClick={openMixcloud}>Écouter maintenant</button>
                        <div className="hero-tags">
                            <span className="hero-tag">Club</span>
                            <span className="hero-tag-separator">•</span>
                            <span className="hero-tag">Festivals</span>
                            <span className="hero-tag-separator">•</span>
                            <span className="hero-tag">Concert</span>
                        </div>
                    </div>
                </div>
            </section>
            <VideoGallery />
        </>
    );
};

export default Hero;
