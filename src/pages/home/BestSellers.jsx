import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BestSellers = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Filter best sellers
    const bestSellers = products.filter((item) => item.status === "Best Sellers");

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-6'>
            <div className='text-center'>
                <h2 className='title'>Best Sellers</h2>
                <p className='text-Black/75 mx-auto xl:px-28 px-6'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo voluptatibus alias aspernatur iusto error, amet numquam magni temporibus, cum odio explicabo quibusdam tenetur inventore dolorum dolorem. Impedit, sunt eos.
                </p>
            </div>

            {/* Best seller Product */}
            {bestSellers.length > 0 ? (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {bestSellers.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/shop/${item.id}`}>
                                <div className='overflow-hidden'>
                                    <img
                                        className='mx-auto w-full hover:scale-105 transition-all duration-300'
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <div>
                                    <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-black/50'>{item.category}</p>
                                    <p className='font-semibold'>${item.price}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p className='text-center mt-8'>No best sellers available at the moment.</p>
            )}
        </div>
    );
};

export default BestSellers;
