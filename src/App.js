import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home.js'
import Cart from './Components/Pages/Cart.js'
import Category from './Components/Pages/Category.js'
import Contact from './Components/Pages/Contact'
import DeliveryPayment from './Components/Pages/Delivery_payment.js'
import About from "./Components/Pages/About";
import ProductPage from './Components/Pages/ProductPage';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Product/:id" element={<ProductPage/>}/>
      <Route path="/Category" element={<Category/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/DeliveryPayment" element={<DeliveryPayment/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
  </BrowserRouter>);
}

export default App;
