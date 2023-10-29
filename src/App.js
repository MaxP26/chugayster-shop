import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home.js'
import CardProduct from './Components/Pages/Card_product.js'
import Cart from './Components/Pages/Cart.js'
import Category from './Components/Pages/Category.js'
import Contact from './Components/Pages/Contact'
import DeliveryPayment from './Components/Pages/Delivery_payment.js'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Product" element={<CardProduct/>}/>
      <Route path="/Category" element={<Category/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/DeliveryPayment" element={<DeliveryPayment/>}/>
    </Routes>
  </BrowserRouter>);
}

export default App;
