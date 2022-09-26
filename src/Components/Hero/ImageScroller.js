import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Progress } from 'antd';
import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";

// import required modules
import { Navigation ,Pagination, Autoplay} from "swiper";
const ImageScroller = () => {

  return (
    <div>
        <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination ,Autoplay]}
      className="mySwiper"
      >
        <SwiperSlide>
        <div  className='relative'>
        <img src='slide.png' className='w-full object-cover' />
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div  className='relative'>
        <img src='slide2.jpg' className='w-full object-cover ' />
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div  className='relative'>
        <img src='slide3.png' className='w-full object-cover' />
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div  className='relative'>
        <img src='slider4.png' className='w-full object-cover' />
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageScroller