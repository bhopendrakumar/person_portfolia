import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import {SiGeeksforgeeks} from 'react-icons/si';

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    icon: <a href='https://leetcode.com/bhopendrakumar/' target='_blank'><SiLeetcode size={50}/></a>,
    name: 'LeetCode',
    review: 'LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews. and Solve Easy to Hard Difficulty Problems.'


  },
  {
    id: 2,
    icon: <a href='https://github.com/bhopendrakumar' target='_blank'><FaGithub size={50}/></a>,
    name: 'GitHub',
    review: 'GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.'


  },
  {
    id: 3,
    icon: <a href='https://auth.geeksforgeeks.org/user/bhopendrasahu2899' target='_blank'><SiGeeksforgeeks size={50}/></a>,
    name: 'GFG',
    review: 'All The Important Topics Required For The Technical Round Interviews In Product Companies. Enroll in GeeksforGeeks CIP course for technical interview preparation & coding practice.'

  }
]
function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from your side</h5>
      <h2>My Coding Profiles</h2>

      <Swiper className='conatainer testimonials_container'

      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}>
     
        {
          // read about the brackest...
          data.map(({ icon, name, review, id }) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                {/* //<div className='client_avatar'> */}
                 {icon}
                {/* </div> */}

                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                   {review}
                </small>

              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
