import React from "react";
import "./TypingChallenge.css"
const TypingChallenge =({selectedgraph,timeremaining,starttyping})=>{
    return(
        <div className="TypingChallenge">
        <div className="timer-container">
        <p className="timer">00.{timeremaining >10 ? timeremaining :`0${ timeremaining}`} </p>
        <p className="timer-info">
        {!starttyping && "Start typing ,practice makes a man perfect" }
       </p>
        </div>
        <div className="typing-box">
        <div className="typed-text">
        <div className="textarea test-paragraph">
        {selectedgraph}
        </div>
        </div>
        <div className="typing-text">
        <textarea className="textarea" placeholder="start typing here">
        </textarea>
        </div>
        </div>  
        </div>
    )
}

export default TypingChallenge