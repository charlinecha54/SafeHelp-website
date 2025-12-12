import React from 'react';
import './DownloadApp.css';

const DownloadApp = () => {
    return (
        <section id="download" className="section download-section">
            <div className="container">
                <div className="download-card">
                    <div className="download-content">
                        <h2 className="download-title">Protégez-vous dès maintenant</h2>
                        <p className="download-subtitle">Téléchargement gratuit • Disponible sur iOS et Android</p>

                        <div className="store-buttons">
                            <a href="#" className="store-btn btn-ios disabled">
                                <span className="store-icon"></span>
                                <div className="store-text">
                                    <span className="small-text">Télécharger sur</span>
                                    <span className="large-text">App Store</span>
                                </div>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.safehelp.app&pli=1" target="_blank" rel="noopener noreferrer" className="store-btn btn-android">
                                <span className="store-icon">▶</span>
                                <div className="store-text">
                                    <span className="small-text">Disponible sur</span>
                                    <span className="large-text">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="qr-codes-container">
                        <div className="qr-card">
                            <div className="qr-placeholder">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ComingSoon" alt="iOS QR Code" />
                                <span className="os-icon"></span>
                            </div>
                            <div className="qr-label">iOS</div>
                            <div className="qr-sublabel">À venir</div>
                        </div>
                        <div className="qr-card">
                            <div className="qr-placeholder">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com/store/apps/details?id=com.safehelp.app" alt="Android QR Code" />
                                <span className="os-icon android">🤖</span>
                            </div>
                            <div className="qr-label">Android</div>
                            <div className="qr-sublabel">Scannez-moi</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
