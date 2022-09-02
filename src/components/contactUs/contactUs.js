import React from 'react';
import './contactUs.css';
import Form from 'react-bootstrap/Form';

function ContactUs() {
  return (
    <div className='contactUs-container' id='contactUs'>
        <div className='contact-form-container'>
            <span>CONTACT US</span>
            <form className='contact-main-form'>
                <Form.Control type="text" placeholder="Your Name" />
                <Form.Control type="text" placeholder="Your Email Id" />
                <button className='contact-button'>Book a Free Design Session</button>
                <div className='call-div'>
                    <span className='span-1'>Call</span>
                    <span className='span-2'>+91 XXXXX XXXXX</span>
                </div>
                <div className='form-text'>
                    <span className='form-text-span'>Leave a missed call and we'll reach <br /> out to you in 10min.</span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactUs