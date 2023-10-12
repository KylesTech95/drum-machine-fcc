import './App.js';
import './App.css';
import { useState,useEffect } from 'react';


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
const [mute,setMute] = useState(false)
//styles object to simulate that a keypad is clicked and unclicked
const styles = {
    clicked:'background:gold;border: 3px solid #333; color:#333;',
    unclicked: 'background:#333;border: 3px solid gold; color:#fff;'
}
//keydown fucntion
const handleKeyDown = (e) => {
    let audio = document.querySelectorAll('.drum-pad')
    let k = e.key.toUpperCase()
    audio.forEach(el=>{
        var id = el.children[0].id
        var audio = el.children[0]
        //promise
        if(id === k) {
            try{
                audio.play()
                el.style = styles.clicked
                setTimeout(()=>{
                    el.style=styles.unclicked
                },50)
            }
           catch (err){
                console.log(err)
            }
        }
       
    })
}
useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
})
// let c=0;//counter
var handlePower = (e) => {
    //We set the state to determine weather the "mute" functionality is true of false
    var base = e.currentTarget;//Current target ensures that any other targets (i.e. children) will interfere with the click.
    var display = e.currentTarget.nextSibling;//grab the current target's next sibling and assign this a varibale (display)
    var label = e.currentTarget.previousSibling
    // c++//start the count
    let togBtn = base.children[0]
}
const handleClick = (e)=>{
    var audio = e.target.children[0]
    audio.play()
    
        e.target.style = styles.clicked
        setTimeout(()=>{
            e.target.style = styles.unclicked
        },50)
}

    return ( 
    <>
{/*Container*/}
<div id="drum-machine" className="drum-container">
{/*controls*/}
        <div className="controls-container">

{/*Power Button Controls*/}
        <div className="power-label label">On</div>
        <div className="power power-btn btn" onClick={handlePower}>
            
        <div className="knob-off knob-on"></div>{/*Both on & off classes are programmed in order to access it's active value.*/}
        </div>              
{/*display*/}
            <div id="display" className="display-on"></div>
            <div className="sound-control sound snd-ctrl snd ctrl"></div>
        </div>
{/*key pad*/}
    <div className="btns-container">
       {
       drumset.map((pad,i) => {
        return <div key={i} className="drum-pad" onClick={handleClick} id={pad.text}>
                    <audio muted={mute} src={pad.src} id={pad.id} className="clip"></audio>
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