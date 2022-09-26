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
import { Navigation ,Pagination } from "swiper";
import {Link} from 'react-router-dom'
const FlashSale = () => {
  return (
    <div className='relative max-w-8xl top-[12rem] mx-auto'>
        <div className='bg-red-500 p-2 w-full flex justify-between'>
            <span className='text-white font-semibold font-monospace text-xl '>Flash Sales |<span className="hidden sm:inline-block">Free Delivery <PedalBikeOutlinedIcon /></span></span> 
           <span className='text-md underline'> <Link to='' className='text-white'>View All</Link></span>
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
          <img src="/flash/earpiece.jpg" className="h-[1rem]" />

          <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold">Apple Earpiece </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$20</h5>
            <h6 className="text-sm font-extralight ">5 items left</h6>
            <Progress showInfo={false} percent={90} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>
     

        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
          <img src="/flash/tvset.jpg" className="h-[1rem]" />

          <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold">43" Smart Tv </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$240</h5>
            <h6 className="text-sm font-extralight ">2 items left</h6>
            <Progress showInfo={false}   percent={90} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/sk.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold"> Sneaker</h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$90</h5>
            <h6 className="text-sm font-extralight ">20 items left</h6>
            <Progress showInfo={false} percent={50} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/tabletop.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold">Fridge </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$600</h5>
            <h6 className="text-sm font-extralight ">4 items left</h6>
            <Progress showInfo={false}  percent={80} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/watch.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold">Wrist Watch </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$100</h5>
            <h6 className="text-sm font-extralight ">12 items left</h6>
            <Progress showInfo={false}  percent={70} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

       
        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/headset.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold">Headset </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$80</h5>
            <h6 className="text-sm font-extralight ">3 items left</h6>
            <Progress showInfo={false}  percent={95} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/phone.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold">Iphone x </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$200</h5>
            <h6 className="text-sm font-extralight ">3 items left</h6>
            <Progress  showInfo={false} percent={95} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/waist.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold">Waist Trainer </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$90</h5>
            <h6 className="text-sm font-extralight ">8 items left</h6>
            <Progress showInfo={false} percent={89} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/' className="relative transition-all hover:scale-105">
        <img src="/flash/kettle.jpg" className="h-[5rem]" />

        <div className="relative">
            <h3 className="font-monospace text-md text-slate-600 font-bold">Silver Kettle </h3>
            <h5 className="relative bottom-2 text-extrabold text-md ">$90</h5>
            <h6 className="text-sm font-extralight ">1 items left</h6>
            <Progress showInfo={false} percent={99} size="small" status="active" className="relative bottom-5"/>
          </div>
          </Link>
        </SwiperSlide>
      </Swiper>
      </div>

    </div>
  )
}

export default FlashSale