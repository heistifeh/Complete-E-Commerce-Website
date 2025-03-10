import React from 'react'
const Collections = () => {
  return (
    <div className='bg-[url("/images/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-6 my-20'>
        <div className='h-[580px] flex justify-between  md:flex-row items-center'>
            <div className='md:w-1/2'></div>
            <div className='md:w-1/2'>
            <img src="/images/zara-logo.png" alt="" />
            <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate adipisci delectus provident ducimus dolor earum harum sequi molestias, explicabo amet nulla vitae officia a recusandae aliquam aperiam quod? Magni!
            </p>
            <button className='px-6 py-2 bg-white text-black mb-4 font-semibold'> See collection</button>
            </div>
        </div>
    </div>
  )
}

export default Collections