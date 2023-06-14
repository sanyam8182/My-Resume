import React from "react";
import controller from '../Assets/controller.png'
import taekwondo from '../Assets/taekwondo.png'
import guitarist from '../Assets/guitarist.png'
import '../Styles/Hobbies.css'
const Hobbies = () => {
    return(
        <div className="hobbies-container">
            <div className="hobbies-wrapper">
                <img src={controller}></img>
                <span>Gaming</span>
            </div>
            <div className="hobbies-wrapper">
                <img src={guitarist}></img>
                <span>Playing Guitar</span>
            </div>
            <div className="hobbies-wrapper">
                <img src={taekwondo}></img>
                <span>Taekwondo</span>
            </div>
        </div>
    )
}

export default Hobbies;