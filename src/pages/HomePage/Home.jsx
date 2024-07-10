import React from 'react'

import SwiperPart from './SwiperPart'
import CarLogo from '../../components/CarLogo'
import Content from '../../components/Content'
import HomeContentData from '../../helpers/HomeContentData'

const Home = () => {
  return (
    <div className='homediv'>
      <SwiperPart></SwiperPart>
      <CarLogo></CarLogo>
      <Content ContentData={HomeContentData}></Content>
    </div>
  )
}

export default Home