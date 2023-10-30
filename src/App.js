import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//no rompan nada
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<>
            <AboutMe />
            <Experience />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
