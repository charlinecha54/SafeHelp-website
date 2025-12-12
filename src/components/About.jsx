import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="section about-section">
            <div className="container">
                <div className="mission-badge">Notre Mission</div>
                <h2 className="title">Pourquoi nous avons créé SafeHelp</h2>
                <p className="subtitle">
                    Chaque année, des milliers de victimes n’ont pas les moyens de prouver ce qu’elles ont vécu.
                    L’absence de témoins, de preuves, ou la peur d’être seul(e) ralentit la réaction.
                </p>

                <div className="mission-cards">
                    <div className="mission-card card-blue">
                        <h3>Rassurer</h3>
                        <p>Une présence constante pour vous et vos proches.</p>
                    </div>
                    <div className="mission-card card-white">
                        <h3>Prévenir</h3>
                        <p>Détecter les dangers avant qu'ils n'arrivent.</p>
                    </div>
                    <div className="mission-card card-red">
                        <h3>Agir</h3>
                        <p>Une réponse immédiate et des preuves tangibles.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
