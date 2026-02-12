import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/assets/new_logo.png" alt="SafeHelp Logo" />
                            <span>SafeHelp</span>
                        </div>
                        <p className="footer-desc">
                            Votre sécurité, notre priorité. Une application innovante pour rassurer, prévenir et agir.
                        </p>
                    </div>

                    <div className="footer-nav">
                        <div className="footer-col">
                            <h4>Produit</h4>
                            <a href="/#features">Fonctionnalités</a>
                            <a href="/#beta">Rejoindre l'app</a>
                            <a href="/#team">L'équipe</a>
                        </div>

                        <div className="footer-col">
                            <h4>Légal</h4>
                            <Link to="/mentions-legales">Mentions Légales</Link>
                            <Link to="/cgu">CGU</Link>
                            <Link to="/politique-de-confidentialite">Confidentialité</Link>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <a href="mailto:charline.petit@epitech.eu">charline.petit@epitech.eu</a>
                            <a href="mailto:paul.sinsoulieu@epitech.eu">paul.sinsoulieu@epitech.eu</a>
                            <a href="mailto:yanis.ktab@epitech.eu">yanis.ktab@epitech.eu</a>
                            <a href="#">Support</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>SafeHelp est une application mobile développée par des étudiants d’Epitech.</p>
                        <p>Ce site et son contenu sont protégés par les lois françaises sur la propriété intellectuelle. Toute reproduction, diffusion ou exploitation sans autorisation est strictement interdite.</p>
                        <p style={{ marginTop: '10px' }}>&copy; {new Date().getFullYear()} SafeHelp. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
