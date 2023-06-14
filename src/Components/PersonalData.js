import React from "react"; 
import '../Styles/PersonalData.css'
import Name from "./Name";
import profile from '../Assets/profile.png'
import social from '../Assets/social.png'
import languages from '../Assets/languages.png'
import hobbies from '../Assets/hobbies.png'

const PersonalData = () => {
    return(
        <div className="personal-data-container">
            <img className="profile-img" src={profile}></img>
            <Name/>
            <img className="social-img" src={social}></img>
            <span className="title">Languages</span>
            <div className="divider"></div>
            <img className="social-img" src={languages}></img>
            <span className="title">Hobbies</span>
            <div className="divider"></div>
            <img className="social-img" src={hobbies}></img>

        </div>
    )
}

export default PersonalData;