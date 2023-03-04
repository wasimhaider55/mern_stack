import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import Logout from "./components/logout/Logout";
import Product from "./components/product/Product";
import Products from "./components/products/Products";
import {NotificationContainer} from 'react-notifications';

import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

const App = () => {


  return (

    
    <Router>
      <NotificationContainer/>
      {/* NAVBAR */}
      <Navbar bg="dark" variant='dark' className='mb-5'>
        <Container>
          <Nav className='me-auto'>
            <Link className="nav-link" to="/home">Home </Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/products">Products</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/logout">Logout</Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='conatiner'>
        <Routes>
          <Route path="/home" element={<Home/>}> 
          </Route>
          <Route path='/register' element={<Register />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/logout' element={<Logout />}> </Route>
          <Route path='/product' element={<Product />}> </Route>
          <Route path='/products' element={<Products />}> </Route>
          <Route path='/*' element={<Error/>}> </Route>
        </Routes>
      </div>

      {/* FOOTER */}

    </Router>

  )
}

export default App