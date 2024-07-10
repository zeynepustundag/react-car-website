import React from 'react'

import Models from '../../../components/Models';
import Content from '../../../components/Content';
import AccordionFAQ from '../../../components/AccordionFAQ';

import VolkswagenModelsData from "../../../helpers/VolkswagenModelsData";

import CampaignsData from "../../../helpers/CampaignsData"
import FAQData from '../../../helpers/FAQData';

const Volkswagen = () => {

  const filteredCampaigns= CampaignsData.filter(item => item.brand === "volkswagen");
  const filteredFAQData = FAQData.filter(item => item.brand === "volkswagen");
  
  return (
    <div className='branddiv'>
    <h1 className='brand-title'>Volkswagen</h1>
      <Models ModelsData={VolkswagenModelsData}></Models>
      <Content ContentData={filteredCampaigns}></Content>
      <AccordionFAQ FAQData={filteredFAQData}></AccordionFAQ>
  </div>
  )
}

export default Volkswagen