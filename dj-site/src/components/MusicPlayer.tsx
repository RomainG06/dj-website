import React from 'react';
import './MusicPlayer.css';

const MusicPlayer: React.FC = () => {
    return (
        <section id="music" className="music-section">
            <div className="music-container">
                <h2 className="section-title">Musique</h2>
                <p className="section-subtitle">Découvrez mes derniers sets et productions</p>

                <div className="music-content">
                    {/* Le lecteur audio sera implémenté ici */}
                    <div className="music-placeholder">
                        <p>Lecteur de musique en cours de développement</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MusicPlayer;
