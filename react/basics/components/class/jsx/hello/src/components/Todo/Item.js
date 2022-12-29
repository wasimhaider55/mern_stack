import React, { Component } from 'react'

export default class Item extends Component {
  constructor(){
    super();
  }
  render() {
    return (
        <li key={this.props.text}><input type="checkbox"  />{this.props.text} - {this.props.status}</li>
    )
  }
}
