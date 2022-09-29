import React, { useRef } from 'react';
import './Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { AiFillCheckCircle } from "react-icons/ai";


function Hero() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6oebmd', 'template_bpf0umt', form.current, 'lNceVvdcKvmFkKefE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      let inputs = document.querySelectorAll(".form-control");
      for (let i = 0; i<inputs.length; i++) {
          inputs[i].value = "";
      }

    document.querySelector(".message-sent").style.display = "flex";

    setTimeout(function(){
      document.querySelector(".message-sent").style.display = "none";
    }, 4000);
  };

  return (
    <Container id="home" className='hero-container'>
      <Row>
        <Col sm>
          <div className='hero-box'>
            <div className='hero-box-title'>
              <svg width="368" height="123" viewBox="0 0 368 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.4696 37.5171C68.0815 33.2479 66.3544 29.9295 63.2883 27.5621C60.261 25.1558 55.9336 23.9526 50.306 23.9526C46.5801 23.9526 43.4752 24.4378 40.9913 25.408C38.5073 26.3783 36.6444 27.7173 35.4025 29.425C34.1605 31.0939 33.5201 33.015 33.4813 35.1885C33.4037 36.9738 33.753 38.5456 34.5292 39.904C35.3442 41.2624 36.5086 42.4655 38.0222 43.5135C39.5747 44.5225 41.4376 45.4152 43.611 46.1914C45.7844 46.9677 48.2296 47.6468 50.9463 48.229L61.1925 50.5577C67.0918 51.8385 72.2925 53.5461 76.7946 55.6808C81.3355 57.8154 85.139 60.3575 88.2051 63.3072C91.31 66.2568 93.6581 69.6528 95.2493 73.4951C96.8406 77.3374 97.6556 81.6454 97.6944 86.4192C97.6556 93.9486 95.7539 100.411 91.9892 105.805C88.2245 111.2 82.8103 115.334 75.7467 118.206C68.7219 121.078 60.2416 122.514 50.306 122.514C40.3315 122.514 31.6378 121.019 24.2248 118.031C16.8119 115.042 11.0484 110.502 6.93444 104.408C2.82046 98.3149 0.705245 90.6108 0.588812 81.2962H28.1836C28.4164 85.1385 29.4449 88.3404 31.2691 90.9019C33.0932 93.4635 35.5965 95.404 38.779 96.7236C42.0004 98.0432 45.7262 98.703 49.9566 98.703C53.8378 98.703 57.1367 98.179 59.8535 97.1311C62.6091 96.0832 64.7243 94.6278 66.1991 92.7649C67.674 90.9019 68.4308 88.7673 68.4696 86.361C68.4308 84.11 67.7322 82.1888 66.3738 80.5975C65.0154 78.9675 62.9196 77.5703 60.0864 76.4059C57.292 75.2028 53.7213 74.0967 49.3745 73.0876L36.9161 70.1767C26.5923 67.8093 18.4614 63.9864 12.5233 58.708C6.58514 53.3909 3.63549 46.2108 3.6743 37.1678C3.63549 29.7937 5.61486 23.3316 9.61241 17.7816C13.61 12.2316 19.1406 7.90418 26.2042 4.79929C33.2678 1.69439 41.3212 0.141943 50.3642 0.141943C59.6012 0.141943 67.6157 1.71379 74.4077 4.8575C81.2385 7.9624 86.5362 12.3287 90.3009 17.9563C94.0656 23.5839 95.9867 30.1042 96.0644 37.5171H68.4696ZM112.249 121V1.77201H141.066V49.6262H188.047V1.77201H216.806V121H188.047V73.0876H141.066V121H112.249ZM234.882 121V1.77201H318.016V25.1752H263.7V49.6262H313.766V73.0876H263.7V97.5969H318.016V121H234.882ZM352.073 122.688C347.881 122.688 344.291 121.213 341.303 118.264C338.353 115.314 336.898 111.744 336.936 107.552C336.898 103.438 338.353 99.9255 341.303 97.0147C344.291 94.065 347.881 92.5902 352.073 92.5902C356.031 92.5902 359.524 94.065 362.552 97.0147C365.618 99.9255 367.17 103.438 367.209 107.552C367.17 110.346 366.433 112.888 364.997 115.178C363.6 117.468 361.756 119.292 359.466 120.651C357.215 122.009 354.751 122.688 352.073 122.688Z" fill="white"/>
              </svg>
            </div>
            <div className="hero-box-text-1">
              Home Services
            </div>
            <div className='hero-box-text'>
              We design Modular Kitchens, Furniture, Furnishings <br /> and Décor Accessories and what not to bring that <br /> smile on your face whether it's DAY 1 in your newly <br /> furnished home or Day 10,000
            </div>
          </div>
        </Col>
        <Col sm>
          <div className='hero-form'>
            <div className='main-form-container'>
              <span className='form-head-title'>Meet a Designer</span>
              <form className='main-form' ref={form} onSubmit={sendEmail}>
                <Form.Control type="text" placeholder="Your Name" name='user_name' required />
                <Form.Control type="email" placeholder="Your Email Id" name='user_email' required />
                <Form.Control type="tel" placeholder="Enter Your Mobile Number" name='user_phone' pattern='[0-9]{10}' required />
                <span className='message-sent'><AiFillCheckCircle />&nbsp;&nbsp;Message Sent</span>
                <button type='submit' className='hero-btn'>Book a Free Design Session</button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
      <div className='whatsapp-icon-container'>
        <a href="https://wa.me/919611119067" target="_blank" rel="noreferrer">
          <img src={require("../../images/WhatsApp.png")} alt="whatsapp-icon" />
        </a>
      </div>
    </Container>
  )
}

export default Hero