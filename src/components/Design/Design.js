import React, { useEffect } from 'react';
import './Design.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Button from 'react-bootstrap/Button';
import { CCarousel, CCarouselItem } from '@coreui/react';

function Design() {

    const buttonSelect = () => {
        let buttons = document.querySelectorAll(".btn");
        let carousels = document.querySelectorAll(".custom-carousel");
        
        for(let i = 1; i<buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                console.log(i);
                if (i === 1) {
                    buttons[1].classList.add("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.remove("active-now");
                    buttons[4].classList.remove("active-now");
                    carousels[0].classList.add("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                } else if (i === 2) {
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.add("active-now");
                    buttons[3].classList.remove("active-now");
                    buttons[4].classList.remove("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.add("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                } else if (i === 3) {
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.add("active-now");
                    buttons[4].classList.remove("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.add("display");
                    carousels[3].classList.remove("display");
                } else if (i === 4) {
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.remove("active-now");
                    buttons[4].classList.add("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.add("display");
                }
            })
        }
    }

    const hoverImage = () => {
        // document.querySelector(".design-main-container").classList.add("blur");
        // document.querySelector(".image-div-container").classList.add("no-blur");
    }
    
    const noHoverImage = () => {
        // document.querySelector(".design-main-container").classList.remove("blur");
    }

    useEffect(() => {
        buttonSelect();
    })

    return (
        <div className='design-main-container' id='design'>
            <div className='main-content-container'>
                <div className='design-content-head'>
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
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display normal">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display tablet">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display mobile">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>

                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel normal">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel tablet">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel mobile">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>

                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel normal">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel tablet">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel mobile">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>

                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel normal">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel tablet">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel mobile">
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container' onMouseOver={hoverImage} onMouseLeave={noHoverImage}>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    )
}

export default Design