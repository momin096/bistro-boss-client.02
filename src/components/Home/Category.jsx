import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './category.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../SectionTitle';

const Category = () => {
    return (
        <div className='container mx-auto  p-5 md:w-auto md:h-auto my-20 '>

            <SectionTitle heading={'order Online'} subHeading={'From 11:00am to 10:00pm'} />

            <Swiper

                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <div className='h-[400px] w-[300px]'>
                    <SwiperSlide className='relative' >
                        <img className='w-full h-full' src={slide1} alt="" />
                        <div className='absolute bg-gray-600/50 w-full  bottom-5 '>
                            <h2 className='uppercase text-3xl text-shadow-lg  font-medium'>Salad</h2>
                        </div>
                    </SwiperSlide>
                </div>
                <SwiperSlide className='relative' >
                    <img className='w-full h-full' src={slide2} alt="" />
                    <div className='absolute bg-gray-600/50 w-full  bottom-5 '>
                        <h2 className='uppercase text-3xl text-shadow-lg  font-medium'>Pizza</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative' >
                    <img className='w-full h-full' src={slide3} alt="" />
                    <div className='absolute bg-gray-600/50 w-full  bottom-5 '>
                        <h2 className='uppercase text-3xl text-shadow-lg  font-medium'>soup</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative' >
                    <img className='w-full h-full' src={slide4} alt="" />
                    <div className='absolute bg-gray-600/50 w-full  bottom-5 '>
                        <h2 className='uppercase text-3xl text-shadow-lg  font-medium'>Dessert</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative' >
                    <img className='w-full h-full' src={slide5} alt="" />
                    <div className='absolute bg-gray-600/50 w-full  bottom-5 '>
                        <h2 className='uppercase text-3xl text-shadow-lg  font-medium'>Salad</h2>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Category;