import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Grid } from 'swiper/modules';
import 'swiper/css/pagination';
import "swiper/css/grid";

const Models = (props) => {
  return (
    <div className='modelsdiv'>
      <h1 className='models-title'>Models</h1>
      <Swiper className='models-swiperdiv'
        modules={[Pagination, A11y, Grid]}
        spaceBetween={20}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row",
        }}
        /*  slidesPerColumn= {2}
          slidesPerColumnFill="row" */
        pagination={
          { clickable: true }
        }
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        {props.ModelsData.map((item) => {
          return (
            <SwiperSlide key={item.modelId}>
              <div className='model-item'>
                <img src={item.modelImg} alt="" />
                <h4>{item.modelName}</h4>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Models