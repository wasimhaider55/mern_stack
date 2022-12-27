import { Component } from "react";

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            num : 0 
        }
    }
    render(){
       const  plus = () => {
        this.setState ({
            num : this.state.num+1
        })

        }
       const  minus = () => {
        this.setState ({
            num : this.state.num-1
        })

        }
       const reset = () => {
        this.setState ({
            num : 0
        })

        }
        return (
            <div>
                <h1>{this.state.num}</h1>
            <button onClick={plus}>pulus</button>
            <button onClick={minus}>minus</button>
            <button onClick={reset}>reset</button>
            </div>
        )
    }
}