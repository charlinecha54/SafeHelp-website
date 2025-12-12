import React from 'react';
import './LegalPage.css';

const MentionsLegales = () => {
    return (
        <section className="legal-section">
            <div className="container">
                <div className="legal-content">
                    <h1 className="legal-title">Mentions Légales</h1>

                    <h2>1. Éditeur du site</h2>
                    <p>
                        Le site <strong>SafeHelp</strong> est édité par une équipe d'étudiants dans le cadre du projet EIP (Epitech Innovative Project), porté par :
                    </p>
                    <ul>
                        <li><strong>Charline Petit</strong> - Étudiante à Epitech Nancy - 📧 <a href="mailto:charline.petit@epitech.eu">charline.petit@epitech.eu</a></li>
                        <li><strong>Paul Sinsoulieu</strong> - Étudiant à Epitech Nancy - 📧 <a href="mailto:paul.sinsoulieu@epitech.eu">paul.sinsoulieu@epitech.eu</a></li>
                        <li><strong>Yanis Ktab</strong> - Étudiant à Epitech Nancy - 📧 <a href="mailto:yanis.ktab@epitech.eu">yanis.ktab@epitech.eu</a></li>
                    </ul>

                    <h2>2. Hébergeur</h2>
                    <p>
                        <strong>OVHCloud</strong><br />
                        2 rue Kellermann, 59100 Roubaix, France<br />
                        🌐 <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer">www.ovhcloud.com</a>
                    </p>

                    <h2>3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble du contenu présent sur ce site (textes, images, logos, vidéos, maquettes, codes...) est protégé par le Code de la propriété intellectuelle. Toute reproduction ou exploitation sans autorisation est interdite.
                    </p>

                    <h2>4. Protection des données</h2>
                    <p>
                        Aucune donnée personnelle n’est collectée sans votre consentement. Conformément au RGPD, vous pouvez exercer vos droits d’accès, de rectification ou de suppression en nous contactant à <a href="mailto:charline.petit@epitech.eu">charline.petit@epitech.eu</a>.
                    </p>

                    <h2>5. Limitation de responsabilité</h2>
                    <p>
                        L’équipe SafeHelp s’efforce de fournir des informations exactes. Elle ne saurait être tenue responsable d’éventuelles inexactitudes ou erreurs présentes sur le site.
                    </p>

                    <h2>6. Crédits</h2>
                    <ul>
                        <li><strong>Conception graphique :</strong> SafeHelp Team</li>
                        <li><strong>Développement :</strong> SafeHelp Devs</li>
                        <li><strong>Typographies :</strong> Montserrat, Mixta Pro (Google Fonts / Adobe Fonts)</li>
                        <li><strong>Icônes :</strong> Lucide Icons, Flaticon</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MentionsLegales;
