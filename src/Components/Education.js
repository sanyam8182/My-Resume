import React from "react";
import Heading from "./Heading";
import education_icon from '../Assets/education.png'
import calendar_icon from '../Assets/calendar.png'
import location_icon from '../Assets/location.png'

const Education = (props) => {
    return(
        <div className="main-container">
            <Heading heading="Education" icon={education_icon}/>
            <div className="work-experience-item-container">
                <span className="work-heading">Bachelor Of Engineering</span>
                <span className="work-organization">Visvesvaraya Technological University</span>
                <div className="horizontal-wrapper timeline-wrapper">
                    <img className="small-icon" src={calendar_icon}></img>
                    <span className="timeline-month">Apr - </span>
                    <span className="timeline-year">2013 - </span>
                    <span className="timeline-month">Jun  </span>
                    <span className="timeline-year">2017</span>
                </div>
                <div className="horizontal-wrapper location-wrapper">
                    <img className="small-icon" src={location_icon}></img>
                    <span>India</span>
                </div>
            </div>
        </div>
    )
}

export default Education;