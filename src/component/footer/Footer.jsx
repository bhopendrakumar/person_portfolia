import React from 'react'
import './Footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">My Expeirience</a></li>
        <li><a href="#">RoadMap</a></li>
        <li><a href="#">My Profiles</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/govind-bhatt-a64b40202/"><AiFillLinkedin/></a>
        <a href="https://github.com/govindgb"><AiFillGithub/></a>
        {/* <a href=""></a> */}
      </div>

      <div className='footer_copyright'>
         <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
