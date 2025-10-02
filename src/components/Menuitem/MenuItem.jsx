import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <article className="app__menuitem">
    <div className="app__menuitem-content">
      <div className="app__menuitem-details">
        <h3 className="p__cormorant app__menuitem-title">{title}</h3>
        {tags && (
          <p className="p__opensans app__menuitem-tags">
            {Array.isArray(tags) ? tags.join(' • ') : tags}
          </p>
        )}
      </div>
      <div className="app__menuitem-price">
        <span className="p__cormorant">{price}</span>
      </div>
    </div>
  </article>
);

export default MenuItem;
