import React from 'react';
import { Star, MapPin, Bell, Siren, Upload } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="section how-it-works-section">
            <div className="container">
                <div className="how-it-works-header">
                    <h2 className="title">Personnalisation des contacts</h2>
                    <p className="subtitle">
                        L’écran de gestion des contacts dans SafeHelp vous permet de configurer chaque personne selon votre niveau de confiance et vos besoins en sécurité.
                    </p>
                </div>

                <div className="how-it-works-content">
                    <div className="steps-list">
                        <div className="step-item">
                            <div className="step-icon-wrapper">
                                <Star size={32} color="#ECC94B" fill="#ECC94B" />
                            </div>
                            <div className="step-text">
                                <h3>Favoris</h3>
                                <p>Affiche ce contact en haut de votre liste.</p>
                            </div>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-item">
                            <div className="step-icon-wrapper">
                                <MapPin size={32} color="#F56565" fill="#F56565" />
                            </div>
                            <div className="step-text">
                                <h3>Localisation</h3>
                                <p>Autorise le suivi de votre position en temps réel.</p>
                            </div>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-item">
                            <div className="step-icon-wrapper">
                                <Bell size={32} color="#4299E1" fill="#4299E1" />
                            </div>
                            <div className="step-text">
                                <h3>Notification de trajet</h3>
                                <p>Alertes à chaque étape de votre déplacement.</p>
                            </div>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-item">
                            <div className="step-icon-wrapper">
                                <Siren size={32} color="#ED8936" />
                            </div>
                            <div className="step-text">
                                <h3>Contact d’urgence</h3>
                                <p>Ce contact est prioritaire en cas d’alerte.</p>
                            </div>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-item">
                            <div className="step-icon-wrapper">
                                <Upload size={32} color="#48BB78" />
                            </div>
                            <div className="step-text">
                                <h3>Envoi de données</h3>
                                <p>Réception automatique des preuves audio/vidéo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="how-it-works-visual">
                        <img src="/assets/permissions-page.png" alt="Personnalisation des permissions contacts" className="showcase-img" style={{ maxWidth: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-xl)' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
