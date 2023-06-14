import React from "react";
import Heading from "./Heading";
import awards_icon from '../Assets/trophie.png'
import AwardsItem from "./AwardsItem";
import '../Styles/Awards.css'
const Awards = (props) => {
    return(
        <div className="main-container">
            <Heading heading ="Awards" icon={awards_icon}/>
            <div className="awards-wrapper">
            {
                props.awards.map((award, index) => <AwardsItem award={award} key={index}/>)
            }
            </div>
        </div>
    )
}

export default Awards;