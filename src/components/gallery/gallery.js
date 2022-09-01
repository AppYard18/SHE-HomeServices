import React, { useEffect } from 'react';
import './gallery.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Button from 'react-bootstrap/Button';
import { CCarousel, CCarouselItem } from '@coreui/react';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref } from 'firebase/storage';

function Gallery() {

    const storage = getStorage(app);
    const getRef = ref(storage);
    console.log(getRef);
    
    const buttonSelect = () => {
        let buttons = document.querySelectorAll(".btn");
        let carousels = document.querySelectorAll(".custom-carousel");
        
        for(let i = 0; i<buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                console.log(i);
                if (i === 0) {
                    buttons[0].classList.add("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.remove("active-now");
                    carousels[0].classList.add("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                } else if (i === 1) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.add("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.remove("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.add("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.remove("display");
                } else if (i === 2) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.add("active-now");
                    buttons[3].classList.remove("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.add("display");
                    carousels[3].classList.remove("display");
                } else if (i === 3) {
                    buttons[0].classList.remove("active-now");
                    buttons[1].classList.remove("active-now");
                    buttons[2].classList.remove("active-now");
                    buttons[3].classList.add("active-now");
                    carousels[0].classList.remove("display");
                    carousels[1].classList.remove("display");
                    carousels[2].classList.remove("display");
                    carousels[3].classList.add("display");
                }
            })
        }
    }

    useEffect(() => {
        buttonSelect();
    })
    
    return (
        <div className='gallery-main-container'>
            <div className='-gallery-main-content-container'>
                <div className='gallery-content-head'>
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
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel display">
                    <CCarouselItem>
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
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel">
                    <CCarouselItem>
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
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container'>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design2.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel">
                    <CCarouselItem>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design3.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <CCarousel controls transition="crossfade" dark interval={false} className="custom-carousel">
                    <CCarouselItem>
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
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                        <div className='image-div-container'>
                            <img src={require("../../images/design1.png")} alt="image1" />    
                        </div>
                    </CCarouselItem>
                </CCarousel>
            </div>
        </div>
    )
}

export default Gallery