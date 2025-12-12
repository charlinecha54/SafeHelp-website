import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section id="features" className="section features-section">
            <div className="container">
                <div className="features-header">
                    <img src="/assets/mockup.png" alt="SafeHelp Mockup" className="features-mockup" />
                    <div className="features-title-group">
                        <h2 className="title">Nos Fonctionnalités</h2>
                        <p className="subtitle">Découvrez comment SafeHelp assure votre sécurité au quotidien.</p>
                    </div>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <h3>Suivi de Trajet</h3>
                        <p>Détection automatique des écarts de trajet et partage de position sécurisé.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                        <h3>Données Sécurisées</h3>
                        <p>Vos preuves (audio, vidéo) sont chiffrées et stockées en toute sécurité.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3>Détection Intelligente</h3>
                        <p>Analyse en temps réel de vos mouvements pour détecter chutes et immobilité prolongée.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
