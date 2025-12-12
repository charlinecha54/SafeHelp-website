import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/assets/new_logo.png" alt="SafeHelp Logo" />
                    <span>SafeHelp</span>
                </Link>
                <ul className="navbar-links">
                    <li><a href="/#features">Fonctionnalités</a></li>
                    <li><a href="/#team">Équipe</a></li>
                    <li><a href="/#contact">Contact</a></li>
                    <li><a href="/#download" className="btn btn-primary btn-sm">Rejoignez la Beta</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
