import React from "react";
import heart_icon from '../Assets/heart.png'
import Heading from "./Heading";
import '../Styles/MostProudOf.css'

const MostProudOf = (props) => {
    return(
        <div className="main-container">
            <Heading heading="Most Proud Of" icon={heart_icon}/>
            {
                props.mostProudOf.map((item,index) => {
                    return(
                        <div className="most-proud-wrapper" key={index}>
                            <img className="mp-icon" src={item.Icon}/>
                            <div className="most-proud-item-wrapper">
                                <span className="mp-title">{item.Title}</span>
                                <span className="mp-text">{item.Text}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MostProudOf;