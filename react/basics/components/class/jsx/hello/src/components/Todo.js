import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFoucus = this.handleFoucus.bind(this);
        this.state = {
            item : "",
            list : ["item1", "item2","item3"]
        }

    }

    handleChange(e){
        this.setState ({
           item : e.target.value
        })

    }
    handleSubmit(e){
        e.preventDefault();
        if (this.state.item === " ") {
            alert ("empty is not allowed (da sa kai ) ");
        }
        else if (this.state.list.indexOf(this.state.item) < 0 ){
            this.setState({
                item : " ",
                list : this.state.list.concat(this.state.item)
            })    
        }

        else {
            alert ("item is already in the list ")
        }
     }


     handleFoucus () {
        this.setState ({
            item : " ",

        })
    }
     

    render() {
       
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                     type="text" 
                     name="item"
                     id="item"
                     placeholder='Enter a term'
                     onChange={this.handleChange}
                     onFocus={this.handleFoucus}
                     value={this.state.item}
                     />

                     <button>Add Item</button>

                </form>

                <ul>
                    {
                        this.state.list.map((l,k) =>{
                            return <li key={k}>{l}</li>
                        })
                    }
                </ul>  

                <button onClick={() => { this.setState ({
                        list : []
                    })
                }}>Reset</button>              
            </div>
        )
    }
}
