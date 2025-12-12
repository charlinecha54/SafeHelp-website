import React from 'react';
import './LegalPage.css';

const Confidentialite = () => {
    return (
        <section className="legal-section">
            <div className="container">
                <div className="legal-content">
                    <h1 className="legal-title">Politique de Confidentialité</h1>
                    <p><strong>Dernière mise à jour :</strong> 03/09/2025</p>

                    <p>
                        SafeHelp est une application mobile de sécurité personnelle développée par Charline Petit, Paul Sinsoulieu et Yanis Ktab.
                        La protection de vos données personnelles est une priorité.
                        Cette politique explique quelles données nous collectons, comment nous les utilisons, et quels sont vos droits.
                    </p>

                    <h2>1. Responsable du traitement</h2>
                    <p>Le responsable du traitement des données est l’équipe SafeHelp :</p>
                    <ul>
                        <li>Charline Petit – <a href="mailto:charline.petit@epitech.eu">charline.petit@epitech.eu</a></li>
                        <li>Paul Sinsoulieu – <a href="mailto:paul.sinsoulieu@epitech.eu">paul.sinsoulieu@epitech.eu</a></li>
                        <li>Yanis Ktab – <a href="mailto:yanis.ktab@epitech.eu">yanis.ktab@epitech.eu</a></li>
                    </ul>

                    <h2>2. Données collectées</h2>
                    <p>Lors de l’utilisation de l’application, nous pouvons collecter les données suivantes :</p>
                    <ul>
                        <li><strong>Localisation GPS (en temps réel) :</strong> pour partager votre position avec vos contacts de confiance en cas d’alerte.</li>
                        <li><strong>Microphone :</strong> pour enregistrer de l’audio lors d’une alerte.</li>
                        <li><strong>Caméra :</strong> pour capturer des vidéos lors d’une alerte.</li>
                        <li><strong>Photos et médias :</strong> pour enregistrer et transmettre des preuves en cas d’alerte.</li>
                        <li><strong>Informations de compte :</strong> adresse e-mail, nom d’utilisateur, contacts de confiance.</li>
                        <li><strong>Informations techniques :</strong> modèle du téléphone, système d’exploitation, données de performance (uniquement à des fins d’amélioration).</li>
                    </ul>

                    <h2>3. Finalité de l’utilisation des données</h2>
                    <p>Les données sont utilisées uniquement pour :</p>
                    <ul>
                        <li>Déclencher et transmettre une alerte à vos contacts de confiance.</li>
                        <li>Fournir les fonctionnalités de sécurité (partage de localisation, enregistrements audio/vidéo).</li>
                        <li>Améliorer l’application et assurer sa sécurité.</li>
                        <li>Vous permettre de créer et gérer votre compte.</li>
                    </ul>

                    <h2>4. Base légale (RGPD)</h2>
                    <p>Nous traitons vos données sur les bases légales suivantes :</p>
                    <ul>
                        <li><strong>Consentement :</strong> pour la localisation, le microphone, la caméra et les médias (via les autorisations que vous acceptez).</li>
                        <li><strong>Exécution du service :</strong> pour la gestion du compte et l’envoi d’alertes.</li>
                    </ul>

                    <h2>5. Partage des données</h2>
                    <p>Vos données ne sont jamais revendues à des tiers.</p>
                    <p>Elles peuvent être partagées uniquement :</p>
                    <ul>
                        <li>Avec vos contacts de confiance que vous avez ajoutés.</li>
                        <li>Avec nos prestataires techniques (hébergement sur CloudFlare ou services similaires), uniquement pour le stockage et la transmission sécurisée des données.</li>
                    </ul>

                    <h2>6. Durée de conservation</h2>
                    <ul>
                        <li><strong>Données d’alerte (localisation, audio, vidéo) :</strong> conservées pendant 30 jours puis supprimées automatiquement.</li>
                        <li><strong>Données de compte :</strong> conservées tant que votre compte est actif, puis supprimées lors de sa suppression.</li>
                        <li><strong>Données techniques :</strong> conservées le temps nécessaire à l’amélioration et la sécurité du service.</li>
                    </ul>

                    <h2>7. Vos droits</h2>
                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                    <ul>
                        <li>Droit d’accès (obtenir une copie de vos données).</li>
                        <li>Droit de rectification (corriger vos informations).</li>
                        <li>Droit à l’effacement (supprimer votre compte et vos données).</li>
                        <li>Droit de retirer votre consentement (désactiver l’accès à la localisation, au micro, etc.).</li>
                        <li>Droit à la portabilité (recevoir vos données dans un format lisible).</li>
                    </ul>
                    <p>Pour exercer vos droits, contactez-nous :</p>
                    <ul>
                        <li><a href="mailto:charline.petit@epitech.eu">charline.petit@epitech.eu</a></li>
                        <li><a href="mailto:paul.sinsoulieu@epitech.eu">paul.sinsoulieu@epitech.eu</a></li>
                        <li><a href="mailto:yanis.ktab@epitech.eu">yanis.ktab@epitech.eu</a></li>
                    </ul>

                    <h2>8. Sécurité</h2>
                    <p>Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données :</p>
                    <ul>
                        <li>Chiffrement des données en transit et au repos.</li>
                        <li>Accès limité et contrôlé aux serveurs.</li>
                        <li>Sauvegardes et audits réguliers.</li>
                    </ul>

                    <h2>9. Enfants</h2>
                    <p>
                        L’application n’est pas destinée aux enfants de moins de 15 ans sans autorisation parentale.
                        Si vous êtes parent et pensez que votre enfant a utilisé SafeHelp sans votre accord, contactez-nous afin que nous procédions à la suppression de ses données.
                    </p>

                    <h2>10. Modifications de la politique</h2>
                    <p>
                        Nous pouvons mettre à jour cette politique pour refléter des changements légaux ou techniques.
                        En cas de modification importante, nous vous en informerons via l’application.
                    </p>

                    <h2>11. Contact</h2>
                    <p>Pour toute question ou demande concernant vos données, vous pouvez écrire à :</p>
                    <ul>
                        <li><a href="mailto:charline.petit@epitech.eu">charline.petit@epitech.eu</a></li>
                        <li><a href="mailto:paul.sinsoulieu@epitech.eu">paul.sinsoulieu@epitech.eu</a></li>
                        <li><a href="mailto:yanis.ktab@epitech.eu">yanis.ktab@epitech.eu</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Confidentialite;
