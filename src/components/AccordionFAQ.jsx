import React, { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const AccordionFAQ = (props) => {

    const [openQuestionId, setopenQuestionId] = useState(null);
    let filteredSearch = props.FAQData;
    props.search ? filteredSearch = props.FAQData.filter(item => item.question.toLowerCase().includes(props.search.toLowerCase())) : filteredSearch = props.FAQData;

    const questionClickHandler = (questionId) => {
        setopenQuestionId(questionId === openQuestionId ? null : questionId);
    }
    return (
        <div className='faqdiv'>
            <h1 className='faq-title'>Frequently Asked Questions</h1>
            <div className='faq-items-container'>
                {filteredSearch.map((item) => {
                    return (
                        <div key={item.id} className={`faq-item ${item.id === props.FAQData.length ? "last" : ""}`} onClick={() => questionClickHandler(item.id)}>
                            <div className='faq-item-question' >{item.question}
                                {openQuestionId === item.id ? <IoIosArrowUp className='faq-arrow'></IoIosArrowUp> : <IoIosArrowDown className='faq-arrow'></IoIosArrowDown>}
                            </div>
                            {/*  <div>
                        { {openQuestionId === item.id ?  <p className='faq-item-answer'>{item.answer}</p>  : ""} }
                        </div> */}
                            <div className={`faq-item-answer ${openQuestionId === item.id ? 'open' : ''}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AccordionFAQ

/* {questionIsOpen ? 
                            <p>{item.answer}</p> 
                            : 
                            ""
                            } */