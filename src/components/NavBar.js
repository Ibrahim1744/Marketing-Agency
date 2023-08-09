import React, { useState , useEffect } from 'react';
import logo from '../assets/img/logo i-Global Marketing.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';




const NavBar = () => {
  const [activeLink,setActiveLink]=useState('home');
  const [scrolled , setScrolled]=useState(false)
  const [toggle,setToggle]=useState(false)
  const [dropdown,setDropdown]=useState(false)

  useEffect(() => {
    const onScroll=()=>{
      if(window.scrollY > 50)
      {
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll" , onScroll);
    return ()=> window.removeEventListener("scroll" , onScroll)
  }, []);
  const onUpdateActiveLink=(value)=>{
    setActiveLink(value)
  }

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <img className='logo-img' src={logo} alt="" />
          
        </div>
        <div onClick={()=>setToggle(prev => !prev)} className="header-menu">
          {
            toggle ? <AiFillCloseCircle/> : <GiHamburgerMenu/>
          }
        
        </div>
      </div>

      <nav style={{clipPath:toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className="navbar">
        <ul className="nav-links">
          <a href="#home" onClick={()=> setToggle(false)} className="nav-link">
           Home
          </a>
          <a href="#skills" onClick={()=> setToggle(false)} className="nav-link">
              Services
          </a> 
          <a href="#project" onClick={()=> setToggle(false)} className="nav-link">
              Porjects
          </a> 

          
        </ul>
      </nav>
      <div className="header-right">
        
      <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <a href='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </a>
            </span>
        
      </div>
    </header>
  );
}

export default NavBar;
