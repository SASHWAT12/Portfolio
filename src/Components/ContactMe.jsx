import React from "react";
import { SocialMedia,resumeLink,PassportImage } from "../Assets";

const ContactMe = () =>(
    <div className="footerArea">
        <div className="ProfileContent">
            <div>
            <h2>Sashwat P</h2>
            <p>WEB Developer | React.js, MERN Stack | Senior Executive @ _VOIS</p>
            </div>
            <div className="linksImage">
                {SocialMedia.map( (socials) => (
                    <a href={socials.link}
                       key={socials.id}
                       target="_blank"
                    >
                        <img src={socials.icon} alt="" />
                    </a>
                ))}
            </div>
            <div>
                <a href={resumeLink} className="myResume" >Download Resume</a>
            </div>
        </div>
        <div className="profilePhoto">
            <img src={PassportImage} alt="Image"/>
        </div>
    </div>
);

export default ContactMe;