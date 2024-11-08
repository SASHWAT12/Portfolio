import React from "react";
import {PassportImage, githubIcon} from "../Assets/PassportImage.jpg";

const ContactMe = () =>(
    <div className="footerArea">
        <div className="ProfileContent">
        <h2>Sashwat P</h2>
        <p>WEB Developer | React.js, MERN Stack | Senior Executive @ _VOIS</p>
        </div>
        <div className="profilePhoto">
            <img src={PassportImage} alt="Image"/>
        </div>
    </div>
);

export default ContactMe;