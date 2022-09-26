import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import {SiGeeksforgeeks} from 'react-icons/si';
function HeaderIcons() {
  return (
    <div className='header_socials'>

      <a href='https://www.linkedin.com/in/bhopendra-kumar-ba7490196/' target='_blank'><AiFillLinkedin/></a>

      <a href='https://github.com/bhopendrakumar' target='_blank'><FaGithub/></a>

      <a href='https://leetcode.com/bhopendrakumar/' target='_blank'><SiLeetcode/></a>
     
       <a href='https://auth.geeksforgeeks.org/user/bhopendrasahu2899' target='_blank'><SiGeeksforgeeks/></a>

      
    </div>
  )
}

export default HeaderIcons
