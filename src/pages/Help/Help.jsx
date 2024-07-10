import React, { useState } from 'react'
import AccordionFAQ from '../../components/AccordionFAQ'
import FAQData from "../../helpers/FAQData"

import { IoSearch } from "react-icons/io5";

const Help = () => {

  const [search, setSearch] = useState("");

  const SearchHandler = (e) => {
    setSearch(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div className='helpdiv'>
      <div className='help-search'>
        <input className='help-search-input' type="text" value={search} onChange={SearchHandler} />
        <IoSearch className='help-search-ioSearch' />
      </div>
      <AccordionFAQ FAQData={FAQData} search={search}></AccordionFAQ>
    </div>
  )
}

export default Help