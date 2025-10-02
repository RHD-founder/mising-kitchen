import React, { useEffect, useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';

// Import data directly to ensure it's available
import menuData from '../../constants/data';

const SpecialMenu = () => {
  const [menuCategories, setMenuCategories] = useState({
    firstRow: [],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  });

  useEffect(() => {
    // First Row - Thalis and Specials
    const firstRow = [
      { 
        title: 'Thali Items', 
        items: Array.isArray(menuData.thaliItems) ? menuData.thaliItems : [] 
      },
      { 
        title: 'Mising Thalis', 
        items: Array.isArray(menuData.misingThalis) ? menuData.misingThalis : [] 
      },
      { 
        title: 'Normal Thalis', 
        items: Array.isArray(menuData.normalThalis) ? menuData.normalThalis : [] 
      },
    ];

    // Second Row - Chicken and Paneer
    const secondRow = [
      { 
        title: 'Paneer Specials', 
        items: Array.isArray(menuData.paneerItems) ? menuData.paneerItems : [] 
      },
      { 
        title: 'Broiler Chicken', 
        items: Array.isArray(menuData.broilerChicken) ? menuData.broilerChicken : [] 
      },
      { 
        title: 'Domestic Chicken', 
        items: Array.isArray(menuData.domesticChicken) ? menuData.domesticChicken : [] 
      },
    ];

    // Third Row - Meat and Fish
    const thirdRow = [
      { 
        title: 'Variety Meat Curry', 
        items: Array.isArray(menuData.varietyMeatCurry) ? menuData.varietyMeatCurry : [] 
      },
      { 
        title: 'Variety Fish Curry', 
        items: Array.isArray(menuData.varietyFishCurry) ? menuData.varietyFishCurry : [] 
      },
    ];

    // Fourth Row - Special Boil Items and Others
    const fourthRow = [
      { 
        title: 'Special Boil Items', 
        items: Array.isArray(menuData.specialBoilItems) ? menuData.specialBoilItems : [] 
      },
      { 
        title: 'Khorikat Dishes', 
        items: Array.isArray(menuData.khorikatDishes) ? menuData.khorikatDishes : [] 
      },
      { 
        title: 'Others', 
        items: Array.isArray(menuData.others) ? menuData.others : [] 
      },
    ];

    setMenuCategories({
      firstRow: firstRow.filter(category => category.items.length > 0),
      secondRow: secondRow.filter(category => category.items.length > 0),
      thirdRow: thirdRow.filter(category => category.items.length > 0),
      fourthRow: fourthRow.filter(category => category.items.length > 0)
    });

    // Log the data for debugging
    console.log('Menu Data Loaded:', { firstRow, secondRow });
    console.log('Available Data:', menuData);
  }, []);

  // Render a single menu category
  const renderMenuCategory = (category, index) => {
    // Skip rendering if no items are available
    if (!category.items || category.items.length === 0) {
      console.warn(`No items found for category: ${category.title}`);
      return null;
    }
    
    return (
      <div key={category.title + index} className="app__specialMenu-category flex__center">
        <p className="app__specialMenu-menu_heading">{category.title}</p>
        <div className="app__specialMenu_menu_items">
          {category.items.map((item, idx) => (
            <MenuItem 
              key={item.title + idx} 
              title={item.title || 'No Title'} 
              price={item.price || 'N/A'} 
              tags={item.tags || ''} 
            />
          ))}
        </div>
      </div>
    );
  };

  // Reorganize menu items into logical groups
  const menuSections = [
    {
      title: 'Thali Specials',
      categories: [
        ...(menuCategories.firstRow || []),
        ...(menuCategories.thirdRow || [])
      ].filter(cat => cat.title.includes('Thali'))
    },
    {
      title: 'Main Course',
      categories: [
        ...(menuCategories.firstRow || []),
        ...(menuCategories.secondRow || [])
      ].filter(cat => 
        cat.title.includes('Paneer') || 
        cat.title.includes('Chicken') ||
        cat.title.includes('Meat')
      )
    },
    {
      title: 'Seafood Selections',
      categories: [
        ...(menuCategories.thirdRow || []),
        ...(menuCategories.fourthRow || [])
      ].filter(cat => 
        cat.title.includes('Fish') || 
        cat.title.includes('Boil')
      )
    },
    {
      title: 'Specialty Dishes',
      categories: [
        ...(menuCategories.fourthRow || [])
      ].filter(cat => 
        cat.title.includes('Khorikat') || 
        cat.title === 'Others'
      )
    }
  ].filter(section => section.categories.length > 0);

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Authentic Mising Cuisine" />
        <h1 className="headtext__cormorant">Our Special Menu</h1>
      </div>

      <div className="app__specialMenu-container">
        {menuSections.map((section, sectionIndex) => (
          <div key={section.title} className="app__specialMenu-section">
            <h2 className="app__specialMenu-sectionTitle">{section.title}</h2>
            <div className="app__specialMenu-categories">
              {section.categories.map((category, catIndex) => (
                <div 
                  key={`${section.title}-${catIndex}`} 
                  className={`app__specialMenu-category ${
                    section.categories.length === 1 ? 'app__specialMenu-category--full' : ''
                  }`}
                >
                  <h3 className="app__specialMenu-categoryTitle">{category.title}</h3>
                  <div className="app__specialMenu_menu_items">
                    {category.items.map((item, itemIndex) => (
                      <MenuItem 
                        key={`${category.title}-${itemIndex}`}
                        title={item.title || 'No Title'} 
                        price={item.price || 'N/A'} 
                        tags={item.tags || ''} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="app__specialMenu-footer">
        <p className="p__opensans" style={{ marginBottom: '1rem' }}>
          Ask your server about our daily specials and seasonal offerings
        </p>
        <button type="button" className="custom__button">View Full Menu</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
