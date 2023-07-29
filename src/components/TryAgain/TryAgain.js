import React from "react";
import './TryAgain.css'

const TryAgain = ({words, characters, wpm})=>{
   return (
        <div className="try-again">
        <h1 className="try-again-header">Test Results</h1>
        <div className="result-container">
          <p>
          <b>Characters:</b> {characters} 
          </p>

          <p>
          <b>words:  </b> {words}
          </p>

          <p>
          <b>Wpm:</b> {wpm} wpm 
          </p>
        </div>

        <div className="buttons">
        <button className="end-btn try-again-btn">Try again</button>
        <button onClick={()=>{window.open("https://www.facebook.com/sharer/sharer.php?u=aakanksha.com","facebook-share-dialog","width = 800px height = 400px")}} className="end-btn share-btn">Share</button>
        <button onClick={()=>{window.open("https://twitter.com/intent/tweet?text=aakanksha.com","Twitter","width = 800px height = 400px")}} className="end-btn tweet-btn">Tweet</button>

        </div>
        </div>
   ); 
}

export default TryAgain