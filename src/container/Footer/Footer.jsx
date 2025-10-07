import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const footerStyle = {
    width: '100%',
    position: 'relative',
    backgroundColor: '#0a1e0f',
    padding: '4rem 2rem 2rem',
    margin: 0,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const linksContainerStyle = {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '5rem 0',
    flexWrap: 'wrap',
  };

  const sectionStyle = {
    flex: 1,
    minWidth: '250px',
    margin: '1rem',
    padding: '0 1rem',
  };

  const contactStyle = {
    ...sectionStyle,
    textAlign: 'left',
  };

  const logoStyle = {
    ...sectionStyle,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const workStyle = {
    ...sectionStyle,
    textAlign: 'right',
  };

  const headingStyle = {
    color: '#d4af37',
    fontSize: '2rem',
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-base, "Cormorant Upright", serif)',
  };

  const textStyle = {
    color: '#a9b8b1',
    margin: '0.75rem 0',
    lineHeight: '1.6',
    fontFamily: 'var(--font-alt, "Open Sans", sans-serif)',
  };

  const copyrightStyle = {
    width: '100%',
    textAlign: 'center',
    marginTop: '3rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const iconStyle = {
    color: '#ffffff',
    margin: '0.5rem',
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  return (
    <footer style={footerStyle} id="login">
      <FooterOverlay />

      <div style={linksContainerStyle}>
        <div style={contactStyle}>
          <h2 style={headingStyle}>Contact Us</h2>
          <p style={textStyle}>Jagiroad, N.H.27, Pin No-782410</p>
          <p style={textStyle}>
            1st Floor House, No 24, Hengrabari Rd, near Public Health Chariali, 
            GMC Ward Number 44, Ganeshguri, Guwahati, Assam 781036
          </p>
          <p style={textStyle}>+91 7002800428</p>
          <p style={textStyle}>+91 7002690597</p>
        </div>

        <div style={logoStyle}>
          <h2 style={{ ...headingStyle, fontSize: '32px', marginBottom: '1rem' }}>Mising Kitchen</h2>
          <p style={textStyle}>
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <img 
            src={images.spoon} 
            alt="spoon" 
            style={{ 
              width: '45px',
              margin: '15px 0',
            }} 
          />
          <div style={{ display: 'flex', marginTop: '1rem' }}>
            <FiFacebook style={iconStyle} />
            <FiTwitter style={iconStyle} />
            <FiInstagram style={iconStyle} />
          </div>
        </div>

        <div style={workStyle}>
          <h2 style={headingStyle}>Working Hours</h2>
          <p style={textStyle}>Monday-Friday:</p>
          <p style={textStyle}>08:00 am - 12:00 am</p>
          <p style={textStyle}>Saturday-Sunday:</p>
          <p style={textStyle}>07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div style={copyrightStyle}>
        <p style={{ ...textStyle, margin: 0 }}>2025 Mising Kitchen. All Rights reserved.</p>
        <p style={{ ...textStyle, margin: '1rem 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
          Made with ❤️ Design and Development by{' '}
          <a 
            href="https://www.rh-dynamics.software" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#d4af37',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'opacity 0.3s ease',
              ':hover': {
                opacity: 0.8,
                textDecoration: 'underline'
              }
            }}
          >
            RH Dynamics
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
