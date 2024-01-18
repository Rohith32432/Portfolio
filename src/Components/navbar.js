import React, { useRef } from 'react'
import logo from '../logo.svg'
import './Styles/navbar.css'
import { Link } from 'react-router-dom';
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
            <Link to="/"  className= 'inside' >home</Link>
            <Link to="/skills"  className= 'inside' >Skills</Link>
            <a href="/form" className= 'inside' >projects</a>
            <a href="/tictac" className= 'inside' >contact</a>
            <a href="/upload" className= 'inside' >techs</a>
        </div>
    </div>
   </nav>
  )
}

export default NavBar