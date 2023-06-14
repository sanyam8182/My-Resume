import React from "react";
import Heading from "./Heading";
import work_icon from '../Assets/work-experience.png'
import WorkExperienceItem from "./WorkExperienceItem";
import '../Styles/WorkExperience.css'

const WorkExperience = (props) => {
    return(
        <div className="main-container">
            <Heading heading="Work Experience" icon={work_icon}/>
            <div className="work-experience-wrapper">
                {
                    props.workExperience.map((exp, index) => <WorkExperienceItem exp={exp} key={index}/>)
                }
            </div>
        </div>
    )
}

export default WorkExperience;