import React from 'react';
import './Design.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Header from '../Header';
import Button from 'react-bootstrap/Button';
import { CCarousel, CCarouselItem } from '@coreui/react';

function Design() {

    const buttonSelect = () => {
        let buttons = document.querySelectorAll(".btn");
        buttons[0].classList.remove("active-now");
        buttons[1].classList.remove("active-now");
        buttons[2].classList.remove("active-now");
        buttons[3].classList.remove("active-now");
        for(let i = 0; i<buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                buttons[i].classList.add("active-now");
            })
        }
    }

    return (
        <div className='design-main-container'>
            <Header />
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
                <CCarousel controls transition="crossfade" dark interval={false}>
                    <CCarouselItem>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    )
}

export default Design