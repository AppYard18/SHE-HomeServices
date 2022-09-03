import React from 'react';
import './testimonies.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

function Testimonies() {
  return (
    <div className='testimonies-container tag' id='testimonies'>
        <div className='testimonies-profiles'>
            <CCarousel indicators dark transition='crossfade' interval={4000}  className="testimonies-carousel">
                <CCarouselItem>
                    <CImage src={require("../../images/testimonies1.png")} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={require("../../images/testimonies2.png")} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={require("../../images/testimonies3.png")} alt="slide 3" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={require("../../images/testimonies4.png")} alt="slide 4" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={require("../../images/testimonies5.png")} alt="slide 5" />
                </CCarouselItem>
            </CCarousel>
        </div>
        <div className='testimonies-head-container'>
            <span className='testimonies-head-title'><span>HAPPY</span> CUSTOMERS</span>
        </div>
    </div>
  )
}

export default Testimonies