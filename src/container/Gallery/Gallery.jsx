import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import galleryImages from '../../constants/galleryImages';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Our Gallery" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Experience the authentic flavors and vibrant atmosphere of Mising Kitchen through our photo gallery.</p>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div 
              className="app__gallery-images_card flex__center" 
              key={`gallery_image-${index + 1}`}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <img 
                src={image} 
                alt={`gallery-${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <a 
                href={image} 
                target="_blank" 
                rel="noopener noreferrer"
                className="gallery__image-icon"
                style={{
                  position: 'absolute',
                  color: '#fff',
                  fontSize: '2rem',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <BsInstagram />
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort 
            className="gallery__arrow-icon" 
            onClick={() => scroll('left')}
            style={{
              fontSize: '2.5rem',
              padding: '0.5rem',
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: '50%',
              cursor: 'pointer',
              zIndex: 2
            }}
          />
          <BsArrowRightShort 
            className="gallery__arrow-icon" 
            onClick={() => scroll('right')}
            style={{
              fontSize: '2.5rem',
              padding: '0.5rem',
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: '50%',
              cursor: 'pointer',
              zIndex: 2
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
