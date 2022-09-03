import React, { useEffect } from 'react';
import './Design.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Button from 'react-bootstrap/Button';
import { CCarousel, CCarouselItem } from '@coreui/react';

function Design() {

    const buttonSelect = () => {
        let buttons = document.querySelectorAll(".btn");
        let carousels = document.querySelectorAll(".custom-carousel");
        let content_heads = document.querySelectorAll(".design-content-head");
        
        for(let i = 0; i<buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                console.log(i);
                if (i === 0) {
                    buttons[0].classList.add("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.remove("active-now");
                    content_heads[0].classList.add("display");
                    content_heads[1].classList.remove("display");
                    content_heads[2].classList.remove("display");
                    content_heads[3].classList.remove("display");
                    carousels[0].classList.add("display");
                    carousels[1].classList.add("display");
                    carousels[2].classList.add("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                } else if (i === 1) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.add("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.remove("active-now");
                    content_heads[0].classList.remove("display");
                    content_heads[1].classList.add("display");
                    content_heads[2].classList.remove("display");
                    content_heads[3].classList.remove("display");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.add("display");
                    carousels[4].classList.add("display");
                    carousels[5].classList.add("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                } else if (i === 2) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.add("active-now");
                    buttons[3].classList.remove("active-now");
                    content_heads[0].classList.remove("display");
                    content_heads[1].classList.remove("display");
                    content_heads[2].classList.add("display");
                    content_heads[3].classList.remove("display");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.add("display");
                    carousels[7].classList.add("display");
                    carousels[8].classList.add("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                } else if (i === 3) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.add("active-now");
                    content_heads[0].classList.remove("display");
                    content_heads[1].classList.remove("display");
                    content_heads[2].classList.remove("display");
                    content_heads[3].classList.add("display");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.add("display");
                    carousels[10].classList.add("display");
                    carousels[11].classList.add("display");
                }
            })
        }
    }

    useEffect(() => {
        buttonSelect();
    })

    return (
        <div className='design-main-container tag' id='design'>
            <div className='main-content-container'>
                <div className='design-content-head display'>
                    <div className='head-title-1'>
                        DESIGN
                    </div>
                    <div className='head-title-2'>
                        YOUR HOME YOUR STYLE                    
                    </div>
                </div>
                <div className='gallery-headers-button-container'>
                    <Button className='active-now' onClick={buttonSelect}>Bedroom</Button>
                    <Button onClick={buttonSelect}>Living Room</Button>
                    <Button onClick={buttonSelect}>Kitchen</Button>
                    <Button onClick={buttonSelect}>Other</Button>
                    
                </div>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" /> 
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display home-tablet">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" /> 
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display home-mobile">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design2.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design3.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/design1.png")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    )
}

export default Design