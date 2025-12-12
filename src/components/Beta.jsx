import React, { useState } from 'react';
import './Beta.css';

const Beta = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Merci ! Vous êtes inscrit sur la liste d'attente avec : ${email}`);
        setEmail('');
    };

    return (
        <section id="beta" className="section beta-section">
            <div className="container">
                <div className="beta-card">
                    <div className="beta-content-wrapper">
                        <div className="beta-content">
                            <h2 className="beta-title">Prêt à vous sentir en sécurité ?</h2>
                            <p className="beta-text">
                                Rejoignez la communauté SafeHelp et participez à la construction de l'application de sécurité de demain.
                            </p>
                            <form className="beta-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Votre adresse email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="beta-input"
                                />
                                <button type="submit" className="btn btn-accent beta-btn">Accès Anticipé</button>
                            </form>
                            <p className="beta-note">Places limitées. Pas de spam.</p>
                        </div>
                        <div className="beta-image">
                            <img src="/assets/community.png" alt="Communauté SafeHelp" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beta;
