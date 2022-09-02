import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Design from '../Design/Design';
import Testimonies from '../Testimonies/testimonies';

function Home() {
  return (
    <div className='home_container'>
        <div className="content-hover-background"></div>
        <Hero />
        <Design />
        <Testimonies />
    </div>
  )
}

export default Home