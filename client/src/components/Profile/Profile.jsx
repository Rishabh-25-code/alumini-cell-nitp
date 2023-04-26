import React from "react";
import "./Profile.css";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Profile(props) {
    return (
        <div className="single">
            <div className="circle"></div>
            <div className="inner">
                <h3 id="memberName">{props.name}</h3>
                <p id="memberDesignation">{props.designation}</p>
                <div className="image">
                    <img src={props.img} style={{ maxWidth: "100%" }} alt="profile" />
                </div>
                <div className="social">
                    <a id="socialLinks" href={props.link}>
                        
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile;