import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { AiOutlineFolder } from 'react-icons/ai'
const data = [
  {
    id:1,
    image : IMG1,
    title:'TinDog',
    desc:'Build a playground website for learning about the concepts of Bootsrap, CSS and HTML.',
    github:'https://github.com/govindgb',
    demo:'https://dribbble.com/shots/19217644-Crypto-wallet-Mobile-app'
  },
  {
    id:2,
    image : IMG2,
    title:'Free-Browser-Frame-Mockup',
    desc:'Build a playground website for learning about the concepts of Bootsrap, CSS and HTML.',
    github:'https://github.com/govindgb',
    demo: 'https://dribbble.com/shots/19369927-Free-Browser-Frame-Mockup'
  },
  {
    id:3,
    image : IMG3,
    title:'LimeMedia-Logo-Design',
    desc:'Build a playground website for learning about the concepts of Bootsrap, CSS and HTML.',
    github:'https://github.com/govindgb',
    demo: 'https://dribbble.com/shots/19370925-LimeMedia-Logo-Design'
  },
  {
    id:4,
    image : IMG4,
    title:'Web3-Community-website-design',
    desc:'Build a playground website for learning about the concepts of Bootsrap, CSS and HTML.',
    github:'https://github.com/govindgb',
    demo: 'https://dribbble.com/shots/19371820-Web3-Community-website-design'
  },
  {
    id:5,
    image : IMG5,
    title:'Workly-BPM-SaaS-Website',
    desc:'Build a playground website for learning about the concepts of Bootsrap, CSS and HTML.',
    github:'https://github.com/govindgb',
    demo: 'https://dribbble.com/shots/19324105-Workly-BPM-SaaS-Website'
  },
  {
    id:6,
    image : IMG6,
    title:'Dribbble-Man-Animated-3D-Character',
    desc:'Build a playground website for learning about the concepts of Bootsrap, CSS and HTML.',
    github:'https://github.com/govindgb',
    demo: 'https://dribbble.com/shots/19367809-Dribbble-Man-Animated-3D-Character'
  }
]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5 >My recent Work</h5>
      <h2 >portfolio</h2>

      <div className='conatainer portfolio_container'>
      {
        data.map(({id,desc,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>
              {/* <img src={image} alt={title} /> */}
              <AiOutlineFolder size={25} />
            </div>
            <h3>{title}</h3>
            <h5 className='desciption'>{desc}</h5>
            <div className='portfolio_items_cta'>
             <a href={github} className='btn pbtn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
            
          </article>
          )
        })
      }
       
      </div>

    </section>
  )
}

export default Portfolio
