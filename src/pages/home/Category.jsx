import React from 'react';
import { Link } from 'react-router-dom';
// Importing images directly
import img1 from '../../assets/brand/01.png';
import img2 from '../../assets/brand/02.png';
import img3 from '../../assets/brand/03.png';
import img4 from '../../assets/brand/04.png';
import img5 from '../../assets/brand/05.png';

import firstImage from '../../assets/img/001.png'
import secondImage from '../../assets/img/01.png'
import thirdImage from '../../assets/img/02.png'
import fourthImage from '../../assets/img/03.png'
import fifthImage from '../../assets/img/04.png'
const Category = () => {
  // Array of company logos with direct imports
  const companyLogo = [
    { id: 1, brand: img1 },
    { id: 2, brand: img2 },
    { id: 3, brand: img3 },
    { id: 4, brand: img4 },
    { id: 5, brand: img5 },
  ];

  return (
    <div className='max-w-screen-xl xl:px-28 lg:px-20 mx-auto px-4'>
      {/* Brand Logo */}
      <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
        {companyLogo.map(({ id, brand }) => (
          <div key={id}>
            <img src={brand} alt={`Company logo ${id}`} />
          </div>
        ))}
      </div>
      {/* category */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold uppercase md:rotate-90 text-center bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex'>
          Explore new and popular styles
        </p>
        <div className='overflow-hidden'>
          <Link to="/"><img src={firstImage} alt="" className='w-full hover:scale-105 transition-all duration-200 '/></Link>
        </div>
        <div className='md:w-1/2'>
          <div className='grid grid-cols-2 gap-2'>
          <Link to="/"><img src={secondImage} alt="" /></Link>
          <Link to="/"><img src={thirdImage} alt="" /></Link>
          <Link to="/"><img src={fourthImage} alt="" /></Link>
          <Link to="/"><img src={fifthImage} alt="" /></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Category;
