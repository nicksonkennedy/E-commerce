import './App.css';
import 'antd/dist/antd.css'; 
import 'transition-style';
import React, {useState } from "react";
import{BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav';
import Cart from './Components/Cart';
import { ShopProvider } from './Components/ShopContext';
import ScrollToTop from './Components/ScrollToTop';
import CheckOut from './Components/CheckOut';
import { SuccessfullPurchase } from './Components/SuccessfullPurchase';
import Home from './Components/Home';


function App() {
  
  
  return (
   
   <ShopProvider>
     <BrowserRouter>
     <Nav />
     <ScrollToTop />
     <Routes > 
             <Route path='/' element={<Home />}/> 
             <Route path='/cart' element={<Cart />}/>
             <Route path='/checkout' element={<CheckOut />}/> 
             <Route path='/success' element={<SuccessfullPurchase />}/> 
             </Routes>
   </BrowserRouter>
   </ShopProvider>
   
  );
}

export default App;
