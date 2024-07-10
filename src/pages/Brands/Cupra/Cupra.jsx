import React from 'react'

import Models from '../../../components/Models';
import Content from '../../../components/Content';
import AccordionFAQ from '../../../components/AccordionFAQ';

import CupraModelsData from "../../../helpers/CupraModelsData";

import FAQData from '../../../helpers/FAQData';
import CampaignsData from "../../../helpers/CampaignsData"

const Cupra = () => {

  const filteredCampaigns= CampaignsData.filter(item => item.brand === "cupra");
  const filteredFAQData = FAQData.filter(item => item.brand === "cupra");

  return (
    <div className='branddiv'>
      <h1 className='brand-title'>Cupra</h1>
       <Models ModelsData={CupraModelsData}></Models>
       <Content ContentData={filteredCampaigns}></Content>
       <AccordionFAQ FAQData={filteredFAQData}></AccordionFAQ>
    </div>
  )
}

export default Cupra