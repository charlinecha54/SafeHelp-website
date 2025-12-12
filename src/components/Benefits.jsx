import React from 'react';
import './Benefits.css';

const benefitsList = [
    { title: "Moins de non-signalements", desc: "Encouragez l'action grâce à un outil simple et rapide." },
    { title: "Des preuves exploitables", desc: "Enregistrements sécurisés utilisables par les autorités." },
    { title: "Une tranquillité d’esprit au quotidien", desc: "Sachez que vous et vos proches êtes protégés en permanence." },
];

const Benefits = () => {
    return (
        <section className="section benefits-section">
            <div className="container">
                <h2 className="title">Pourquoi SafeHelp ?</h2>
                <div className="benefits-grid">
                    {benefitsList.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-check">✓</div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-desc">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
