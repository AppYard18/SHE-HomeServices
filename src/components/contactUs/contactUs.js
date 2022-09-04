import React, { useRef } from 'react';
import './contactUs.css';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ms35tkb', 'template_3xh2vt9', form.current, 's3mFzbnemRtbDkiy1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        let inputs = document.querySelectorAll(".form-control");
        for (let i = 0; i<inputs.length; i++) {
            inputs[i].value = "";
        }
    };

  return (
    
    <div className='contactUs-container' id='contactUs'>
        <div className='contact-form-container'>
            <span>CONTACT US</span>
            <form className='contact-main-form' ref={form} onSubmit={sendEmail} >
                <Form.Control type="text" placeholder="Your Name" name='user_name' />
                <Form.Control type="text" placeholder="Your Email Id" name='user_email' />
                <Form.Control type="text" placeholder="Enter Your Mobile Number" name='user_phone' />
                <button type='submit' className='contact-button'>Book a Free Design Session</button>
                <div className='call-div'>
                    <span className='span-1'>
                        <a href="https://wa.me/7764945904">
                            <svg width="40" height="40" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.9601 13.665C43.6801 0.899999 26.7751 -2.895 13.6651 5.04C0.900094 12.975 -3.23991 30.225 5.04009 42.99L5.73009 44.025L2.97009 54.375L13.3201 51.615L14.3551 52.305C18.8401 54.72 23.6701 56.1 28.5001 56.1C33.6751 56.1 38.8501 54.72 43.3351 51.96C56.1001 43.68 59.8951 26.775 51.9601 13.665ZM44.7151 40.23C43.3351 42.3 41.6101 43.68 39.1951 44.025C37.8151 44.025 36.0901 44.715 29.1901 41.955C23.3251 39.195 18.4951 34.71 15.0451 29.535C12.9751 27.12 11.9401 24.015 11.5951 20.91C11.5951 18.15 12.6301 15.735 14.3551 14.01C15.0451 13.32 15.7351 12.975 16.4251 12.975H18.1501C18.8401 12.975 19.5301 12.975 19.8751 14.355C20.5651 16.08 22.2901 20.22 22.2901 20.565C22.6351 20.91 22.6351 21.6 22.2901 21.945C22.6351 22.635 22.2901 23.325 21.9451 23.67C21.6001 24.015 21.2551 24.705 20.9101 25.05C20.2201 25.395 19.8751 26.085 20.2201 26.775C21.6001 28.845 23.3251 30.915 25.0501 32.64C27.1201 34.365 29.1901 35.745 31.6051 36.78C32.2951 37.125 32.9851 37.125 33.3301 36.435C33.6751 35.745 35.4001 34.02 36.0901 33.33C36.7801 32.64 37.1251 32.64 37.8151 32.985L43.3351 35.745C44.0251 36.09 44.7151 36.435 45.0601 36.78C45.4051 37.815 45.4051 39.195 44.7151 40.23Z" fill="#F4D68F"/>
                            </svg>
                        </a>
                    </span>
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