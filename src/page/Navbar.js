// import { Component } from "react";
// import { Link } from 'react-router-dom';
import './assite/navbar.css'

import 'bootstrap-icons/font/bootstrap-icons.css';
// import Billingpage from './Billingpage';

// import {  Link } from "react-router-dom";
// import Homepage from './Homepage';


import { Outlet, Link } from "react-router-dom";
// import Homepage from './Homepage';

// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  



// Change the language of an website text 
export function language(){
   let b ='eng';
   const English = ["Milk Collection & Billing","Reports","Setting ","Client","Contact"]
   const Hindi = [" दूध खरेदी आणि विक्री","रिपोर्टों","सेटिंग","ग्राहक","संपर्क"];
   // const list = Hindi.map((Hindi)=> <p>{Hindi}</p>)
   // props.b;
   
   if(b === "hindi"){
      const list = Hindi.map((Hindi)=> <p>{Hindi}</p>)
      return list
   }
   else{
      const list = English.map((English)=> <p>{English}</p>)
      return list
   }
   
  }

  
function Navbar(){

   return(

      <>
       {/* <Router> */}
       {/* <!--=============== HEADER ===============--> */}
      <header className="header">
      
         <nav className="nav container">
            <div className="nav__data">
               <Link  className="nav__logo" to='/Home'>
               <i className="bi bi-bookmark-fill"></i> &nbsp; &nbsp; &nbsp; Company
               </Link>
               
               <div className="nav__toggle" id="nav-toggle">
                  {/* <i classname="ri-menu-line nav__burger"></i> */} <i className="bi bi-menu-button-wide-fill  nav__burger"></i>
                  {/* <i classname="ri-close-line nav__close"></i> */} <i className="bi bi-menu-button-fill nav__burger"></i>
               </div>
               
            </div>

            {/* <!--=============== NAV MENU ===============--> */}
            <div className="nav__menu" id="nav-menu">
               <ul className="nav__list">
                  <li><Link  className="nav__link" to='/Home'><i className="bi bi-pc-display-horizontal"></i>  &nbsp;&nbsp;&nbsp;{language()[0]}</Link></li>
                  {/* दूध खरेदी आणि विक्री */}

      {/* reports */}
                  {/* <li><a href="#" class="nav__link"><i class="bi bi-flag-fill"></i>&nbsp;&nbsp;&nbsp;रिपोर्टों</a></li> */}

                  {/* <!--=============== DROPDOWN 1 ===============--> */}
                  <li className="dropdown__item">
                     <div className="nav__link"><i className="bi bi-flag-fill"></i>&nbsp;&nbsp;&nbsp;    
                     {language()[1]} <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul className="dropdown__menu">
                        <li>
                           <Link className="dropdown__link" to='/Home'>
                              <i clas="ri-pie-chart-line"></i> Overview
                           </Link>                          
                        </li>

                        <li>
                           <Link  className="dropdown__link" to='/about'>
                              <i className="ri-arrow-up-down-line"></i> Transactions
                           </Link>
                        </li>
                        <li>
                           <Link className="dropdown__link" to='/home'>
                              <i className="ri-arrow-up-down-line"></i> Transactions
                           </Link>        
                        </li>

                        {/* <!--=============== DROPDOWN SUBMENU ===============--> */}
                     
                     </ul>
                  </li>
                  
                  <li><Link to="/kllkl" className="nav__link"><i className="bi bi-gear-wide-connected"></i>&nbsp;&nbsp;&nbsp;{language()[2]}</Link></li>

                  {/* <!--=============== DROPDOWN 2 ===============--> */}
                  <li className="dropdown__item">
                     <div className="nav__link">
                     <i className="bi bi-people-fill"></i>&nbsp;&nbsp;&nbsp;{language()[3]}
                     </div>

                     <ul className="dropdown__menu">
                        <li>
                           <Link className="dropdown__link" to='/about'>
                              <i className="ri-user-line"></i> Profiles
                           </Link>                          
                        </li>

                        <li>
                           <Link className="dropdown__link" to='/Contact'>
                              <i className="ri-lock-line"></i> Accounts
                           </Link>
                        </li>

                        <li>
                           <Link className="dropdown__link" to='/hhhhh'>
                              <i className="ri-message-3-line"></i> Messages
                           </Link>
                        </li>
                     </ul>
                  </li>

                  <li><a className="nav__link" href='/kkkk'><i className="bi bi-telephone-fill"></i>&nbsp;&nbsp;&nbsp;{language()[4]}</a></li>
               </ul>
            </div>
         </nav>
      
     </header>
     {/* <Route path="/" element={<Homepage />} />
      */}
     <Outlet />    
       
      {/* </Router> */}
      {/* </Router> */}
      </>
   );
}
export default Navbar;
