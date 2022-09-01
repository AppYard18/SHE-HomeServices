import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Design from '../Design/Design';

function Home() {
  return (
    <div className='home_container'>
        <Hero />
        <Design />
    </div>
  )
}

export default Home