import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Diazmantes</h1>
                    <p className="hero-subtitle">Les meilleurs sets pour vos soirées</p>
                    <button className="hero-cta">Écouter maintenant</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
