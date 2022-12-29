import React, { Component } from 'react'

export default class Add extends Component {
    constructor(){
        super();
        this.state = {
            textTask : " "
        }
    }
    onChange(e){
        this.setState({
            textTask : e.target.value
        })
       
    }
    onSubmit(){
        this.setState ({
            
        })
    }



    render() {
        return (
            <div>

                <h1>Add New Tasks</h1>

                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="text"
                    id="text"
                    value={this.state.textTask}
                    onChange={this.handleChange}
                    

                    />
                </form>
            </div>
        )
    }
}
