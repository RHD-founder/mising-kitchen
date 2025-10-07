import React from 'react';
import { images } from '../../constants';

const AboutUs = () => {
  const containerStyle = {
    backgroundColor: '#0a1e0f',
    color: '#ffffff',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    padding: '4rem 2rem',
  };

  const contentStyle = {
    width: '100%',
    maxWidth: '1200px',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const aboutStyle = {
    width: '100%',
    textAlign: 'center',
    padding: '2rem',
  };

  const headingStyle = {
    color: '#d4af37',
    fontSize: '4rem',
    lineHeight: '1.2',
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-base, "Cormorant Upright", serif)',
  };

  const textStyle = {
    maxWidth: '800px',
    margin: '2rem auto',
    color: '#a9b8b1',
    fontFamily: 'var(--font-alt, "Open Sans", sans-serif)',
    lineHeight: '1.8',
  };

  const buttonStyle = {
    marginTop: '1rem',
    backgroundColor: '#d4af37',
    color: '#0a1e0f',
    border: 'none',
    padding: '0.8rem 2rem',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: 'var(--font-base, "Cormorant Upright", serif)',
    transition: 'all 0.3s ease',
  };

  return (
    <div id="about" style={containerStyle}>
      <div style={contentStyle}>
        <div style={aboutStyle}>
          <h1 style={headingStyle}>About Us</h1>
          <img 
            src={images.spoon} 
            alt="about_spoon" 
            style={{ 
              margin: '1rem auto',
              display: 'block',
              width: '45px',
            }} 
          />
          <p style={textStyle}>
            At Mising Kitchen, we blend traditional recipes with modern culinary techniques to create unforgettable dining experiences. 
            Our passion for quality ingredients and authentic flavors is reflected in every dish we serve.
          </p>
          <button type="button" style={buttonStyle}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
