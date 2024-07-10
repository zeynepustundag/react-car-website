import React from 'react'

import Models from '../../../components/Models';
import Content from '../../../components/Content';
import AccordionFAQ from '../../../components/AccordionFAQ';

import PorscheModelsData from "../../../helpers/PorscheModelsData";

import CampaignsData from "../../../helpers/CampaignsData"
import FAQData from '../../../helpers/FAQData';

const Porsche = () => {

  const filteredCampaigns= CampaignsData.filter(item => item.brand === "porsche");
  const filteredFAQData = FAQData.filter(item => item.brand === "porsche");

  return (
    <div className='branddiv'>
      <h1 className='brand-title'>Porsche</h1>
      <Models ModelsData={PorscheModelsData}></Models>
      <Content ContentData={filteredCampaigns}></Content>
      <AccordionFAQ FAQData={filteredFAQData}></AccordionFAQ>
    </div>
  )
}

export default Porsche