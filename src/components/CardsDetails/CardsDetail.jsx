import React from "react";
import "./CardsDetail.css"

const CardsDetails =({words,characters,wpm})=>{
return (
    <div className="detail-cards">
    <div className="sec">
    <p>words</p>
    <p><b>{words}</b></p>
    </div>
    <div className="sec">
    <p>characters</p>
    <p><b>{characters}</b></p>
    </div>
    <div className="sec">
    <p>wpm</p>
    <p><b>{wpm}</b></p>
    </div>
    </div>
)
}

export default CardsDetails 