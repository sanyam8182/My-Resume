import React from "react";
import '../Styles/TechnicalSkillsItems.css'

const TechnicalSkillsItems = (props) => {
    return(
        <div className="technical-skills-item-container">
            <span>
                {props.skill}
            </span>
            <div className="highlight-view"></div>
        </div>
    )
}

export default TechnicalSkillsItems;