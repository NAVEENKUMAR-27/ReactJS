import React from "react";
import'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import'./menu.css'
import'bootstrap/dist/js/bootstrap.bundle'

export function Menu(){
    return(
        <>
           <nav class="navbar navbar-expand-lg navbar-primary strong  front bg-dark">
           <Link to={'/'}  class="navbar-brand">Menu</Link>
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
               </button>

           <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li class="nav-item active">
                 <Link to={'/'}class="nav-link" >Resume <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active">
                <Link to='/Sign' class="nav-link" href="#">From</Link>
                </li>
                <li class="nav-item active">
                <Link to='/Card' class="nav-link ">Card</Link>
               </li>
               <li class="nav-item active">
               <Link  to='/Ipl' class="nav-link ">Super leauge</Link>
               </li>
               <li class="nav-item active">
               <Link  to='/But' class="nav-link "> Button</Link>
               </li>
               <li class="nav-item active">
               <Link  to='/Hello' class="nav-link "> Hello</Link>
               </li>
               <li class="nav-item active">
               <Link  to='/Noti' class="nav-link  "> Notification</Link>
               </li>

               <li class="nav-item active">
               <Link  to='/Login' class="nav-link  "> Login</Link>
               </li>

               <li class="nav-item active">
               <Link  to='/Tech' class="nav-link  "> Tech</Link>
               </li>

               <li class="nav-item active">
               <Link  to='/Cal' class="nav-link  "> Calculator</Link>
               </li>

               <li class="nav-item active">
               <Link  to='/Fru' class="nav-link  "> Fruit Count</Link>
               </li>

               <li class="nav-item active">
               <Link  to='/Feed' class="nav-link  "> FeedBack</Link>
               </li>

               
               <li class="nav-item active">
               <Link  to='/Date' class="nav-link"> Date Add</Link>
               </li>

    </ul>
    
  </div>
</nav>
        </>
    )
}

