import React ,{Component} from "react";
export default class HideShow extends Component {
    constructor(){
        super();
        this.state = {
            label : "hide",
            status : true
        }
        
        
    }


    render(){
        return (
            <div>
                {
                 this.state.status && <h1>this is ther para which we want to show and hide</h1> }
                <button onClick={() => {
                    this.setState ({
                        label : "show",
                        status : !this.state.status,  
                    })
                }}>{this.state.label}</button>
            </div>
        )
    }
}