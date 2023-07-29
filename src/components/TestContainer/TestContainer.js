import React from "react";
import './TestContainer.css'
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
 
const TestContainer = ({selectedgraph,timeremaining,starttyping,words, characters, wpm})=>{
      return (
        <div className="test-container">

        {{timeremaining} > 0?
 <div className="try-again-container">
        <TryAgain words = {words} characters = {characters} wpm = {wpm} />

        </div>
      
        :

      <div className="typing-challenge-container">
       <TypingChallengeContainer words = {words} characters = {characters} wpm = {wpm} selectedgraph = {selectedgraph}  timeremaining ={timeremaining}
       starttyping = {starttyping}  />
      </div>
        }
        </div>
      );
}

export default TestContainer;