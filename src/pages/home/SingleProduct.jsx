import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    // get product id
    const { id } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                if (!response.ok) throw new Error("Network response was not ok");


                const data = await response.json();
                const product = data.filter((p) => p.id == id);
                setProducts(product[0]);

            } catch (error) {
                console.log("Error fetchingv data: ", error);
            }
        }
        fetchData();
        // scroll effect
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [id])

    const { title, category, prices, image, status } = products;

    return (
        <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-6'>
            <div className='p-3 max-w-7xl m-auto'>
                <div className='mt-5'>
                    <a href="/" className='text-gray-600'>Home</a>
                    <a href="/shop" className='font-bold text-black'> / Shop</a>
                </div>
                <div className='mt-4 sm:mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                        <div>
                            <img src={image} alt="" className='w-full' />
                        </div>
                        {/* product details */}
                        <div>
                            <h1 className='title text-left'>{title}</h1>
                            <p className='mt-3 text-gray-600 text-base leading-6 sm:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, fuga. Quaerat, dolorum tempore. Sunt id laboriosam fugiat culpa commodi veritatis sint repellat, vitae dolor quasi provident autem corporis quo sequi.</p>
                            <span className='my-2 text-xl text-yellow-600 flex items-center gap-1 sm:my-4'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <p className='text-xl text-red-500 font-semibold sm:text-2xl'></p>

                            <div className='mt-3'>
                                <div className='text-left flex flex-col gap-2 w-full'>
                                    <label className='font-semibold'>
                                        Quantity
                                    </label>
                                    <input type="number" id='price' defaultValue={1} className='border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500' />
                                </div>
                                <div className='w-full text-left my-4'>
                                    <button className='flex justify-center items-center gap-2 w-ful py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6'>Confirmed Order <span><FaArrowAltCircleRight /></span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='text-black/75 mt-12'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam ducimus voluptatibus quisquam dolore minima ipsa. Cum earum quibusdam magni doloribus aliquam sint. Excepturi dolorem nisi mollitia minima quasi!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam ducimus voluptatibus quisquam dolore minima ipsa. Cum earum quibusdam magni doloribus aliquam sint. Excepturi dolorem nisi mollitia minima quasi!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam ducimus voluptatibus quisquam dolore minima ipsa. Cum earum quibusdam magni doloribus aliquam sint. Excepturi dolorem nisi mollitia minima quasi!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe veniam ducimus voluptatibus quisquam dolore minima ipsa. Cum earum quibusdam magni doloribus aliquam sint. Excepturi dolorem nisi mollitia minima quasi!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct