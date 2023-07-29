import React from "react";
import hero from "../assets/hero.png";
import "./landing.css"
import Typewriter from 'typewriter-effect';
const Land = ()=>{
    return(
        <div className="landing-container">
       <div data-aos="fade-right" className="landing-left">
           <h1 className="landing-header">CAN YOU TYPE</h1>
           <div className="typewriter">
           <Typewriter
           options={{
             strings: ['FAST?', 'QUICK?','CORRECT?'],
             autoStart: true,
             loop: true,
           }}
             />
           </div>
       </div>

        <div data-aos="fade-left" className="landing-right">
        <img className="hero" src={hero} alt="hero" srcset="" />
        </div>


        </div>

    );
}

export default Land;