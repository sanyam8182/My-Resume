import React from "react";
import calendar_icon from '../Assets/calendar.png'
import '../Styles/AwardsItem.css'

const AwardsItem = (props) => {
    return(
        <div className="awards-item-container">
            <div className="horizontal-wrapper">
                <div className="bullet bullet-green ">
                    <div className="bullet-inner bullet-green"></div>
                </div>
                <span className="awads-title">{props.award.Title}</span>
            </div>
            
            <div className="horizontal-wrapper timeline-wrapper">
                <img className="small-icon" src={calendar_icon}></img>
                <span className="timeline-month">{props.award.Month}</span>
                <span className="timeline-year">{props.award.Year}</span>
            </div>
            <span className="timeline-by">{props.award.By}</span>
        </div>
    )
}

export default AwardsItem;