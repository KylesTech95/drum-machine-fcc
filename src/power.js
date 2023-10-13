import React from 'react'
import './App.css'

export default class Power extends React.Component {
    
    render(){
        return (
            <>
            <div className="power-label label">On</div>
                <div className="power power-btn btn" onClick={this.props.item}>
                    
                <div className="knob-off knob-on"></div>{/*Both on & off classes are programmed in order to access it's active value.*/}
                </div> 
            </>
          )
    }
  
}
