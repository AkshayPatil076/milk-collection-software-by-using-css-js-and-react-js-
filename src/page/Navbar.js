// import { Component } from "react";
import './assite/navbar.css'

import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar(props){

  
   return(

      <>
  
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
                  <li><a href="#" class="nav__link"><i class="bi bi-pc-display-horizontal"></i>  &nbsp;&nbsp;&nbsp;दूध खरेदी आणि विक्री</a></li>

      {/* reports */}
                  {/* <li><a href="#" class="nav__link"><i class="bi bi-flag-fill"></i>&nbsp;&nbsp;&nbsp;रिपोर्टों</a></li> */}

                  {/* <!--=============== DROPDOWN 1 ===============--> */}
                  <li class="dropdown__item">
                     <div class="nav__link"><i class="bi bi-flag-fill"></i>&nbsp;&nbsp;&nbsp;    
                     रिपोर्टों <i class="ri-arrow-down-s-line dropdown__arrow"></i>
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
                  
                  <li><a href="#" class="nav__link"><i class="bi bi-gear-wide-connected"></i>&nbsp;&nbsp;&nbsp;सेटिंग</a></li>

                  {/* <!--=============== DROPDOWN 2 ===============--> */}
                  <li class="dropdown__item">
                     <div class="nav__link">
                     <i class="bi bi-people-fill"></i>&nbsp;&nbsp;&nbsp;ग्राहक
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

                  <li><a href="#" class="nav__link"><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;&nbsp;संपर्क</a></li>
               </ul>
            </div>
         </nav>
      </header>
     
      </>
   );
}
export default Navbar