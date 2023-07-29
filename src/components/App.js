import React from 'react'
import './app.css';
import Nav from './Nav/Nav.js'
import Land from './Landing/Landing.js'
import Footer from './Footer/Footer'
import ChallengeSection from './ChallengeSection/ChallengeSection';

const total_time =6;
class App extends React.Component{
     
  state={
    selectedgraph:"Hello world",
    timeremaining : total_time,
    starttyping: false,
    words:0,
    characters:0,
    wpm:0
  }

    render(){

        return (
           <div className="app">
        
             <Nav/>
             <Land/>
             <ChallengeSection selectedgraph ={this.state.selectedgraph}
                               timeremaining ={this.state.timeremaining}
                               starttyping = {this.state.starttyping}
                               words = {this.state.words}
                               characters = {this.state.characters}
                               wpm = {this.state.wpm}
             />
             <Footer/>
           
      
           </div>
        );
    }

}


export default App;