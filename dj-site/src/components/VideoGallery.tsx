import React from 'react';
import './VideoGallery.css';

const VideoGallery: React.FC = () => {
    const videos = [
        {
            id: 'PvYQ24MAs9I',
            title: 'Mix 1',
            accent: 'violet'
        },
        {
            id: 'syGdQZdPorA',
            title: 'Mix 2',
            accent: 'pink'
        },
        {
            id: '1pTavZ_kieg',
            title: 'Mix 3',
            accent: 'blue'
        }
    ];

    return (
        <div className="video-gallery-container">
            <h2 className="video-gallery-title">Performance live</h2>
            <p className="video-gallery-subtitle">Découvrez mes performances live</p>

            <div className="video-gallery-grid">
                {videos.map((video) => (
                    <div key={video.id} className={`video-card video-card-${video.accent}`}>
                        <div className="video-wrapper">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
