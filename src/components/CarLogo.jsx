import React from 'react'

import { SiVolkswagen } from "react-icons/si";
import { TbBrandCupra } from "react-icons/tb";
import { SiSkoda } from "react-icons/si";
import { SiPorsche } from "react-icons/si";
import { SiSeat } from "react-icons/si";
import { SiAudi } from "react-icons/si";

import { Link } from "react-router-dom"

const CarLogo = () => {
    return (
        <div className='car-logodiv'>
            <Link to="/home/audi" className='car-logo'>
                <SiAudi />
            </Link>
            <Link to="/home/cupra" className='car-logo'>
                <TbBrandCupra />
            </Link>
            <Link to="/home/porsche" className='car-logo'>
                <SiPorsche />
            </Link>
            <Link to="/home/seat" className='car-logo'>
                <SiSeat />
            </Link>
            <Link to="/home/skoda" className='car-logo'>
                <SiSkoda />
            </Link>
            <Link to="/home/volkswagen" className='car-logo'>
                <SiVolkswagen />
            </Link>
        </div>
    )
}

export default CarLogo