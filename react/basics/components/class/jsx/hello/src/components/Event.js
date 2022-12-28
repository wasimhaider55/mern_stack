import React, { Component } from 'react'

export default class Event extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        
    }


    handleClick (e) {
      if (e.target.id === "1"){
        console.log("button one click");
      }
      else if (e.target.id === "2"){
        console.log("button two click");
      }
    
    }
    render() {
        return (
            <div>
                <button
                 onClick={(e) => this.handleClick(e)}
                 id="1"
                 name="btn1" >
                    click 1
                 </button>
                <button 
                onClick={(e) => this.handleClick(e)}
                id="2"
                name="btn2" >
                    click 2
                    </button>
            </div>
        )
    }
}
