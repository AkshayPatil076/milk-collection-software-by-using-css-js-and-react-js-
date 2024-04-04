import React from 'react'
import Navbar from './Navbar'
import './assite/Homepage.css'
import Billingpage from './Billingpage'
import Daryfarm from './img/vecteezy_dairy-farm-label-logo-with-a-dairy-cow-cartoon_7144859.jpg'
import  { useState } from 'react';


import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";



export default function Homepage() {

  const [currentDate, setCurrentDate] = useState(getFormattedDate(new Date()));

  // Function to get the formatted date (YYYY-MM-DD)
  function getFormattedDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  return (
   <>
    <Navbar />
   
    <div  id='datebutton '>

      <div className='form'>
      <input    id="dateInput"
        type="date"
        value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)} 
        className='date' />
      <br /><br /><br />
      
      <button className='click' to='/'>START</button>
      </div>
      <img className='daryimage' src={Daryfarm} />

    </div>


   </>
    
  )
}
