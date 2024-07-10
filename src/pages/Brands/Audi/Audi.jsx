import React from 'react'

import Models from '../../../components/Models';
import Content from '../../../components/Content';
import AccordionFAQ from '../../../components/AccordionFAQ';

import AudiModelsData from "../../../helpers/AudiModelsData";

import CampaignsData from "../../../helpers/CampaignsData"
import FAQData from '../../../helpers/FAQData';

const Audi = () => {

  const filteredCampaigns = CampaignsData.filter(item => item.brand === "audi");
  const filteredFAQData = FAQData.filter(item => item.brand === "audi");

  return (
    <div className='branddiv'>
      <h1 className='brand-title'>Audi</h1>
      <Models ModelsData={AudiModelsData}></Models>
      <Content ContentData={filteredCampaigns}></Content>
      <AccordionFAQ FAQData={filteredFAQData}></AccordionFAQ>
    </div>
  )
}

export default Audi

{/* 
      {CampaignsData.filter(item => item.brand === "audi")
        .map(item => {
          return (
            <div key={item.id}>
              <Content ContentData={[item]}></Content>
            </div>
          )
        })
      } */}