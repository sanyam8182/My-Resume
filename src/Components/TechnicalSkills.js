import React from "react";
import Heading from "./Heading";
import skills_icon from  '../Assets/skills.png';
import TechnicalSkillsItems from './TechnicalSkillsItems'
import '../Styles/TechnicalSkills.css'

const TechnicalSkills = (props) => {
    
    return(
        <div className="main-container">
            <Heading heading = "Technical Skills, Tools & Technologies" icon = {skills_icon}/>
            {
                props.skills.map((skill, index) => <TechnicalSkillsItems skill = {skill} key={index}/>)
            }
            
        </div>
    )
}

export default TechnicalSkills;