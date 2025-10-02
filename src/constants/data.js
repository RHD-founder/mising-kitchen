import images from './images';

const thaliItems = [
  {
    title: 'Veg Thali',
    price: '₹190',
    tags: 'A complete vegetarian meal',
  },
  {
    title: 'Paneer Thali',
    price: '₹470',
    tags: 'Paneer based thali',
  },
];

const paneerItems = [
  {
    title: 'Paneer Curry',
    price: '₹410',
    tags: 'Homemade cottage cheese in rich gravy',
  },
  {
    title: 'Paneer Butter Masala',
    price: '₹450',
    tags: 'Creamy and rich paneer dish',
  },
];

const normalThalis = [
  {
    title: 'Normal Chicken Thali',
    price: '₹380',
    tags: 'Chicken thali with rice and sides',
  },
  {
    title: 'Normal Pork Thali',
    price: '₹380',
    tags: 'Pork thali with rice and sides',
  },
  {
    title: 'Normal Fish Thali',
    price: '₹380',
    tags: 'Fish thali with rice and sides',
  },
];

const misingThalis = [
  {
    title: 'Mising Chicken Thali',
    price: '₹480',
    tags: 'Traditional Mising style chicken thali',
  },
  {
    title: 'Mising Pork Thali',
    price: '₹480',
    tags: 'Traditional Mising style pork thali',
  },
  {
    title: 'Mising Fish Thali',
    price: '₹480',
    tags: 'Bhukua / Pabha / Borali / Rohu fish',
  },
  {
    title: 'Mising Local Chicken Thali',
    price: '₹580',
    tags: 'Free-range chicken thali',
  },
  {
    title: 'Mising Duck Thali',
    price: '₹590',
    tags: 'Duck meat thali',
  },
  {
    title: 'Mising Mutton Thali',
    price: '₹590',
    tags: 'Mutton thali with traditional sides',
  },
];

const khorikatDishes = [
  {
    title: 'Pork Khorika',
    price: '₹370',
    tags: 'Grilled pork skewers',
  },
  {
    title: 'Chicken Khorika',
    price: '₹370',
    tags: 'Grilled chicken skewers',
  },
  {
    title: 'Fish Khorika / Fry',
    price: '₹370',
    tags: 'Grilled or fried fish',
  },
];

const broilerChicken = [
  {
    title: 'Broiler Chicken Fry',
    price: '₹350',
    tags: 'Crispy fried chicken',
  },
  {
    title: 'Broiler Chicken Curry',
    price: '₹350',
    tags: 'With Potato / Till / B-Shoot / Kaldi / Pithaguri / Mustard Seeds',
  },
];
const domesticChicken =[
  {
    title: 'Chicken Fry',
    price: '₹₹410',
    tags: 'Chicken Fry',
  },
  {
    title: 'Chicken Potato Curry',
    price: '₹410',
    tags: 'Chicken Potato Curry',
  },
  {
    title: 'Chicken Curry',
    price: '₹410',
    tags: '(Till / Mustard Seeds / B-Shoot / Kaldi / Pithaguri)',
  },
];

// Add more categories as needed...


const varietyMeatCurry = [
  {
    title: 'Mutton Fry',
    price: '₹500',
    tags: 'Mutton Fry',
  },
  {
    title: 'Mutton Curry',
    price: '₹500',
    tags: 'Mutton Curry',
  },
  {
    title: 'Duck Meat Fry',
    price: '₹500',
    tags: 'Duck Meat Fry',
  },
  {
    title: 'Duck Meat with Kumura / B-Shoot / Black Dal',
    price: '₹500',
    tags: 'Duck Meat with Kumura / B-Shoot / Black Dal',
  },
  {
    title: 'Pork Fry',
    price: '₹350',
    tags: 'Pork Fry',
  },
  {
    title: 'Pork Curry',
    price: '₹360',
    tags: '(Black dal / B-Shoot / Lai Shak / Till / Kaldi)',
  },
  {
    title: 'Pork Aran',
    price: '₹340',
    tags: 'Pork Aran',
  },
  {
    title: 'Smoked Pork Fry / Curry',
    price: '₹390',
    tags: 'Smoked Pork Fry / Curry',
  },
];

