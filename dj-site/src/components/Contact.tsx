import React from 'react';
import './Contact.css';
import insta from '../assets/insta-removebg-preview.png';
import contactTel from '../assets/chattel.png';
import mailContact from '../assets/mailcont.png';

const Contact: React.FC = () => {
    const contactInfo = [
        {
            icon: <img src={contactTel} alt="Téléphone" />,
            title: 'Téléphone',
            value: '+33 6 18 18 93 06',
            href: 'tel:+33618189306',
            accent: 'violet'
        },
        {
            icon: <img src={mailContact} alt="Email" />,
            title: 'Email',
            value: 'gregdiazmantes@gmail.com',
            href: 'mailto:gregdiazmantes@gmail.com',
            accent: 'pink'
        },
        {
            icon: <img src={insta} alt="Instagram" />,
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
                            Vous souhaitez réserver Diazmantes pour votre événement ?
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
