import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
        <h5 className='center'>My Learning Path</h5>
        <h2 className='center'>RoadMap</h2>

        <div className='container services_container'>
          <article className='service'>
            <div className='services_head'>
              <h3>Data Structure</h3>
            </div>
            <ul className='service_list'>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Array and Matrix</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Linklist and String</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Recursion and Backtraking</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Stack and Queue</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Tree, Graph and Dynamic Programming</p>
              </li>
            </ul>
          </article>
          {/* end of ui ux */}
          <article className='service'>
            <div className='services_head'>
              <h3>Web Devlopment</h3>
            </div>
            <ul className='service_list' >
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>HTML</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>CSS and Bootstrap</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>JavaScript and Jquery</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>React.js and Node.js</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Git and GitHub</p>
              </li>
            </ul>
            {/* end of webdevlopment */}
          </article>
          <article className='service'>
            <div className='services_head'>
              <h3>Computer Subjects</h3>
            </div>
            <ul className='service_list'>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Operating System</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Database Management System</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Structured Query Language</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Computer Networks</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Oops</p>
              </li>
            </ul>
          </article>
        </div>
    </section>
  )
}

export default Services
