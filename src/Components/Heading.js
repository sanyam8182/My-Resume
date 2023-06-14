import React from "react";
import '../Styles/Heading.css'

const Heading = (props) => {
    return(
        <div className="heading-container">
            <div className="free-text-heading">
                <div className="heading-wrapper">
                    <img className="heading-icon"src= {props.icon}></img>
                    <span>{props.heading}</span>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default Heading;