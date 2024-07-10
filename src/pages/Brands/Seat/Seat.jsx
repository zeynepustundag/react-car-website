import React from 'react'

import Models from '../../../components/Models';
import Content from '../../../components/Content';
import AccordionFAQ from '../../../components/AccordionFAQ';

import SeatModelsData from "../../../helpers/SeatModelsData";

import CampaignsData from "../../../helpers/CampaignsData"
import FAQData from '../../../helpers/FAQData';

const Seat = () => {

  const filteredCampaigns= CampaignsData.filter(item => item.brand === "seat");
  const filteredFAQData = FAQData.filter(item => item.brand === "seat");

  return (
    <div className='branddiv'>
      <h1 className='brand-title'>Seat</h1>
      <Models ModelsData={SeatModelsData}></Models>
      <Content ContentData={filteredCampaigns}></Content>
      <AccordionFAQ FAQData={filteredFAQData}></AccordionFAQ>
    </div>
  )
}

export default Seat