import React from 'react'

import { Link } from 'react-router-dom'

import { FaRegWindowClose } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const SideBar = ({ setMenuClick }) => {

    const CloseMenuHandler = () => {
        setMenuClick(false);
    }

    return (
        <div className='sidebardiv'>
            <div className='close-logo' onClick={CloseMenuHandler}>
                <FaRegWindowClose />
            </div>
            <div className='sidebar-search'>
                <IoSearch className='ioSearch' />
                <p>| Search</p>
            </div>
            <div className='sidebar-links'>
                <Link to="/"><button className='sidebar-link'>Home</button></Link>
                <Link to="/home/find-car"><button className='sidebar-link'>Find Car</button></Link>
                <button className="sidebar-link brands">Brands  </button>
                <div className='brands-link-div' onClick={(e) => e.stopPropagation()}>
                    <Link className='drop-down-menu-item sidebar' to="/home/audi"><li><span>Audi</span></li></Link>
                    <Link className='drop-down-menu-item sidebar' to="/home/cupra"><li><span>Cupra</span></li></Link>
                    <Link className='drop-down-menu-item sidebar' to="/home/porsche"><li><span>Porche</span></li></Link>
                    <Link className='drop-down-menu-item sidebar' to="/home/seat"><span>Seat</span></Link>
                    <Link className='drop-down-menu-item sidebar' to="/home/skoda"><span>Skoda</span></Link>
                    <Link className='drop-down-menu-item volkswagen sidebar' to="/home/volkswagen"><span>Volkswagen</span></Link>
                </div>
                <Link to="/home/campaigns"><button className='sidebar-link campaigns'>Campaigns</button></Link>
                <Link to="/home/help"><button className='sidebar-link'>Help</button></Link>
                <Link to="/home/contact-us"><button className='sidebar-link'>Contact</button></Link>
            </div>
        </div>
    )
}

export default SideBar

