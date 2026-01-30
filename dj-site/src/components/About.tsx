import React from 'react';
import diaz8 from '../assets/diaz8.jpg';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-image">
                        <img
                            src={diaz8}
                            alt="DJ Diaz"
                            className="profile-image"
                        />
                    </div>

                    <div className="about-text">
                        <h2 className="section-title">À Propos</h2>
                        <div className="about-description">
                            <h3 className="about-subtitle">L'Artiste</h3>
                            <p>
                                DJ Diaz est un artiste passionné qui façonne les nuits avec son style unique
                                et son énergie contagieuse. Avec des années d'expérience derrière les platines,
                                il a su se forger une identité musicale distinctive qui transcende les genres.
                            </p>

                            <h3 className="about-subtitle">Style Musical</h3>
                            <p>
                                Son univers musical est un savant mélange de sonorités électroniques modernes
                                et de rythmes envoûtants. Passant du deep house au techno progressif,
                                DJ Diaz crée des atmosphères uniques qui transportent son public dans
                                un voyage sonore inoubliable.
                            </p>

                            <h3 className="about-subtitle">Performances</h3>
                            <p>
                                Reconnu pour ses sets énergiques et sa capacité à lire la foule, DJ Diaz
                                a performé dans de nombreux clubs et festivals, créant des moments magiques
                                et des souvenirs impérissables. Chaque performance est une expérience unique,
                                construite sur l'interaction avec le public et l'émotion du moment présent.
                            </p>

                            <h3 className="about-subtitle">Vision</h3>
                            <p>
                                Pour DJ Diaz, la musique est bien plus qu'un métier - c'est une passion,
                                un mode de vie et un moyen de connexion universelle. Son objectif est de
                                continuer à repousser les limites créatives et à partager son amour de la
                                musique avec le monde entier.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Années d'Expérience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Performances</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Événements Majeurs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
