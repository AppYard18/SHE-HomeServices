import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Design from '../Design/Design';
import Testimonies from '../Testimonies/testimonies';
import $ from 'jquery';
import Paint from '../Paint/paint';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Commercial from '../CommercialDesign/Commercial';

$(document).on("scroll", function() {
  let pageTop = $(document).scrollTop();
  let pageBottom = pageTop + $(window).height();
  let tags = $(".tag");

  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    }
  }
});

function Home() {
  return (
    <div className='home_container'>
        <div className="content-hover-background"></div>
        <Hero />
        <Services />
        <Design />
        <Paint />
        <Commercial />
        <AboutUs />
        <Testimonies />
    </div>
  )
}

export default Home