import React from 'react'

import { SiVolkswagen } from "react-icons/si";
import { TbBrandCupra } from "react-icons/tb";
import { SiSkoda } from "react-icons/si";
import { SiPorsche } from "react-icons/si";
import { SiSeat } from "react-icons/si";
import { SiAudi } from "react-icons/si";

import { Link } from 'react-router-dom';

const DropDownMenu = () => {
    return (
        <div className='drop-down-menudiv'>
            <Link className='drop-down-menu-item' to="/home/audi"><li><SiAudi></SiAudi><span>Audi</span></li></Link>
            <Link className='drop-down-menu-item' to="/home/cupra"><li><TbBrandCupra></TbBrandCupra><span>Cupra</span></li></Link>
            <Link className='drop-down-menu-item' to="/home/porsche"><li> <SiPorsche></SiPorsche><span>Porche</span></li></Link>
            <Link className='drop-down-menu-item' to="/home/seat"> <SiSeat></SiSeat><span>Seat</span></Link>
            <Link className='drop-down-menu-item' to="/home/skoda"> <SiSkoda></SiSkoda><span>Skoda</span></Link>
            <Link className='drop-down-menu-item volkswagen' to="/home/volkswagen"> <SiVolkswagen></SiVolkswagen><span>Volkswagen</span></Link>
        </div>
    )
}

export default DropDownMenu