import { Component } from "react";
export default class List extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }

    }


    render() {
        const loadData = () => {
            fetch("https://api.github.com/users")
                .then(json => {
                    return json.json();
                })
                .then(data => {
                    this.setState({
                        list: data
                    })
                })
        }
        return (

            <div>
                <ol>
                    {
                        this.state.list.map(
                            (n, i) => {
                                return <li key={i}>{n.login} -
                                    <img src={n.avatar_url} alt={n.login} style={{

                                        width: 110,
                                        height: 110,
                                        display: "flex",
                                        flexDirection:"column",
                                        borderRadius: 5,
                                    }} /></li>
                            })
                    }
                </ol>
                <button onClick={loadData}>Fetch</button>

            </div>
        )
    }


}

