import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return NotificationManager.error("you need to login first!!", " ", 3000);
    axios.get("http://localhost:3001/api/products",
      {
        headers: {
          token: token
        }
      })
      .then(res => {
        setProducts(res.data);

      }).catch(err => {
        NotificationManager.error("you need to login first", " ", 3000);
      })

  }, [products])
  return (
    <div>
      {products.length > 0 && products.map(prods => {
        return (
          <tr>
            <td> <Link to={"/product/?pid=" + prods.id}>
              {prods.title} </Link></td>
          </tr>
        )
      })}
    </div>
  )
}

export default Products