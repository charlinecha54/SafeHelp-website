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
                            <a href="https://apps.apple.com/fr/app/app-safe-help/id6754930349" target="_blank" rel="noopener noreferrer" className="store-btn btn-ios">
                                <span className="store-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                </span>
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
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://apps.apple.com/fr/app/app-safe-help/id6754930349" alt="iOS QR Code" />
                                <span className="os-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="qr-label">iOS</div>
                            <div className="qr-sublabel">Scannez-moi</div>
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
