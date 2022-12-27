import { Component } from "react";
 
export default  class NoArrow extends Component {
    constructor(){
        super();
        this.state = {
            id : 0

        }
    }



    render(){
        const changed = () => {
            this.setState({
                id : 100
            })
        }
        return(

            <div>
                <h1>{this.state.id}</h1>
                <button onClick={changed} >Click</button>
            </div>
        )
    }

}