import React from 'react'
import './Experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
     <h5 className='c'>What Skills I Have</h5>
      <h2 className='c'>My Experience</h2>

      <div className='container experience_container'>
      
        <div className='experience_frontend'>
           <h3>Frontend Development</h3>
           <div className='experience_contend'>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
               <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small> 
               </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
               <div>
               <h4>css</h4>
               <small className='text-light'>Intermidiate</small> 
               </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
               <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Experienced</small> 
               </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
               <div>
               <h4>javascript</h4>
               <small className='text-light'>Experienced</small> 
               </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
               <div>
               <h4>jquery</h4>
               <small className='text-light'>Experienced</small> 
               </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
               <div>
               <h4>React</h4>
               <small className='text-light'>Experienced</small> 
               </div>
             </article>
           </div> 
        </div>


        <div className='experience_backend'>
        <h3>Backend Development</h3>
           <div className='experience_contend'>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
              <div>
              <h4>node js</h4>
               <small className='text-light'>Intermediate</small> 
              </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
              <div>
              <h4>MongoDB</h4>
               <small className='text-light'>Biggner</small> 
              </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
              <div>
              <h4>Express js</h4>
               <small className='text-light'>Experienced</small> 
              </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
              <div>
              <h4>Sql</h4>
               <small className='text-light'>Experienced</small> 
              </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
              <div>
              <h4>Mysql</h4>
               <small className='text-light'>Experienced</small> 
              </div>
             </article>
             <article className='experience_details'>
               <BsPatchCheckFill className='experience_details' />
              <div>
              <h4>JAVA</h4>
               <small className='text-light'>Experienced</small> 
              </div>
             </article>
           </div> 
        </div>
      </div>
    </section>
  )
}

export default Experience
