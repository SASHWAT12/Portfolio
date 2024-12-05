import React from "react";
import './Stylings/ContactMe.css';
import { SocialMedia,resumeLink,PassportImage,aboutMe } from "../Assets";

const ContactMe = () =>(
    <div className="footerArea">
        <div className="footerContent">
            <div className="ProfileContent">
                <div>
                <h1>{aboutMe.name}</h1>
                <p>{aboutMe.tagLine}</p>
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
                <div className="myResume">
                    <a href={resumeLink} >Download Resume</a>
                </div>
            </div>
            <div className="profilePhoto">
                <img src={PassportImage} alt="Image"/>
            </div>
        </div>
        <div className="licensePara">
            <p>{aboutMe.signature}</p>
        </div>
    </div>
);

export default ContactMe;