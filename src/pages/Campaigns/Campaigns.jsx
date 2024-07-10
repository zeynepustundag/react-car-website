import React, { useState } from 'react'

import CampaignsData from '../../helpers/CampaignsData';
import Content from '../../components/Content';

const Campaigns = () => {

  const [isClickedService, setIsClickedService] = useState(false);
  const [isClickedSales, setIsClickedSales] = useState(true);
  const [visibleDataNumber, setVisibleDataNumber] = useState(3)

  const VisibleDataHandler = () => {
    setVisibleDataNumber(visibleDataNumber + 3);
  }
  const ServiceClickHandler = () => {
    setIsClickedSales(false);
    setIsClickedService(true);
    setVisibleDataNumber(3);
  }
  const SalesClickHandler = () => {
    setIsClickedService(false);
    setIsClickedSales(true);
    setVisibleDataNumber(3);
  }
  const filterDataService = CampaignsData.filter((item) => item.campaignsType === "service");
  const filterDataSales = CampaignsData.filter((item) => item.campaignsType === "sales");

  return (
    <div className='campaignsdiv'>
      <h1 className='campaigns-title'>Campaigns</h1>
      <div className='campaigns-type-container'>
        <div className={`campaigns-type ${isClickedSales ? "active" : ""}`}><span onClick={SalesClickHandler}>Sales Campaigns</span></div>
        <span className={`campaigns-type ${isClickedService ? "active" : ""}`} onClick={ServiceClickHandler}>Service Campaigns</span>
      </div>
      {isClickedService ?
        <Content ContentData={filterDataService} visibleDataNumber={visibleDataNumber}></Content>
        : ""
      }

      {isClickedSales ?
        <Content ContentData={filterDataSales} visibleDataNumber={visibleDataNumber}></Content>
        : ""
      }

      {/* {isClickedSales && CampaignsData.filter((item)=>
        item.campaignsType==="sales").map((item)=>{
            return(
                <Content ContentData={[item]}></Content>
            )}) 
    } */}
      <div className='campaigns-show-more-container'>
        <button className='campaigns-show-more' onClick={VisibleDataHandler}>Show More</button>
      </div>
    </div>
  )
}

export default Campaigns