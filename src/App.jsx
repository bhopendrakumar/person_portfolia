//alwas write component name as capital firest letter
// shortcut {rfce}  that ise for the  react 
import React from 'react'
import Header from './component/header/Header'
import About from './component/about/About'
import Nav from './component/nav/Nav'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonials from './component/testimonials/Testimonials'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

function App() {
  return (
    <>
    
      <Header/>
      
      <Nav />
      <About/>
      <Experience/>
      <Services/>
     
      
     
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App