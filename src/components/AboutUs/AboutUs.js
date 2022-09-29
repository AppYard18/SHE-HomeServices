import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='about-container'>
      <div className='about-inner-container'>
        <div className='about-container-head'>
            ABOUT US
        </div> 
        <div className='about-content'>
            <span className='about-content-main'><span>SHE</span>is a full-service residential & commercial interior design team.</span>
            <span className='about-content-sub'>WE focus on working closely with clients to create personalized, stress-free design experiences, helping families and businesses express themselves through their unique spaces. We are committed to creating beautiful designs that not only look great but also support your lifestyle—taking our own tastes out of the equation and focusing on defining and developing your personal style. </span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs