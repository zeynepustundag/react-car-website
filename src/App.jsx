import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import { Route } from "react-router-dom"
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import FindCar from './pages/FindCar/FindCar'
import Home from './pages/HomePage/Home'
import Audi from './pages/Brands/Audi/Audi'
import Cupra from './pages/Brands/Cupra/Cupra'
import Porsche from './pages/Brands/Porsche/Porsche'
import Seat from './pages/Brands/Seat/Seat'
import Skoda from './pages/Brands/Skoda/Skoda'
import Volkswagen from './pages/Brands/Volkswagen/Volkswagen'
import BreadCrumbs from './components/BreadCrumbs'
import Campaigns from './pages/Campaigns/Campaigns'
import Help from './pages/Help/Help'
import ContactUs from './pages/Contact/ContactUs'
import ScrollToTop from './components/ScrollToTop'
import { useState } from 'react'

function App() {

  const [menuClick, setMenuClick] = useState(false);

  const MenuClickHandler = () =>{
    setMenuClick(!menuClick)
  }

  return (
    <>
      <BrowserRouter>
      <ScrollToTop></ScrollToTop>
        <Header menuClick={menuClick} MenuClickHandler={MenuClickHandler} setMenuClick={setMenuClick}></Header>
        <BreadCrumbs></BreadCrumbs>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home/find-car" element={<FindCar></FindCar>}></Route>
          {/* <Route path="/brands"></Route> */}
          <Route path='/home/audi' element={<Audi></Audi>}></Route>
          <Route path='/home/cupra' element={<Cupra></Cupra>}></Route>
          <Route path='/home/porsche' element={<Porsche></Porsche>}></Route>
          <Route path='/home/seat' element={<Seat></Seat>}></Route>
          <Route path='/home/skoda' element={<Skoda></Skoda>}></Route>
          <Route path='/home/volkswagen' element={<Volkswagen></Volkswagen>}></Route>
          <Route path="/home/campaigns" element={<Campaigns></Campaigns>}></Route>
          <Route path='/home/help' element={<Help></Help>}></Route>
          <Route path='/home/contact-us' element={<ContactUs></ContactUs>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
