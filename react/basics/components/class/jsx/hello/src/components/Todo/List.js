import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    constructor(props){
        super(props)

    }
  render() {
    return (
      <div>
         <ol>
             {
                this.props.tasks.map(tasks =>{
                    return <Item text={tasks.text} status={tasks.status} />
                })
             }
         </ol>
      </div>
    )
  }
}
