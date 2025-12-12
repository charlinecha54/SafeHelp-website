import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MentionsLegales from './components/legal/MentionsLegales';
import Confidentialite from './components/legal/Confidentialite';
import CGU from './components/legal/CGU';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<><Navbar /><MentionsLegales /><Footer /></>} />
        <Route path="/politique-de-confidentialite" element={<><Navbar /><Confidentialite /><Footer /></>} />
        <Route path="/cgu" element={<><Navbar /><CGU /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
