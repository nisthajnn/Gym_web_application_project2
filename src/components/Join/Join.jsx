import React from 'react'
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yvmstbt', 'template_w6kotc9', form.current, '5wu8YyvHzugQTKdOQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr/>
             <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
                </div> 
                <div>
                <span className='stroke-text'>YOUR BODY</span>
                <span> WITH US?</span>
                </div> 
        </div>
        <div className="right-j">
               <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user-email" 
                placeholder='enter your email'/>
                <button className='btn btn-j'>Join Now</button>
               </form>
        </div>
    </div>
  )
}

export default Join