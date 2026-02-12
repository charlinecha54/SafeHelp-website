import React, { useState } from 'react';
import { Mail, Linkedin, Copy } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [copiedEmail, setCopiedEmail] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleCopy = (email) => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(email);
        setTimeout(() => setCopiedEmail(''), 2000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-content">
                        <h2 className="contact-title">Une question ?</h2>
                        <p className="contact-desc">
                            Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour toute demande d'information ou partenariat.
                        </p>
                        <div className="contact-links">
                            <div className="contact-link-wrapper">
                                <a href="mailto:charline.petit@epitech.eu" className="contact-link">
                                    <span className="icon"><Mail size={20} /></span> charline.petit@epitech.eu
                                </a>
                                <button
                                    onClick={() => handleCopy('charline.petit@epitech.eu')}
                                    className="copy-btn"
                                    title="Copier l'adresse email"
                                >
                                    <Copy size={16} />
                                    {copiedEmail === 'charline.petit@epitech.eu' && <span className="copied-text">Copié !</span>}
                                </button>
                            </div>
                            <div className="contact-link-wrapper">
                                <a href="mailto:paul.sinsoulieu@epitech.eu" className="contact-link">
                                    <span className="icon"><Mail size={20} /></span> paul.sinsoulieu@epitech.eu
                                </a>
                                <button
                                    onClick={() => handleCopy('paul.sinsoulieu@epitech.eu')}
                                    className="copy-btn"
                                    title="Copier l'adresse email"
                                >
                                    <Copy size={16} />
                                    {copiedEmail === 'paul.sinsoulieu@epitech.eu' && <span className="copied-text">Copié !</span>}
                                </button>
                            </div>
                            <div className="contact-link-wrapper">
                                <a href="mailto:yanis.ktab@epitech.eu" className="contact-link">
                                    <span className="icon"><Mail size={20} /></span> yanis.ktab@epitech.eu
                                </a>
                                <button
                                    onClick={() => handleCopy('yanis.ktab@epitech.eu')}
                                    className="copy-btn"
                                    title="Copier l'adresse email"
                                >
                                    <Copy size={16} />
                                    {copiedEmail === 'yanis.ktab@epitech.eu' && <span className="copied-text">Copié !</span>}
                                </button>
                            </div>
                            <a href="https://www.linkedin.com/company/appsafehelp" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="icon"><Linkedin size={20} /></span> LinkedIn
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Comment pouvons-nous vous aider ?"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Envoyer le message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
