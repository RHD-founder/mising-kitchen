import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
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
