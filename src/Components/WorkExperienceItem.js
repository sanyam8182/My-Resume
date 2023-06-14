import React from "react";
import calendar_icon from '../Assets/calendar.png'
import location_icon from '../Assets/location.png'
import '../Styles/WorkExperienceItem.css'

const WorkExperienceItem = (props) => {

    const fromMonth = props.exp.From.split(" ")[0];
    const fromYear = props.exp.From.split(" ")[1];
    const toMonth = props.exp.To.split(" ").length > 1 ? props.exp.To.split(" ")[0] + " - " : props.exp.To;
    const toYear = props.exp.To.split(" ").length > 1 ? props.exp.To.split(" ")[1] : "";
    return(
        <div className="work-experience-item-container">
            <span className="work-heading">{props.exp.Role}</span>
            <span className="work-organization">{props.exp.Organization}</span>
            <div className="horizontal-wrapper timeline-wrapper">
                <img className="small-icon" src={calendar_icon}></img>
                <span className="timeline-month">{fromMonth} - </span>
                <span className="timeline-year">{fromYear} - </span>
                <span className="timeline-month">{toMonth} </span>
                <span className="timeline-year">{toYear}</span>
            </div>
            <div className="horizontal-wrapper location-wrapper">
                <img className="small-icon" src={location_icon}></img>
                <span>{props.exp.Location}</span>
            </div>
            {
                props.exp.Responsilbilities.map((responsibility, index) => {
                    return(
                        <div className="horizontal-wrapper responsibilities-wrapper" key={index}>
                            <div className="bullet bullet-brown">
                                <div className="bullet-inner bullet-brown"></div>
                            </div>
                            <span>{responsibility}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WorkExperienceItem;