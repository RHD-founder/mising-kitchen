import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Jagiroad, N.H.27, Pin No-782410</p>
        <p className="p__opensans">1st Floor House, No 24, Hengrabari Rd, near Public Health Chariali, GMC Ward Number 44, Ganeshguri, Guwahati, Assam 781036</p>
        <p className="p__opensans">+91 7002800428</p>
        <p className="p__opensans">+91 7002690597</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="p__cormorant" style={{ color: '#DCCA87', fontSize: '32px', marginBottom: '1rem' }}>Mising Kitchen</h1>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Mising Kitchen. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
