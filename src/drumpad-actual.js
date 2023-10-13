import './App.js';
import './App.css';
import { useState,useEffect } from 'react';
import Display from './display.js'
import Power from './power.js'


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
            var display = document.querySelector('#display')
            drumset.forEach(pad=>{
                if(audio.id===pad.id){
                    audio.setAttribute('src',pad.src)
                    audio.play()
                    display.textContent = pad.text

                }
            })
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
const handlePower = (e) => {
    //We set the state to determine weather the "mute" functionality is true of false
    var base = e.currentTarget;//Current target ensures that any other targets (i.e. children) will interfere with the click.
    var display = e.currentTarget.nextSibling;//grab the current target's next sibling and assign this a varibale (display)
    var label = e.currentTarget.previousSibling
    var togBtn = base.children[0]

    togBtn.classList.toggle('knob-off')
    let arr = togBtn.classList.value.split` `;
    setMute(cur=>!cur)
    if(arr.length==1){
        label.textContent='Off'
        display.classList.remove('display-on')
        display.classList.add('display-off')
    }
    else{
        label.textContent='On'
        display.classList.remove('display-off')
        display.classList.add('display-on')
        display.textContent = '';
    }
     

}
const handleClick = (e)=>{
    var audio = e.target.children[0]
    var display = document.querySelector('#display')
    drumset.forEach(pad=>{
        if(audio.id===pad.id){
            audio.setAttribute('src',pad.src)
            audio.play()
            display.textContent = pad.text

        }
    })
    
        e.target.style = styles.clicked
        setTimeout(()=>{
            e.target.style = styles.unclicked
        },50)
}
useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
})

    return ( 
    <>
{/*Container*/}
<div id="drum-machine" className="drum-container">
{/*controls*/}
    <div className="controls-container">
{/*Power Button Controls*/}
        <Power item={handlePower}/>            
{/*display*/}
        <Display/>
    </div>
{/*key pad*/}
    <div className="btns-container">
       {
       drumset.map((pad,i) => {
        return <div key={i} className="drum-pad" onClick={handleClick} id={pad.text}>
                    <audio muted={mute} id={pad.id} className="clip"></audio>
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