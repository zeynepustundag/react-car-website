import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom'

import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

import DropDownMenu from './DropDownMenu';
import SideBar from './SideBar';


const Header = ({ menuClick, MenuClickHandler, setMenuClick }) => {

  const [brandClick, setBrandClick] = useState(false);
  const dropdownRef = useRef();

  const brandClickHandler = () => {
    setBrandClick(!brandClick)
  }

  useEffect(() => {
    let closeMenu = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setBrandClick(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    }
  }, []);

  return (
    <div className='headerdiv'>
      <div className='header-logo-div'>
        <Link style={{ textDecoration: "none" }} to="/"><h3 className='header-logo' >DreamCar</h3></Link>
      </div>
      <div className='links'>
        <Link to="/"><button className='link'>Home</button></Link>
        <Link to="/home/find-car"><button className='link'>Find Car</button></Link>
        <button onClick={brandClickHandler} className='link' >Brands {brandClick ? <IoIosArrowUp className='arrow-icon' /> : <IoIosArrowDown className='arrow-icon' />}
          {brandClick ?
            <div ref={dropdownRef}><DropDownMenu></DropDownMenu></div>
            : ""}
        </button>
        <Link to="/home/campaigns"><button className='link'>Campaigns</button></Link>
        <Link to="/home/help"><button className='link'>Help</button></Link>
        <Link to="/home/contact-us"><button className='link'>Contact</button></Link>
      </div>
      <div className='header-search'>
        <IoSearch className='ioSearch' />
        <p>| Search</p>
      </div>
      <div onClick={MenuClickHandler} className='menu-container' >
        <IoMenu />
      </div>
      {menuClick ? <SideBar setMenuClick={setMenuClick} brandClickHandler={brandClickHandler} brandClick={brandClick}></SideBar> : ""}
    </div>
  )
}

export default Header