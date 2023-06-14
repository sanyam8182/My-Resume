import React from "react";
import '../Styles/FreeText.css'
import page_icon from '../Assets/page-icon.png'
import Heading from './Heading'
const FreeText = () => {
    return (
        <div className="main-container">
            <Heading heading = "Profile Summary" icon = {page_icon}/>
            <div className="free-text-body">
            <span>Ardent SME Application Developer with a specific focus on iOS, full-stack, and IOT, capable of producing the desired result, enthusiastic to deliver the greater value proposition to internal & external stakeholders and perform beyond expectations in all parameters seeking strategic avenues of high importance with organization repute to demonstrate my skills and contribute effectively towards the profitability of organization while being perseverant, innovative and flexible.</span>
            </div>
        </div>
    )
}

export default FreeText;