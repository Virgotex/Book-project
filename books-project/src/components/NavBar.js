//importing the necessary from the respective libraries//
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
    //Defining the state value toggle menu using useStae hook//
    //Start it at false to make it hidden before the page loads 
  const [toggleMenu, setToggleMenu] = useState(false);
  //define function to toggle the navigation bar section//
  //handeNavBar helps to change it when true or false so it can appear//
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    //defining the navbar components//
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
                                           // handels the visibility of logo and buttons //
        <div className='brand-and-toggler flex flex-sb'>
                                               //the logo and site name with picture //
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
                                              //button that toggles the visibility of the links //
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>
        //links to the buttons : varying the visibility depending on when the button is clicked//
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
