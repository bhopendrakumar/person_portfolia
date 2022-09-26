import React from 'react'
import './Contact.css'
import { MdEmail } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_siwlmtj', 'template_4m50byu', form.current, 'L865f4kOPgF2FIh9K')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            {/* icon
                  name
                  value
                  link
              */}
            <MdEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>bhopendrasahu2899@gmail.com</h5>
            <a href="mailto:bhopendrasahu2899@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>

            <MdEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>bhopendrahirvani2899@gmail.com</h5>
            <a href="mailto:bhopendrasahu2899@gmail.com?" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>

            <ImWhatsapp className='contact_option-icon' />
            <h4>Email</h4>
            <h5>+918349117778</h5>
            <a href="https://api.whatsapp.com/send/?phone=918349117778&text&type=phone_number&app_absent=0" target="_blank">Send a message</a>
          </article>

        </div>
        {/* end of contact options */}
       
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name="name" placeholder='Your ful name' required />
            <input type="email" name="email" placeholder='Enter Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
     

      </div>
    </section>
  )
}
export default Contact
