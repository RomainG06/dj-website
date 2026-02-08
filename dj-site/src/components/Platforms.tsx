import React from 'react';
import './Platforms.css';
import diaz12 from '../assets/diaz12.jpg';
import diaz13 from '../assets/diaz13.jpg';
import diaz10 from '../assets/diaz10.jpg';
import soundcloudIcon from '../assets/soundcloudremove.png';
import spotifyIcon from '../assets/spotremove.png';
import beatportIcon from '../assets/bportremove.png';

const Platforms: React.FC = () => {
    const platforms = [
        {
            name: 'Spotify',
            url: 'https://open.spotify.com/artist/4o8S39nuz3AATq2pTSZvWg?si=yGWdANWMQXeXXQFBB5EjAg',
            photo: diaz12,
            accent: 'violet',
            icon: (
                <img src={spotifyIcon} alt="Spotify" className="platform-icon" />
            )
        },
        {
            name: 'Beatport',
            url: 'https://www.beatport.com/artist/greg-diazmantes/497348',
            photo: diaz13,
            accent: 'pink',
            icon: (
                <img src={beatportIcon} alt="Beatport" className="platform-icon" />
            )
        },
        {
            name: 'SoundCloud',
            url: 'https://soundcloud.com/gregdiazmantes',
            photo: diaz10,
            accent: 'blue',
            icon: (
                <img src={soundcloudIcon} alt="SoundCloud" className="platform-icon" />
            )
        }
    ];

    return (
        <section id="platforms" className="platforms-section">
            <div className="platforms-container">
                <h2 className="platforms-title">Listen & Vibe</h2>
                <p className="platforms-subtitle">Écoutez ma musique sur vos plateformes préférées</p>

                <div className="platforms-grid">
                    {platforms.map((platform, index) => (
                        <a
                            key={index}
                            href={platform.url}
                            className={`platform-card platform-card-${platform.accent}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="platform-background">
                                <img src={platform.photo} alt={`${platform.name} background`} loading="lazy" />
                            </div>
                            <div className="platform-content">
                                {platform.icon}
                                <h3 className="platform-name">{platform.name}</h3>
                                <span className="platform-cta">Écouter →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Platforms;
