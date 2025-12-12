import React from 'react';
import './Illustrations.css';

const Illustrations = () => {
    return (
        <section className="section illustrations-section">
            <div className="container">
                <div className="illustration-row">
                    <div className="illustration-content">
                        <h3 className="illustration-title">Détection de chute et immobilité</h3>
                        <p className="illustration-desc">
                            SafeHelp analyse vos mouvements pour détecter toute anomalie.
                            En cas d'immobilité prolongée ou de chute, une alerte est automatiquement préparée.
                        </p>
                    </div>
                    <div className="illustration-image">
                        <img src="/assets/immobility.png" alt="Détection immobilité" />
                    </div>
                </div>

                <div className="illustration-row reverse">
                    <div className="illustration-content">
                        <h3 className="illustration-title">Déviation de trajet</h3>
                        <p className="illustration-desc">
                            Lors d'un suivi d'itinéraire, si vous vous écartez anormalement de votre chemin,
                            SafeHelp le détecte et peut prévenir vos proches.
                        </p>
                    </div>
                    <div className="illustration-image">
                        <img src="/assets/deviation.png" alt="Déviation de trajet" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Illustrations;
