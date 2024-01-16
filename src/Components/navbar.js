import React, { useRef } from 'react'
import logo from '../logo.svg'
import { a, useLocation } from "react-router-dom";
import './Styles/navbar.css'
function NavBar() {
    const nav=useRef(null)
    let prevScrollPos = window.scrollY;
    window.onscroll = ()=> {
        let currentScrollPos = window.scrollY;
       
        if (currentScrollPos === 0) {
           nav.current.classList.remove('total-style')
        }
       else  if (prevScrollPos > currentScrollPos) {
           nav.current.style.top = '0px'; 
           nav.current.classList.add('total-style')
        } else {
           nav.current.style.top = '-100px';
        }
        
        prevScrollPos = currentScrollPos;
    }
  
  return (
   <nav>
    <div ref={nav} className="total ">
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-container">
            <a href="/"  className= 'inside' >home</a>
            <a href="/todo" className= 'inside' >todo</a>
            <a href="/form" className= 'inside' >validate</a>
            <a href="/tictac" className= 'inside' >tictac</a>
            <a href="/upload" className= 'inside' >upload</a>
        </div>
    </div>
   </nav>
  )
}

export default NavBar