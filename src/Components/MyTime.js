import React from "react";
import Heading from "./Heading";
import my_time_green_icon from '../Assets/my-time-green.png'
import my_time_grayicon from '../Assets/my-time-gray.png'
import circularProgressBar from "../Assets/my-time-circle.png";
import '../Styles/MyTime.css'

const MyTime = (props) => {
    return(
        <div className="main-container">
            <Heading heading="My Time" icon={my_time_green_icon}/>
            <div className="my-time-wrapper">
                <img className="mt-clircle" src={circularProgressBar}/>
                <div className="my-time-item-wrapper">
                    {
                        props.myTime.map((item, index) => {
                            return(
                                <div className="mt-activity-wrapper" key={index}>
                                    <div className={`${item.Class} activity-color`}></div>
                                    <span>{`${item.Activity} (${item.Percentage}%)`}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MyTime;