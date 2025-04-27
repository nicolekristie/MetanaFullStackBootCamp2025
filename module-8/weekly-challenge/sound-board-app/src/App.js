import React, {Component, useState} from 'react';
import './App.css';
import  bubbles from './audioClips/bubbles.mp3';
import birds from './audioClips/birds.mp3';
import river from './audioClips/river.mp3';
import duck from './audioClips/duck.mp3';
import wildfire from './audioClips/wildfire.mp3';
import underwater from './audioClips/underwater.mp3'
import {Howl, Howler} from 'howler';



const audioClips = [
  {sound: bubbles, label: 'Bubbles'},
  {sound: birds, label: 'Birds'},
  {sound: river, label: 'River'},
  {sound: duck, label: 'Duck'},
  {sound: wildfire, label: 'Wildfire'},
  {sound: underwater, label: 'Underwater'}
]

class App extends Component {
    //src>imported files
      SoundPlay = (src) => {
        const sound = new Howl({
          src
        })
        sound.play();
      }

      RenderButtonAndSound = () => {
      
          return audioClips.map((soundObj, index) => {
            return(
                <button className="btn-class" key={index} onClick={()=> {this.SoundPlay(soundObj.sound)}}>
                  {soundObj.label}
                </button>
            )
        
          })
      
      }

      render() {
        Howler.volume(1.0);
        return <div className="App">
           {this.RenderButtonAndSound()}
        </div>;
    
      }
}


export default App;