import React  from "react";
import TestContainer from "../TestContainer/TestContainer";
import './ChallengeSection.css'

const ChallengeSection = ({selectedgraph,timeremaining,starttyping,words, characters, wpm})=>{
    return (
        <div className="challenge-section-container">
        <h1 data-aos="fade-down" className="challenge-section-header">Test your speed now</h1>
        <TestContainer words ={words} characters = {characters} wpm ={wpm} selectedgraph = {selectedgraph} timeremaining ={timeremaining}
        starttyping = {starttyping} 
        />
        
        </div>
    );
}

export default  ChallengeSection;
