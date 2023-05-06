//import necessary modules from respective folders//
import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

//defining the header component//
const Header = () => {
  //having divs to add some padding to the header component//
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>We are passionate about books and believe that everyone should have access to the joy of reading. Thank you for choosing our website, and happy reading!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}



export default Header