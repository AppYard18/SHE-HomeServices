import React from 'react';
import './Home.css';
import Header from '../Header';
import Hero from '../Hero/Hero';

function Home() {
  return (
    <div className='home_container'>
        <Header />
        <Hero />
    </div>
  )
}

export default Home