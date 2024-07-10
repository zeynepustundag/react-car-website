import React from 'react'

import CarLogo from "../../components/CarLogo"

const FindCar = () => {
  return (
    <div className='find-cardiv'>
      <h1>Find Car</h1>
      <h3>Which brand of vehicle are you looking for?</h3>
      <CarLogo></CarLogo>
    </div>
  )
}

export default FindCar