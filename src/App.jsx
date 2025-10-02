import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Intro />
            <Gallery />
            <FindUs />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
