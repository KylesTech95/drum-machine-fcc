import './App.js';
import './App.css';
import { useState } from 'react';


//Drumset component
const Drumset = () => {
//(properties) - id,text & src
let drumset = [{
    id:'Q',
    text:'Heater 1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
},
{
    id:'W',
    text:'Heater 2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
},
{
    id:'E',
    text:'Heater 3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
},
{
    id:'A',
    text:'Heater 4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
},
{
    id:'S',
    text:'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
},
{
    id:'D',
    text:'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
},
{
    id:'Z',
    text:"Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
},
{
    id:'X',
    text:'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
},
{
    id:'C',
    text:'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}]
//state: mute
const [mute,setMute] = useState(true)
const clicked = 'background:gold;border: 3px solid #333; color:#333;'
const unclicked = 'background:#333;border: 3px solid gold; color:#fff;'
//keydown fucntion



    return ( 
    <>
{/*Container*/}
<div id="drum-machine" className="drum-container">
{/*controls*/}
        <div className="controls-container">

{/*Power Button Controls*/}
        <div className="power-label label"></div>
        <div className="power power-btn btn">
            <div className="knob-off"></div>
            </div>              
{/*display*/}
            <div id="display" className="display-off"></div>
            <div className="sound-control sound snd-ctrl snd ctrl"></div>
        </div>
{/*key pad*/}
    <div className="btns-container">
       {
       drumset.map((pad,i) => {
        return <div key={i} className="drum-pad" onClick={(e)=>{
            var audio = e.target.children[0]
               setMute(()=>false)
                var playingNow = audio.currentTime>0&&!audio.paused &&audio.ended && audio.readyState>audio.HAVE_CURRENT_DATA;
                if(!playingNow){
                    audio.setAttribute('src',pad.src)
                    audio.setAttribute('id',pad.id)
                    audio.play()
                }
                else{
                    return null;
                }
                
            


                e.target.style = clicked
                setTimeout(()=>{
                    e.target.style=unclicked
                },50)
        }} id={pad.text}>
                    <audio muted={mute} className="clip"></audio>
                    {pad.id}
               </div>
       })
       }
    </div>  
</div>
</>
    );  
}

export default Drumset;