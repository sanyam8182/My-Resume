import React from "react";
import '../Styles/PersonalSkillsItem.css'

const PersonalSkillsItem = (props) => {
    return(
        <div className="personal-skill-item-container">
            <span>{props.skill}</span>
        </div>
    )
}

export default PersonalSkillsItem;