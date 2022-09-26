import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
function About()
{
    return (
        <section id='about'>
          
           <h5 className='tag'>Get to know</h5>
           <h2 className='tag'>About me</h2>
          
           

           <div className="container about_container">
             <div className="about_me">
              <div className='about_me_image'>
                <img src={ME} alt="my_img" />
              </div>
             </div>

             <div className='about_contend'>
               <div className='about_cards'>
                 <article className='about_card'>
                   <FaAward className='about_icon'/>
                   <h5>Experience</h5>
                   <small>6+ months working</small>
                 </article>

                 <article className='about_card'>
                   <FiUsers className='about_icon'/>
                   <h5>College</h5>
                   <small>RSR RCET, Bhilai</small>
                 </article>

                 <article className='about_card'>
                   <VscFolderLibrary className='about_icon'/>
                   <h5>Project</h5>
                   <small>10+ project complete</small>
                 </article>

                
               </div>
              
               <p>Good day, everyone. I'm a Chhattisgarh native who works as a software engineer. I'm skilled at web programming, and I also take pleasure in solving challenging issues. If you wish to join us, send us a message.</p>
               <a href='#contact' className='btn btn-primary'>Let's Talk</a>
               
              
             </div>

            

            

           </div>
       </section>
    )
}

export default About



