import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/landing-page/header/Header';

import Home from './components/landing-page/feature/feature-home/Home';
import HowItWorks from './components/landing-page/feature/feature-how-it-works/HowItWork';
import Game from './components/landing-page/feature/feature-game/Game';
import Testimonials from './components/landing-page/feature/feature-testimonials/Testimonials';
import Doctor from './components/landing-page/feature/feature-doctor/Doctor';
import School from './components/landing-page/feature/feature-school/School';
import Healthcare from './components/landing-page/feature/feature-healthcare/Healthcare';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/game" element={<Game />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/school" element={<School />} />
        <Route path="/healthcare" element={<Healthcare />} />
      </Routes>
    </Router>
  );
}

export default App;
