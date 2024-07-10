import React from 'react'

import { Link } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import swiperfoto1 from "../../assets/swiperfoto1.webp"
import swiperfoto2 from "../../assets/swiperfoto2.webp"
import swiperfoto3 from "../../assets/swiperfoto3.webp"
import swiperfoto4 from "../../assets/swiperfoto4.webp"

import { Navigation,Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

 const SwiperPart = () => {
  return (
    <Swiper className='swiperdiv'
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={
         {clickable: true}
        }
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='swiper-slide-content'>
          <img className='swiper-foto' src={swiperfoto1}></img>
          <h1 className='swiper-foto-title'>New Superb</h1>
          <Link className='swiper-foto-buttonlink' ><button className='swiper-foto-button'>DISCOVER</button></Link>    
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper-slide-content'>
          <img className='swiper-foto' src={swiperfoto2}></img>
          <h1 className='swiper-foto-title'>New Tiguan</h1>
          <Link className='swiper-foto-buttonlink'><button className='swiper-foto-button'>DISCOVER</button></Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper-slide-content'>
          <img className='swiper-foto' src={swiperfoto3}></img>
          <h1 className='swiper-foto-title'>Second Hand Vehicle</h1>
          <Link className='swiper-foto-buttonlink' ><button className='swiper-foto-button'>View Vehicle</button></Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper-slide-content'>
          <img className='swiper-foto' src={swiperfoto4}></img>
          <h1 className='swiper-foto-title'>New Address Of The Tire</h1>
          <Link className='swiper-foto-buttonlink' ><button className='swiper-foto-button'>Start Shopping</button></Link>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperPart


