import React, { Component } from 'react';
import axios from 'axios';

export default class Life extends Component {
    constructor(){
        super();
        this.change = this.change.bind(this);
        this.state = {
            users : []
        }
    }

// life cycle mehtod which  is call itself (used for api calls)
    async componentDidMount(){    // if  we first time bring a data form server we use this method 
       const {data}  = await axios.get("https://api.github.com/users")

       this.setState ({
        users : data
       })
        
    }
    
    componentDidUpdate(){
        console.log("components did update call ");
        
    }
    
    componentWillUnmount(){
        console.log("components will unmount  call ");

    }

// change() {
//     this.setState ({
//         num : Math.floor(Math.random() *100) 
//     })
//  }

  render() {
    return (
      <div>
        <ul>
            {
                this.state.users.map((users , i ) => {
                    return <li key={i}>{users.login}</li>
                })
            }
        </ul>

      </div>
    )
  }
}
