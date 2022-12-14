import React, { useEffect } from 'react';
import './paint.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Button from 'react-bootstrap/Button';
import { CCarousel, CCarouselItem } from '@coreui/react';
import { BsArrowRight } from "react-icons/bs";

function Paint() {

    const buttonSelect = () => {
        let buttons = document.querySelectorAll(".paint-btn");
        let carousels = document.querySelectorAll(".paint-carousel");
        
        for(let i = 0; i<buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                console.log(i);
                if (i === 0) {
                    buttons[0].classList.add("active-now");
                    buttons[1].classList.remove("active-now");
                    carousels[0].classList.add("display");
                    carousels[1].classList.add("display");
                    carousels[2].classList.add("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                } else if (i === 1) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.add("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.add("display");
                    carousels[4].classList.add("display");
                    carousels[5].classList.add("display");
                }
            })
        }
    }

    useEffect(() => {
        buttonSelect();
    })

    return (
        <div className='paint-main-container tag' id='paint'>
            <div className='main-content-container'>
                <div className='paint-content-head display'>
                    <div className='head-title-1'>
                        PAINT
                    </div>
                    <div className='head-title-2'>
                        YOUR HOME YOUR STYLE                    
                    </div>
                </div>
                <div className='gallery-sub-headers-container'>
                    <div className='gallery-headers-button-container'>
                        <Button className='paint-btn active-now' onClick={buttonSelect}>Wall Painting</Button>
                        <Button className='paint-btn' onClick={buttonSelect}>Wall Design</Button>
                    </div>
                    <div className='view-all-container display'>
                        <span><a href="/paint">View All</a></span>
                        <BsArrowRight />
                    </div>
                </div>

                {/* Wall Painting Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel paint-carousel display home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0179.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0181.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0184.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0186.jpg")} alt="image1" /> 
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0188.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0189.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0191.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0199.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel paint-carousel display home-tablet">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0179.jpg")} alt="image1" /> 
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0181.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0184.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0186.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0188.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0189.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0191.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0199.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel paint-carousel display home-mobile">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0179.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0181.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0184.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0186.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0188.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0189.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0191.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Painting/IMG-20220919-WA0199.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Wall Design Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel paint-carousel home-normal">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0177.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0178.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0180.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0182.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0183.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0185.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0187.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0190.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel paint-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0177.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0178.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0180.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0182.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0183.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0185.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0187.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0190.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel paint-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0177.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0178.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0180.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0182.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0183.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0185.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0187.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Wall Design/IMG-20220919-WA0190.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    )
}

export default Paint