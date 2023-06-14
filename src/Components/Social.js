import React from "react";
import '../Styles/Social.css'
import envelope from '../Assets/envelope.png'
import phone from '../Assets/phone.png'
import location from '../Assets/location.png'
import globe from '../Assets/globe.png'
import calendar from '../Assets/calendar.png'
import user from '../Assets/user.png'
import linked_in from '../Assets/linked-in.png'
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import git from '../Assets/github.png'
import stack from '../Assets/stackoverflow.png'

const Social = () => {
    return(
        <div className="social-container">
            <div className="social-wrapper horizontal-wrapper1">
                <img src={envelope}/>
                <span>sanyam8182@gmail.com</span>
            </div>
            <div className="social-wrapper horizontal-wrapper2">
                <img src={phone}/>
                <span>09591318197</span>
            </div>
            <div className="social-wrapper horizontal-wrapper3">
                <img src={location}/>
                <span>Bangalore, India</span>
            </div>
            <div className="social-wrapper horizontal-wrapper4">
                <img src={globe}/>
                <span>Indian</span>
            </div>
            <div className="social-wrapper horizontal-wrapper5">
                <img src={calendar}/>
                <span>04-03-1995</span>
            </div>
            <div className="social-wrapper horizontal-wrapper6">
                <img src={user}/>
                <span>Married</span>
            </div>
            <div className="social-wrapper horizontal-wrapper7">
                <img src={linked_in}/>
                <a href="https://www.linkedin.com/in/sayam-koul/" target="blank"><span>sayam-koul</span></a>
            </div>
            <div className="social-wrapper horizontal-wrapper8">
                <img src={facebook}/>
                <a href="https://www.facebook.com/sanyam.koul" target="blank"><span>sayam.koul</span></a>
            </div>
            <div className="social-wrapper horizontal-wrapper9">
                <img src={twitter}/>
                <a href="https://twitter.com/koul_sayam" target="blank"><span>koul_sayam</span></a>
            </div>
            <div className="social-wrapper horizontal-wrapper10">
                <img src={git}/>
                <a href="https://github.com/sanyam8182" target="blank"><span>sanyam8182</span></a>
            </div>
            <div className="social-wrapper horizontal-wrapper11">
                <img src={stack}/>
                <a href="https://stackoverflow.com/users/8003764/sanyam-koul" target="blank"><span>users/8003764/sanyam-koul</span></a>
            </div>
        </div>
    )
}

export default Social;