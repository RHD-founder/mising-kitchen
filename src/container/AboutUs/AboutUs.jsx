import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content">
      <div className="app__aboutus-content_about text-center">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" style={{ margin: '1rem auto' }} />
        <p className="p__opensans" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
          At Mising Kitchen, we blend traditional recipes with modern culinary techniques to create unforgettable dining experiences. 
          Our passion for quality ingredients and authentic flavors is reflected in every dish we serve.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