const varietyFishCurry = [
  {
    title: 'Rou Fish Fry',
    price: '₹270',
    tags: 'Rou Fish Fry',
  },
  {
    title: 'Rou Fish Curry',
    price: '₹280',
    tags: 'Rou Fish Curry',
  },
  {
    title: 'Rou Pitika',
    price: '₹280',
    tags: 'Rou Pitika',
  },
  {
    title: 'Small Fish Fry',
    price: '₹290',
    tags: 'Small Fish Fry',
  },
  {
    title: 'Small Fish Curry',
    price: '₹290',
    tags: 'Small Fish Curry',
  },
  {
    title: 'Small Fish Patot Diya',
    price: '₹290',
    tags: 'Small Fish Patot Diya',
  },
  {
    title: 'Bhakua Fish Fry',
    price: '₹350',
    tags: 'Bhakua Fish Fry',
  },
  {
    title: 'Bhakua Fish Curry',
    price: '₹350',
    tags: 'Bhakua Fish Curry',
  },
  {
    title: 'Ari Fish Fry',
    price: '₹390',
    tags: 'Ari Fish Fry',
  },
  {
    title: 'Ari Fish Curry',
    price: '₹390',
    tags: 'Ari Fish Curry',
  },
  {
    title: 'Pabha Fish Fry',
    price: '₹390',
    tags: 'Pabha Fish Fry',
  },
  {
    title: 'Pabha Fish Curry',
    price: '₹390',
    tags: 'Pabha Fish Curry',
  },
  {
    title: 'Sol Fish Fry',
    price: '₹390',
    tags: 'Sol Fish Fry',
  },
  {
    title: 'Sol Fish Curry',
    price: '₹390',
    tags: 'Sol Fish Curry',
  },
  {
    title: 'Borali Fish Fry',
    price: '₹370',
    tags: 'Borali Fish Fry',
  },
  {
    title: 'Borali Fish Curry',
    price: '₹370',
    tags: '(Fish cooked with Outenga / Alu-Bilahi / Sorsori / B-Shoot)',
  },
];

const specialBoilItems = [
  {
    title: 'Chicken Boil',
    price: '₹360',
    tags: '(Lai Shak / Pithaguri / B-Shoot / Vegetable)',
  },
  {
    title: 'Local Chicken Boil',
    price: '₹410',
    tags: '(Lai Shak / Pithaguri / B-Shoot / Vegetable)',
  },
  {
    title: 'Pork Boil',
    price: '₹360',
    tags: '(Outenga / Lai Shak / Pithaguri / B-Shoot / Vegetable)',
  },
  {
    title: 'Rou / Small Fish Boil',
    price: '₹290',
    tags: '(Outenga / Lai Shak / Herbs / B-Shoot / Vegetable)',
  },
  {
    title: 'Bhakuwa Fish Boil',
    price: '₹360',
    tags: '(Outenga / Lai Shak / Herbs / B-Shoot / Vegetable)',
  },
  {
    title: 'Ari Fish Boil',
    price: '₹400',
    tags: '(Outenga / Lai Shak / Herbs / B-Shoot / Vegetable)',
  },
];

const others = [
  {
    title: 'Rice / Dal / Vegetables',
    price: '₹130',
    tags: 'Rice / Dal / Vegetables',
  },
];
export default { 
  thaliItems, 
  paneerItems, 
  normalThalis, 
  misingThalis, 
  khorikatDishes, 
  broilerChicken,
  domesticChicken,
  others,
  specialBoilItems,
  varietyFishCurry,
  varietyMeatCurry
};
