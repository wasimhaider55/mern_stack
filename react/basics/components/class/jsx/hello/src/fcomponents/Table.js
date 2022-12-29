import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Table = () => {
    const [user , setuser]  = useState([]);
    useEffect(() =>{
        const loadData = async () =>{
            const {data} = await axios.get("https://api.github.com/users");
            setuser(data);
        }

        loadData();

    },[user])
    return (


        <div>
            <ol>
                {
                    user.map(user =>{
                        return <li key={user.id}>{user.login}</li>
                    })
                }
            </ol>
        </div>
    )
}

export default Table