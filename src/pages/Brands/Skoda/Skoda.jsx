import React from 'react'

import Models from '../../../components/Models';
import Content from '../../../components/Content';
import AccordionFAQ from '../../../components/AccordionFAQ';

import SkodaModelsData from "../../../helpers/SkodaModelsData";

import CampaignsData from "../../../helpers/CampaignsData"
import FAQData from '../../../helpers/FAQData';

const Skoda = () => {

  const filteredCampaigns= CampaignsData.filter(item => item.brand === "skoda");
  const filteredFAQData = FAQData.filter(item => item.brand === "skoda");

  return (
    <div className='branddiv'>
    <h1 className='brand-title'>Skoda</h1>
      <Models ModelsData={SkodaModelsData}></Models>
      <Content ContentData={filteredCampaigns}></Content>
      <AccordionFAQ FAQData={filteredFAQData}></AccordionFAQ>
  </div>
  )
}

export default Skoda