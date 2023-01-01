import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Proudct = () => {
    const {pid} = useParams();
    const navigation = useNavigate();
  return ( 
    <div>Proudct no : {pid}
    <p>SELECT * from PRODUCTS whter products id is : {pid}</p>
    <button style={{width:300 , height : 300 , 
        backgroundColor : "red" , color:"white"}} onClick={() =>{
            navigation(-1)
    }}> BACK</button>
    </div>
  )
}

export default Proudct