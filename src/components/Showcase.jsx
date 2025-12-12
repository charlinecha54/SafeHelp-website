import React from 'react';
import './Showcase.css';

const Showcase = () => {
    return (
        <section className="section showcase-section">
            <div className="container">
                {/* Section 1: Écart de trajet */}
                <div className="showcase-block">
                    <div className="showcase-visual">
                        <img src="/assets/mockup_ecart.png" alt="Détection d'écart de trajet" className="showcase-img" />
                    </div>
                    <div className="showcase-content">
                        <span className="showcase-badge">Sécurité Intelligente</span>
                        <h2 className="showcase-title">Détection d'écart de trajet</h2>
                        <p className="showcase-text">
                            SafeHelp analyse votre itinéraire en temps réel. Si vous vous écartez anormalement de votre chemin, l'application le détecte immédiatement et peut alerter vos contacts de confiance.
                        </p>
                        <ul className="showcase-list">
                            <li>Suivi GPS précis</li>
                            <li>Alertes automatiques</li>
                            <li>Tranquillité d'esprit</li>
                        </ul>
                    </div>
                </div>

                {/* Section 2: Immobilité prolongée */}
                <div className="showcase-block reverse">
                    <div className="showcase-visual">
                        <img src="/assets/mockup_immo.png" alt="Détection d'immobilité" className="showcase-img" />
                    </div>
                    <div className="showcase-content">
                        <span className="showcase-badge">Protection 24/7</span>
                        <h2 className="showcase-title">Détection d'immobilité</h2>
                        <p className="showcase-text">
                            En cas de malaise ou d'accident, chaque seconde compte. SafeHelp détecte une immobilité prolongée anormale et prépare une alerte d'urgence pour prévenir les secours.
                        </p>
                        <ul className="showcase-list">
                            <li>Capteurs de mouvement</li>
                            <li>Réactivité immédiate</li>
                            <li>Assistance rapide</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
