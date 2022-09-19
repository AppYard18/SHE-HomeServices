import React, { useEffect } from 'react';
import './Design.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Button from 'react-bootstrap/Button';
import { CCarousel, CCarouselItem } from '@coreui/react';

function Design() {

    const buttonSelect = () => {
        let buttons = document.querySelectorAll(".btn");
        let sub_buttons_container = document.querySelectorAll(".gallery-sub-headers-button-container");
        let sub_buttons = document.querySelectorAll(".sub-btn");
        let carousels = document.querySelectorAll(".custom-carousel");

        sub_buttons[0].classList.add("active-now");
        sub_buttons[3].classList.add("active-now");
        sub_buttons[6].classList.add("active-now");
        sub_buttons[1].classList.remove("active-now");
        sub_buttons[2].classList.remove("active-now");
        sub_buttons[4].classList.remove("active-now");
        sub_buttons[5].classList.remove("active-now");
        sub_buttons[7].classList.remove("active-now");
        sub_buttons[8].classList.remove("active-now");
        
        for(let i = 0; i<buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                console.log(i);
                if (i === 0) {
                    buttons[0].classList.add("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.remove("active-now");
                    sub_buttons_container[0].classList.add("display");
                    sub_buttons_container[1].classList.remove("display");
                    sub_buttons_container[2].classList.remove("display");
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
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 1) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.add("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.remove("active-now");
                    sub_buttons_container[0].classList.remove("display");
                    sub_buttons_container[1].classList.add("display");
                    sub_buttons_container[2].classList.remove("display");
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
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 2) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.add("active-now");
                    buttons[3].classList.remove("active-now");
                    sub_buttons_container[0].classList.remove("display");
                    sub_buttons_container[1].classList.remove("display");
                    sub_buttons_container[2].classList.add("display");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.add("display");
                    carousels[19].classList.add("display");
                    carousels[20].classList.add("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 3) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.add("active-now");
                    sub_buttons_container[0].classList.remove("display");
                    sub_buttons_container[1].classList.remove("display");
                    sub_buttons_container[2].classList.remove("display");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.add("display");
                    carousels[28].classList.add("display");
                    carousels[29].classList.add("display");
                }
            })
        }
    }

    const subButtonSelect = () => {
        let sub_buttons = document.querySelectorAll(".sub-btn");
        let carousels = document.querySelectorAll(".custom-carousel");

        for(let i = 0; i<sub_buttons.length; i++) {
            sub_buttons[i].addEventListener('click', () => {
                if (i === 0) {
                    sub_buttons[0].classList.add("active-now");
                    sub_buttons[1].classList.remove("active-now");
                    sub_buttons[2].classList.remove("active-now");
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
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 1) {
                    sub_buttons[0].classList.remove("active-now");
                    sub_buttons[1].classList.add("active-now");
                    sub_buttons[2].classList.remove("active-now");
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
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 2) {
                    sub_buttons[0].classList.remove("active-now");
                    sub_buttons[1].classList.remove("active-now");
                    sub_buttons[2].classList.add("active-now");
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
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 3) {
                    sub_buttons[3].classList.remove("active-now");
                    sub_buttons[4].classList.remove("active-now");
                    sub_buttons[5].classList.remove("active-now");
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
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 4) {
                    sub_buttons[3].classList.remove("active-now");
                    sub_buttons[4].classList.add("active-now");
                    sub_buttons[5].classList.remove("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                    carousels[12].classList.add("display");
                    carousels[13].classList.add("display");
                    carousels[14].classList.add("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 5) {
                    sub_buttons[3].classList.remove("active-now");
                    sub_buttons[4].classList.remove("active-now");
                    sub_buttons[5].classList.add("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.add("display");
                    carousels[16].classList.add("display");
                    carousels[17].classList.add("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 6) {
                    sub_buttons[6].classList.remove("active-now");
                    sub_buttons[7].classList.remove("active-now");
                    sub_buttons[8].classList.remove("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.add("display");
                    carousels[19].classList.add("display");
                    carousels[20].classList.add("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 7) {
                    sub_buttons[6].classList.remove("active-now");
                    sub_buttons[7].classList.add("active-now");
                    sub_buttons[8].classList.remove("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.add("display");
                    carousels[22].classList.add("display");
                    carousels[23].classList.add("display");
                    carousels[24].classList.remove("display");
                    carousels[25].classList.remove("display");
                    carousels[26].classList.remove("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                } else if (i === 8) {
                    sub_buttons[6].classList.remove("active-now");
                    sub_buttons[7].classList.remove("active-now");
                    sub_buttons[8].classList.add("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                    carousels[4].classList.remove("display");
                    carousels[5].classList.remove("display");
                    carousels[6].classList.remove("display");
                    carousels[7].classList.remove("display");
                    carousels[8].classList.remove("display");
                    carousels[9].classList.remove("display");
                    carousels[10].classList.remove("display");
                    carousels[11].classList.remove("display");
                    carousels[12].classList.remove("display");
                    carousels[13].classList.remove("display");
                    carousels[14].classList.remove("display");
                    carousels[15].classList.remove("display");
                    carousels[16].classList.remove("display");
                    carousels[17].classList.remove("display");
                    carousels[18].classList.remove("display");
                    carousels[19].classList.remove("display");
                    carousels[20].classList.remove("display");
                    carousels[21].classList.remove("display");
                    carousels[22].classList.remove("display");
                    carousels[23].classList.remove("display");
                    carousels[24].classList.add("display");
                    carousels[25].classList.add("display");
                    carousels[26].classList.add("display");
                    carousels[27].classList.remove("display");
                    carousels[28].classList.remove("display");
                    carousels[29].classList.remove("display");
                }
            })
        }
    }

    useEffect(() => {
        buttonSelect();
        subButtonSelect();
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
                <div className='gallery-sub-headers-button-container display'>
                    <span className='sub-btn active-now' onClick={subButtonSelect}>Master</span>
                    <span className='sub-btn' onClick={subButtonSelect}>Guest</span>
                    <span className='sub-btn' onClick={subButtonSelect}>Kids</span>
                </div>
                <div className='gallery-sub-headers-button-container'>
                    <span className='sub-btn active-now' onClick={subButtonSelect}>Home Decor</span>
                    <span className='sub-btn' onClick={subButtonSelect}>False Ceiling and Lighting</span>
                    <span className='sub-btn' onClick={subButtonSelect}>Foyer Area</span>
                </div>
                <div className='gallery-sub-headers-button-container'>
                    <span className='sub-btn active-now' onClick={subButtonSelect}>Dining</span>
                    <span className='sub-btn' onClick={subButtonSelect}>Modular Kitchen</span>
                    <span className='sub-btn' onClick={subButtonSelect}>Crockery Unit</span>
                </div>

                {/* Bedroom Carousels */}

                {/* Master Bedrrom Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0123.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0116.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0117.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0118.jpg")} alt="image1" /> 
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0119.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0120.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0121.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0122.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display home-tablet">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0123.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0116.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0117.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0118.jpg")} alt="image1" /> 
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0119.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0120.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0121.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0122.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display home-mobile">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0123.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0116.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0117.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0118.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0119.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0120.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0121.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Master Bedroom/IMG-20220919-WA0122.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Guest Bedroom Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0007.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0008.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0009.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0010.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0011.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0012.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0007.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0008.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0009.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0010.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0011.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0012.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0007.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0008.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0009.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0010.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0011.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Guest Bedroom/IMG-20220919-WA0012.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Kids Bedroom Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0013.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0014.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0015.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0016.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0017.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0018.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0019.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0020.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0013.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0014.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0015.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0016.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0017.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0018.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0019.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0020.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0013.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0014.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0015.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0016.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0017.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0018.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0019.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Kids Bedroom/IMG-20220919-WA0020.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Living Room Carousels */}

                {/* Home Decor Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0076.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0077.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0078.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0079.jpg")} alt="image1" /> 
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0080.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0081.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0082.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0083.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel con  trols transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0076.jpg")} alt="image1" /> 
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0077.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0078.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0079.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0080.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0081.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0082.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0083.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0076.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0077.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0078.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0079.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0080.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0081.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0082.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Home Decor/IMG-20220919-WA0083.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* False Ceiling Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0026.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0027.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0028.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0029.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0030.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0031.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0032.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0033.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0026.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0027.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0028.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0029.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0030.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0031.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0032.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0033.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0026.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0027.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0028.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0029.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0030.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0031.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0032.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0033.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Foyer Area Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0148.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0149.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0150.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0151.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0152.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0153.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0154.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0155.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0148.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0149.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0150.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0151.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0152.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0153.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0154.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0155.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0148.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0149.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0150.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0151.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0152.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0153.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0154.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Foyer Area/IMG-20220919-WA0155.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Kitchen Carousels */}

                {/* Dining Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0067.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0068.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0069.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0070.jpg")} alt="image1" /> 
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0071.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0072.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0073.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0074.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0067.jpg")} alt="image1" /> 
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0068.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0069.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0070.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0071.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0072.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0073.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0074.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0067.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0068.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0069.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0070.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0071.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0072.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0073.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Dining Area/IMG-20220919-WA0074.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Modular Kitchen Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0131.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0132.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0133.jpg")} alt="image1" />
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0134.jpg")} alt="image1" />
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0135.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0136.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0137.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0138.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0131.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0132.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0133.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0134.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0135.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0136.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0137.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0138.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0131.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0132.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0133.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0134.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0135.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0136.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0137.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Modular Kitchen/IMG-20220919-WA0138.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Crockery Unit Carousel */}
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0140.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0141.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0142.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0143.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0140.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0141.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0142.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0143.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0026.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0026.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/False Ceiling and Lighting/IMG-20220919-WA0026.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0140.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0141.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0142.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Crockery Unit/IMG-20220919-WA0143.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>

                {/* Other Carousels */}

                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-normal">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0160.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0161.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0162.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0163.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="carousel-contain">
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0164.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0165.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0166.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0167.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-tablet">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0160.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0161.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0162.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0163.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0164.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0165.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0166.jpg")} alt="image1" />    
                            </div>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0167.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel home-mobile">
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0160.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0161.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0162.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0163.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0164.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0165.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0166.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='carousel-contain'>
                            <div className='image-div-container'>
                                <img src={require("../../images/Other/IMG-20220919-WA0167.jpg")} alt="image1" />    
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    )
}

export default Design