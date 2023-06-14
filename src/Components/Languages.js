import React from "react";
import {languages} from '../Data.js'
import '../Styles/Languages.css'
import CircularProgressBar from "./CircularProgressBar.js";

const Languages = () => {
    return(
        <div className="lang-container">
            {
                languages.map(language => {
                    return(
                        <div className="lang-wrapper">
                            <CircularProgressBar progress={language.Proficiency} size={150} />
                            <span>{language.Language}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Languages;