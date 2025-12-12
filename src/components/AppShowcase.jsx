import React from 'react';
import './AppShowcase.css';

const AppShowcase = () => {
    return (
        <section className="section app-showcase-section">
            <div className="container">
                {/* Section 1: Audio/Video Evidence */}
                <div className="showcase-block">
                    <div className="showcase-visual">
                        <div className="phone-mockup-container">
                            <img src="/assets/alert_history.png" alt="Enregistrement de preuves" className="showcase-img" />
                            <div className="overlay-badge">
                                <span className="recording-dot"></span>
                                Enregistrement en cours
                            </div>
                        </div>
                    </div>
                    <div className="showcase-content">
                        <span className="showcase-badge">Preuves Tangibles</span>
                        <h2 className="showcase-title">Enregistrement Audio & Vidéo</h2>
                        <p className="showcase-text">
                            En cas de danger, SafeHelp déclenche automatiquement l'enregistrement audio et vidéo. Ces preuves sont stockées de manière sécurisée et peuvent être utilisées ultérieurement.
                        </p>
                        <ul className="showcase-list">
                            <li>Déclenchement automatique</li>
                            <li>Stockage cloud sécurisé</li>
                            <li>Valeur juridique</li>
                        </ul>
                    </div>
                </div>



                {/* Section 3: History & Data */}
                <div className="showcase-block">
                    <div className="showcase-visual">
                        <img src="/assets/3.png" alt="Historique des alertes" className="showcase-img" />
                    </div>
                    <div className="showcase-content">
                        <span className="showcase-badge">Historique</span>
                        <h2 className="showcase-title">Historique et données</h2>
                        <p className="showcase-text">
                            Accès à l’historique des alertes. Retrouvez tous les détails par date, lieu, durée et fichiers associés.
                        </p>
                        <ul className="showcase-list">
                            <li>Accès à l’historique des alertes</li>
                            <li>Détails par date, lieu, durée, fichiers associés</li>
                            <li>Export possible en PDF pour dépôt de plainte ou assurance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
