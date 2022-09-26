import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Progress } from 'antd';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";

// import required modules
import { Pagination,Navigation,  } from "swiper";
import {Link} from 'react-router-dom'


const BrandProducts = () => {
  return (
    <div className='relative max-w-8xl top-[14rem] mx-auto '>
  <div className="bg-white shadow-2xl p-1">
  <Swiper
      slidesPerView={7}
      spaceBetween={30}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        360: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
      }}
  >
    <SwiperSlide>
      <Link to='/' className="relative transition-all hover:scale-105">
      <img src="/Brand/0Beauty.png" />
      </Link>
    </SwiperSlide>

    <SwiperSlide>
      <Link to='/' className="relative transition-all hover:scale-105">
      <img src="/Brand/0Computer.png" />
      </Link>
    </SwiperSlide>

    <SwiperSlide>
      <Link to='/' className="relative transition-all hover:scale-105">
      <img src="/Brand/L'Oreal.png" />
      </Link>
    </SwiperSlide>

    <SwiperSlide>
      <Link to='/' className="relative transition-all hover:scale-105">
      <img src="/Brand/0Electronics.png" />
      </Link>
    </SwiperSlide>

    <SwiperSlide>
      <Link to='/' className="relative transition-all hover:scale-105">
      <img src="/Brand/0Home&Office.png" />
      </Link>
    </SwiperSlide>

    <SwiperSlide>
      <Link to='/' className="relative transition-all hover:scale-105">
      <img src="/Brand/0Mobile_Access.png" />
      </Link>
    </SwiperSlide>

    <SwiperSlide>
      <Link to='/' className="relative transition-all hover:scale-105">
      <img src="/Brand/Supermarket.png" />
      </Link>
    </SwiperSlide>
  </Swiper>
  </div>

</div>
  )
}

export default BrandProducts