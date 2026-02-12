import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-blob"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Nouveau : Rejoignez l'app
                    </div>
                    <h1 className="hero-title">
                        SafeHelp, votre sécurité,<br />
                        <span className="text-gradient">réinventée.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Le danger n'attend pas, SafeHelp non plus. SafeHelp transforme votre smartphone en un gardien intelligent qui veille sur vous et vos proches, 24h/24.
                    </p>
                    <div className="hero-buttons">
                        <a href="#download" className="btn btn-primary">Rejoignez l'app</a>
                        <a href="#features" className="btn btn-outline">Découvrir</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src="/assets/mockup-phone.png" alt="SafeHelp App Interface" className="hero-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
