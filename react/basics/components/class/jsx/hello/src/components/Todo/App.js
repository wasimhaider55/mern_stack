import React, { Component } from 'react'
import Add from './Add'
import List from './List'
import Reset from './Reset'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks : [ {"text": "mango" , "status" : "incomplete"},
                {"text": "Apple" , "status" : "incomplete"},
                {"text": "Orange" , "status" : "incomplete"},
                {"text": "Tomato" , "status" : "complete"},
                {"text": "melon" , "status" : "incomplete"}]
    }
  }

  reset = () => {
    this.setState({ tasks: [] })
}
  render() {
    return (
      <div>
        <h1>Total Task : {this.state.tasks.length}</h1>
        <h1 style={{color : "red"}}> Incomplete : {this.state.tasks.filter (tasks => 
          tasks.status === "incomplete").length}</h1>

        <h1>Complete : {this.state.tasks.filter(tasks => 
          tasks.status === "complete").length}</h1>



        <Add />
        <List tasks={this.state.tasks} />
        <Reset reset={this.reset} />

        
       </div>
    )
  }
}
