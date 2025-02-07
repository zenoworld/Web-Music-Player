import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import UserMain from '../Components/User/UserMain.jsx';
const Linkpages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>           
        <Route path='/userMain/*' element={<UserMain/>}/>      
    </Routes>
  );
};

export default Linkpages