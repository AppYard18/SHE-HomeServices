import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Design from '../Design/Design';
import Testimonies from '../Testimonies/testimonies';
import ContactUs from '../contactUs/contactUs';

function Home() {
  return (
    <div className='home_container'>
        <Hero />
        <Design />
        <Testimonies />
        <ContactUs />
    </div>
  )
}

export default Home