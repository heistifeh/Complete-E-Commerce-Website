import React from 'react'
import bannerImg from '../../assets/image-product.png'
import { BiShoppingBag } from 'react-icons/bi'
const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 lg:px-20'>
      <div className='py-28 flex justify-between flex-col md:flex-row-reverse items-center gap-14'>
        
        <div className='md:w-1/2'>
          <img src={bannerImg} alt="" />
        </div>
        <div className='md:w-1/2'>
          <h1 className='text-5xl font-light mb-5'>
            Collections
          </h1>
          <p className='text-xl'>You can explore any shop and different collection</p>
          <button className='bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'>
            <BiShoppingBag /> Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner