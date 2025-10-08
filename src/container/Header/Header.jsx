import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import heroImage from '../../assets/hero.jpg';
import './Header.css';

const Header = () => {
  const headerStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const bgImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(8px)',
    transform: 'scale(1.05)',
    zIndex: 0,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(5, 15, 5, 0.7), rgba(10, 25, 10, 0.6))',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
  };

  return (
    <div className="app__header section__padding" id="home" style={headerStyle}>
      <div style={bgImageStyle} aria-hidden="true"></div>
      <div style={overlayStyle} aria-hidden="true"></div>
      <div className="app__wrapper" style={contentStyle}>
        <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavour" />
          <h1 className="app__header-h1">The Key To Fine Dining</h1>
        </div>

        <div className="app__wrapper_img">
          <img src={images.wc} alt="header_img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
