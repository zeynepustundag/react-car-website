import React from 'react'
import { Link } from 'react-router-dom'

const Content = (props) => {

    return (
        <div className='home-contentdiv'>
            {props.ContentData.slice(0, props.visibleDataNumber).map((item) => {
                return (
                    item.position === "left" ?
                        <div key={item.id} className='single-home-content'>
                            <img className='single-home-content-left-img' src={item.img} alt="" />
                            <div className='single-home-content-info'>
                                <h2>{item.title}</h2>
                                <p>{item.content}</p>
                                <Link ><button>{item.buttonContent}</button></Link>
                            </div>
                        </div>
                        :
                        <div key={item.id} className='single-home-content'>
                            <div className='single-home-content-info'>
                                <h2>{item.title}</h2>
                                <p>{item.content}</p>
                                <Link ><button>{item.buttonContent}</button></Link>
                            </div>
                            <img className='single-home-content-right-img' src={item.img} alt="" />
                        </div>
                )
            }
            )}
        </div>
    )
}

export default Content