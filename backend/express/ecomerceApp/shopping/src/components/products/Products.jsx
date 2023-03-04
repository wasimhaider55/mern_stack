import React from 'react'
import {useEffect,useState } from 'react';
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/products" ,)
    .then(res =>{
     setProducts(res.data);

    }).catch(err => {
      console.log(err);
    })

  },[products])
  return (
    <div>
      {products.length > 0 && products.map(prods =>{
        return (
          <tr>
            <td>{prods.title}</td>
            <td>{prods.price}</td>
          </tr>
        )
      })}
    </div>
  )
}

export default Products