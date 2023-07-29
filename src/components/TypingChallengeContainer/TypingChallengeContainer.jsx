import React from "react";
import CardsDetails from "../CardsDetails/CardsDetail";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({selectedgraph,timeremaining,starttyping,words,characters,wpm})=>{
    return (
         <div>
         {/* Detail section */}
         
          <CardsDetails  words = {words} characters = {characters} wpm = {wpm}  />

         {/* Main Challenge */}

          <TypingChallenge selectedgraph={selectedgraph}  timeremaining ={timeremaining}
          starttyping = {starttyping}/>

         </div>
    );
}

export default  TypingChallengeContainer;