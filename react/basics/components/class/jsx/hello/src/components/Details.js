import { Component } from "react";

export default class Details extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <p>{this.props.para}</p>
                <button>{this.props.buttontext}</button>
            </div>
        )
    }
}