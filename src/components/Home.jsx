import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Showcase from './Showcase';
import AppShowcase from './AppShowcase';
import HowItWorks from './HowItWorks';
import DownloadApp from './DownloadApp';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Showcase />
            <AppShowcase />
            <HowItWorks />
            <DownloadApp />
            <About />
            <Team />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
