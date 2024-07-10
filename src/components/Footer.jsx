import React from 'react'

import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerdiv'>
      <div className='footer-middle'>
        <div>
          <h3>Service Appointment</h3>
          <p>Create a Service Appointment</p>
          <p>Change Your Appointment</p>
          <p>Cancel Your Appointment</p>
        </div>
        <div>
          <h4>NEW VEHICLE</h4>
          <p>
            Volkswagen
            <br />
            Audi
            <br />
            Seat
            <br />
            Cupra
            <br />
            Skoda
            <br />
            porsche
            <br />
            Price list
          </p>
        </div>
        <div>
          <h4>SECOND HAND</h4>
          <p>
            Volkswagen Passenger
            <br />
            Second Hand Volkswagen Vehicles
            <br />
            Second Hand Audi Vehicles
            <br />
            Second Hand Seat Vehicles
            <br />
            Second Hand Cupra Vehicles
            <br />
            Second Hand Skoda Vehicles
            <br />
            Second Hand Porsche Vehicles
            <br />
            Second Hand Volkswagen Commercial Vehicles
            <br />
            Second Hand Other Brand Vehicles
          </p>
        </div>
        <div>
          <h3>follow us</h3>
          <div className='follow-us-icons'>
            <div className='follow-us-link'><FaLinkedin /></div>
            <div className="follow-us-link"> <FaXTwitter /></div>
            <div className='follow-us-link'> <FaInstagram /></div>
          </div>
          <h3>service appointment line :</h3>
          <h4 className='service-number'>XXX XX XX</h4>
        </div>
      </div>
      <div className='footer-lower'>
        <div className='footer-lower-left'>
          <FaRegCopyright />
          <p>2024 DreamCar Türkiye.  All rights reserved.</p>
        </div>
        <div className='footer-lower-right'>
          <p>Terms of use |</p>
          <p>Cookie Policy |</p>
          <p>Sustainability Policies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer