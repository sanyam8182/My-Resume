import React from "react"; 
import '../Styles/PersonalData.css'
import Name from "./Name";
import profile from '../Assets/profile.jpg'
import social from '../Assets/social.png'
import languages from '../Assets/languages.png'
import hobbies from '../Assets/hobbies.png'
import Social from "./Social";
import Languages from "./Languages";
import Hobbies from "./Hobbies";

const PersonalData = () => {
    return(
        <div className="personal-data-container">
            <img className="profile-img" src={profile}></img>
            <Name/>
            <Social/>
            <span className="title">Languages</span>
            <div className="divider"></div>
            <Languages/>
            <span className="title">Hobbies</span>
            <div className="divider"></div>
            <Hobbies/>

        </div>
    )
}

export default PersonalData;