import React from "react";
import progfileImg from "../images/aleks_profile.png";


function Intro() {
    return (
        <div className="container-intro intro-header">
        <img className="profile-img"src={progfileImg} alt="profile-img"/>
        <h6 className="intro-header-text">Hello I'm Aleksandar Stojkovski, and I'm currently learning Full-Stack Development.</h6>
        <p className="intro-text">~ I have spent much of my work experience conceptualizing innovative technology solutions for the advancement of civic engagement and governmental accountability.
I have found teamwork and collaboration to be essential in my work creating solutions, especially when working with international partners. I love challenges and I easily adapt to the environment in which I work. <br/>I'm really exited to start developer career, and practice more coding. ~</p>
        </div>
    )
}

export default Intro;