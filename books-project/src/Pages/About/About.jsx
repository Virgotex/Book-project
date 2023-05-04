import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>At our book website, we believe that reading is a powerful way to enrich our lives and expand our horizons. We understand the importance of finding the right book that speaks to you, whether it's for entertainment, learning, or inspiration. That's why we've created a platform that makes it easy to search for and discover a wide range of books, from classic literature to the latest bestsellers. Our website provides a user-friendly interface that allows you to browse through different genres, authors, and titles, and read reviews and summaries to help you make an informed decision..</p>
            <p className='fs-17'>We are passionate about books and believe that everyone should have access to the joy of reading. Thank you again for choosing our website, and happy reading!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
