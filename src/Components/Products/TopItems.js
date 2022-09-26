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

const TopItems = () => {
  return (
    <div className='relative max-w-8xl top-[18rem] mx-auto mb-10'>
        <div className='bg-gray-200 p-2 w-full flex justify-between shadow-2xl'>
            <span className='text-slate-600 font-extrabold font-monospace text-xl text-left '>Top Selling Items</span> 
           <span className='text-md underline'> <Link to='' className='text-slate-600'>View All</Link></span>
            </div>


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
        <img src="/top/dress.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Fashion Wear </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$90</h5>
            <h6 className="text-sm font-extralight ">25 items left</h6>
            <Progress showInfo={false} percent={50} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/top/earbud.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Original Earbud </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$90</h5>
            <h6 className="text-sm font-extralight ">10 items left</h6>
            <Progress showInfo={false} percent={75} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/top/sneaker.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Men's Backet Ball Shoe </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$60</h5>
            <h6 className="text-sm font-extralight ">12 items left</h6>
            <Progress showInfo={false} percent={75} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/top/footwear.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Women Flat shoe </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$42</h5>
            <h6 className="text-sm font-extralight ">10 items left</h6>
            <Progress showInfo={false} percent={75} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/top/shirt.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Bundle Of Round Neck </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$11</h5>
            <h6 className="text-sm font-extralight ">5 items left</h6>
            <Progress showInfo={false} percent={91} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/top/stove.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Bruhm BGC Stove </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$90</h5>
            <h6 className="text-sm font-extralight ">24 items left</h6>
            <Progress showInfo={false} percent={40} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/top/tv.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-sm text-slate-600 font-bold">Samsung Smart Tv </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$90</h5>
            <h6 className="text-sm font-extralight ">0 item left</h6>
            <Progress showInfo={false} percent={100} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

      </Swiper>
      </div>
      <div className="mt-3">
      <div className=' grid sm:grid-cols-2 lg:grid-cols-4 gap-3  mx-auto'>
        <Link to='' className='bg-white shadow-2xl flex space-5 text-lg p-4'>
          <img src="store.png" className="h-10"/>
            <div className='relative top-1 left-5 font-bold text-slate-600'>Official Stores</div>
        </Link> 
        <Link to='' className='bg-white shadow-2xl flex space-5 text-lg p-4'>
          <img src="FreeDelivery.png" className="h-10"/>
            <div className='relative top-1 left-5 font-bold text-slate-600'>Free Delivery Services</div>
        </Link> 
        <Link to='' className='bg-white shadow-2xl flex space-5 text-lg p-4'>
          <img src="jumia-food.png" className="h-10"/>
            <div className='relative top-1 left-5 font-bold text-slate-600'>Hommie Foods</div>
        </Link> 

        <Link to='' className='bg-white shadow-2xl flex space-5 text-lg p-4'>
          <img src="JumiaGlobal.png" className="h-10"/>
            <div className='relative top-1 left-5 font-bold text-slate-600'>Hommie Global</div>
        </Link> 
    </div>
      </div>
    </div>
  )
}

export default TopItems