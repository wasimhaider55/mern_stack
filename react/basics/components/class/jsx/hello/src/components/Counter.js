import { Component } from "react";

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count : 100 
        }
    }
    render(){
       const  handleClick = () => {
        this.setState ({
            count : 200 
        })

        }
        return (
            <div>
                <h1>{this.state.count}</h1>
            <button onClick={handleClick}>click</button>
            </div>
        )
    }
}