import { Component } from "react";
import Image from './Image';
import Details from './Details';

export default class App extends Component {
    render() {
        return (
            <div>
                 <Image
                 url ="https://randomuser.me/portraits/men/3.jpg"
                 />
                <Details
                para="any text"
                buttontext="click Me"
                 />

            </div>
        )
    }
}