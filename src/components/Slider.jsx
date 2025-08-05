import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

import img1 from '../assets/home/01.jpg'
import img2 from '../assets/home/02.jpg'
import img3 from '../assets/home/03.png'
import img4 from '../assets/home/04.jpg'
import img5 from '../assets/home/05.png'


const Slider = () => {
    return (
        <div className='h-screen'>
            <Swiper

                rewind={true}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;