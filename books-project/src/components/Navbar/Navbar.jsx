            // Import  useState hook and the Link and HiOutlineMenuAlt3 components from the react-router-dom library//
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
            // Create a state variable called toggleMenu,  to false//
const [toggleMenu, setToggleMenu] = useState(false);
  // Define a function called handleNavbar that toggles the value of the toggleMenu state variable//
const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    // Add a navigation element with a class of "navbar" and an id of "navbar"//
    <nav className='navbar' id = "navbar">
      // Add a div element with a class of "container navbar-content flex" to contain the contents of the navigation bar//
      <div className='container navbar-content flex'>
        // Add a div element with a class of "brand-and-toggler flex flex-sb" to contain the brand name and the menu toggler button//
        <div className='brand-and-toggler flex flex-sb'>
          // Add a Link component that links to the home page ("/") and contains the logo and the brand name//
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Bookstore</span>
          </Link>
          // Add a button  that toggles the menu when clicked.//
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            // Add an icon from the HiOutlineMenuAlt3 component that changes color based on whether the menu is toggled or not//
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        // Add a div element with a class of "navbar-collapse" that contains a list of links to other pages.//
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            // Add a Link component that links to the home page ("/") and displays the text "Home".//
            <li className='nav-item'>
              <Link to = "/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            // Add a Link component that links to the about page ("/about") and displays the text "About"//
            <li className='nav-item'>
              <Link to = "/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// Export the Navbar component //
export default Navbar;
