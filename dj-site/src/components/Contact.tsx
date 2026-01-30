import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const contactInfo = [
        {
            icon: '📱',
            title: 'Téléphone',
            value: '+33 6 12 34 56 78',
            href: 'tel:+33612345678',
            accent: 'violet'
        },
        {
            icon: '✉️',
            title: 'Email',
            value: 'contact@diazmantes.com',
            href: 'mailto:contact@diazmantes.com',
            accent: 'pink'
        },
        {
            icon: '📸',
            title: 'Instagram',
            value: '@diazmantes',
            href: 'https://instagram.com/diazmantes',
            accent: 'blue'
        }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="section-title">Contact</h2>
                <p className="section-subtitle">Réservations et demandes d'information</p>

                <div className="contact-content">
                    <div className="contact-cards">
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`contact-card contact-card-${item.accent}`}
                                target={item.title === 'Instagram' ? '_blank' : undefined}
                                rel={item.title === 'Instagram' ? 'noopener noreferrer' : undefined}
                            >
                                <div className="contact-card-icon">{item.icon}</div>
                                <h3 className="contact-card-title">{item.title}</h3>
                                <p className="contact-card-value">{item.value}</p>
                            </a>
                        ))}
                    </div>

                    <div className="contact-message">
                        <p>
                            Vous souhaitez réserver DJ Diaz pour votre événement ?
                            <br />
                            N'hésitez pas à me contacter pour discuter de votre projet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
