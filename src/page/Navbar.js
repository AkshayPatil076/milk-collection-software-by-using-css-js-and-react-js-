// import { Component } from "react";
import './assite/navbar.css'

import 'bootstrap-icons/font/bootstrap-icons.css';

let b ;
// Change the language of an website text 
export function language(b){
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
      
   {language("hindi")}
       {/* <!--=============== HEADER ===============--> */}
      <header class="header">
         <nav class="nav container">
            <div class="nav__data">
               <a href="#" class="nav__logo" >
               <i class="bi bi-bookmark-fill"></i> &nbsp; &nbsp; &nbsp; Company
               </a>
               
               <div class="nav__toggle" id="nav-toggle">
                  {/* <i class="ri-menu-line nav__burger"></i> */} <i class="bi bi-menu-button-wide-fill  nav__burger"></i>
                  {/* <i class="ri-close-line nav__close"></i> */} <i class="bi bi-menu-button-fill nav__burger"></i>
               </div>
               
            </div>

            {/* <!--=============== NAV MENU ===============--> */}
            <div class="nav__menu" id="nav-menu">
               <ul class="nav__list">
                  <li><a href="#" class="nav__link"><i class="bi bi-pc-display-horizontal"></i>  &nbsp;&nbsp;&nbsp;{language()[0]}</a></li>
                  {/* दूध खरेदी आणि विक्री */}

      {/* reports */}
                  {/* <li><a href="#" class="nav__link"><i class="bi bi-flag-fill"></i>&nbsp;&nbsp;&nbsp;रिपोर्टों</a></li> */}

                  {/* <!--=============== DROPDOWN 1 ===============--> */}
                  <li class="dropdown__item">
                     <div class="nav__link"><i class="bi bi-flag-fill"></i>&nbsp;&nbsp;&nbsp;    
                     {language()[1]} <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul class="dropdown__menu">
                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-pie-chart-line"></i> Overview
                           </a>                          
                        </li>

                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-arrow-up-down-line"></i> Transactions
                           </a>
                        </li>
                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-arrow-up-down-line"></i> Transactions
                           </a>
                        </li>

                        {/* <!--=============== DROPDOWN SUBMENU ===============--> */}
                     
                     </ul>
                  </li>
                  
                  <li><a href="#" class="nav__link"><i class="bi bi-gear-wide-connected"></i>&nbsp;&nbsp;&nbsp;{language()[2]}</a></li>

                  {/* <!--=============== DROPDOWN 2 ===============--> */}
                  <li class="dropdown__item">
                     <div class="nav__link">
                     <i class="bi bi-people-fill"></i>&nbsp;&nbsp;&nbsp;{language()[3]}
                     </div>

                     <ul class="dropdown__menu">
                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-user-line"></i> Profiles
                           </a>                          
                        </li>

                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-lock-line"></i> Accounts
                           </a>
                        </li>

                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-message-3-line"></i> Messages
                           </a>
                        </li>
                     </ul>
                  </li>

                  <li><a href="#" class="nav__link"><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;&nbsp;{language()[4]}</a></li>
               </ul>
            </div>
         </nav>
      </header>
     
      </>
   );
}
export default Navbar
