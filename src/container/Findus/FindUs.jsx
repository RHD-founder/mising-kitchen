import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const containerStyle = {
    backgroundColor: '#0a1e0f',
    color: '#ffffff',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  };

  const wrapperStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 2,
  };

  const infoStyle = {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '2rem',
  };

  const imageStyle = {
    flex: 1,
    marginLeft: '2rem',
    position: 'relative',
    minHeight: '500px',
    width: '100%',
  };

  return (
    <div id="contact" style={containerStyle}>
      <div style={wrapperStyle}>
        <div style={infoStyle}>
          <SubHeading title="Contact" />
          <h1 style={{
            fontFamily: 'Cormorant Upright, serif',
            color: '#d4af37',
            fontWeight: 700,
            fontSize: '64px',
            lineHeight: '1.2',
            marginBottom: '2rem',
            position: 'relative',
          }}>
            Find Us
            <span style={{
              content: "''",
              position: 'absolute',
              bottom: '-10px',
              left: 0,
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #d4af37 0%, #f5d76e 100%)',
            }}></span>
          </h1>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{
              color: '#a9b8b1',
              fontFamily: 'Open Sans, sans-serif',
              marginBottom: '1rem',
              lineHeight: '1.8',
              fontSize: '1rem',
            }}>Jagiroad, N.H.27, Pin No-782410</p>
            
            <p style={{
              color: '#a9b8b1',
              fontFamily: 'Open Sans, sans-serif',
              marginBottom: '2rem',
              lineHeight: '1.8',
              fontSize: '1rem',
            }}>1st Floor House, No 24, Hengrabari Rd, near Public Health Chariali, GMC Ward Number 44, Ganeshguri, Guwahati, Assam 781036</p>
            
            <p style={{
              color: '#d4af37',
              fontFamily: 'Cormorant Upright, serif',
              fontWeight: 600,
              fontSize: '1.2rem',
              margin: '2rem 0',
            }}>Opening Hours</p>
            
            <p style={{
              color: '#a9b8b1',
              fontFamily: 'Open Sans, sans-serif',
              marginBottom: '0.5rem',
              lineHeight: '1.8',
              fontSize: '1rem',
            }}>Mon - Fri: 10:00 am - 02:00 am</p>
            
            <p style={{
              color: '#a9b8b1',
              fontFamily: 'Open Sans, sans-serif',
              marginBottom: '2rem',
              lineHeight: '1.8',
              fontSize: '1rem',
            }}>Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          
          <button type="button" style={{
            backgroundColor: '#d4af37',
            color: '#0a1e0f',
            border: 'none',
            padding: '0.8rem 2rem',
            fontWeight: 600,
            borderRadius: '4px',
            fontFamily: 'Cormorant Upright, serif',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '1.5rem',
          }}>
            Visit Us
          </button>
        </div>

        <div style={imageStyle}>
          <img 
            src={images.wc} 
            alt="findus" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }} 
          />
        </div>
      </div>
    </div>
  );
};
export default FindUs;
