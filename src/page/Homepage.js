import React from 'react'
import Navbar from './Navbar'
import './assite/Homepage.css'
import Billingpage from './Billingpage'
import Daryfarm from './img/vecteezy_dairy-farm-label-logo-with-a-dairy-cow-cartoon_7144859.jpg'

export default function Homepage() {
  
  return (
   <>
    <Navbar />
   
    <div  id='datebutton'>

      <div className='form'>
      <input type='date' className='date' />
      <br /><br /><br />
      <button className='click' onClick={
        function clickvalue (){
          document.getElementById('enter').style.display='block';
          document.getElementById('datebutton').style.display='none';
        }
      }>START</button>
      </div>
      <img className='daryimage' src={Daryfarm} />

    </div>

      {/* <Billingpage /> */}
   </>
    
  )
}
