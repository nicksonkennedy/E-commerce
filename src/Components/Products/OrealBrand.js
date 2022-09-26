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

const OrealBrand = () => {
  return (
    <div>
        <div className='bg-red-600 shadow-2xl p-2 w-full flex justify-between '>
            <span className='text-white font-extrabold font-monospace text-md text-left '>Helmat Brand Day <br/><span className="text-[12px]">Up to 40% off + Free Shipping</span></span> 
           <span className='text-md underline'> <Link to='' className='text-white'>View All</Link></span>
            </div>


      <div className="bg-white shadow-2xl p-1">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
       
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/helmat/bag.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">School Bag </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$50</h5>
            <h6 className="text-sm font-extralight ">09 items left</h6>
            <Progress showInfo={false} percent={80} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/helmat/yam.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Mini Phone </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$120</h5>
            <h6 className="text-sm font-extralight ">05 items left</h6>
            <Progress showInfo={false} percent={90} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>
       <SwiperSlide>
          <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/helmat/android.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Android Phone </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$230</h5>
            <h6 className="text-sm font-extralight ">25 items left</h6>
            <Progress showInfo={false} percent={50} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/helmat/cooker.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Rice Cooker </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$30</h5>
            <h6 className="text-sm font-extralight ">4 items left</h6>
            <Progress showInfo={false} percent={90} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/helmat/wardrope.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Portable Wardrope </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$130</h5>
            <h6 className="text-sm font-extralight ">3 items left</h6>
            <Progress showInfo={false} percent={80} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/helmat/earbud.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Wireless Earbud </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$110</h5>
            <h6 className="text-sm font-extralight ">10 items left</h6>
            <Progress showInfo={false} percent={70} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

      </Swiper>
      </div>
      
    </div>
  )
}

export default OrealBrand