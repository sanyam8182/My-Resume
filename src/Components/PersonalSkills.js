import React from "react";
import PersonalSkillsItem from './PersonalSkillsItem'
import personal_skill_icon from '../Assets/personal-skills.png'
import Heading from './Heading'
import '../Styles/PersonalSkills.css'

const PersonalSkills = (props) => {
    return (
        <div className="main-container"> 
            <Heading heading = "Personal Skills" icon = {personal_skill_icon}/>
            {
                props.skills.map((skill, index) => <PersonalSkillsItem skill={skill} key={index}/>)
            }
        </div>
    )
}

export default PersonalSkills;