import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Design from '../Design/Design';
import Testimonies from '../Testimonies/testimonies';
import $ from 'jquery';

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

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