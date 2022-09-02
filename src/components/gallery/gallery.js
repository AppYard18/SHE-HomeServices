import React, { useState } from 'react';
import './gallery.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Scrollbar]);

function Gallery() {

    const bedroomArray = [];
    const livingArray = [];
    const kitchenArray = [];
    const otherArray = [];

    const [bedroomDisplay, setBedroomArray] = useState([]);
    const [livingDisplay, setLivingArray] = useState([]);
    const [kitchenDisplay, setKitchenArray] = useState([]);
    const [otherDisplay, setOtherArray] = useState([]);

    const storage = getStorage(app);
    const getRefBedroom = ref(storage, 'bedroom');
    listAll(getRefBedroom).then((element) => {
        element.items.forEach((e) => {
            bedroomArray.push(e.name);
        });
        setBedroomArray(bedroomArray);
    })

    const getRefLiving = ref(storage, 'living-room');
    listAll(getRefLiving).then((element) => {
        element.items.forEach((e) => {
            livingArray.push(e.name);
        });
        setLivingArray(livingArray);
    })

    const getRefKitchen = ref(storage, 'kitchen');
    listAll(getRefKitchen).then((element) => {
        element.items.forEach((e) => {
            kitchenArray.push(e.name);
        });
        setKitchenArray(kitchenArray);
    })

    const getRefOther = ref(storage, 'Other');
    listAll(getRefOther).then((element) => {
        element.items.forEach((e) => {
            otherArray.push(e.name);
        });
        setOtherArray(otherArray);
    })
    
    return (
        <div className='gallery-main-container'>
            <div className='-gallery-main-content-container'>
                <div className='gallery-content-head'>
                    <div className='head-title'>
                        SOME OF OUR LATEST DESIGNS
                    </div>
                </div>
                <div className='carousel-head'>
                    Bedroom
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="custom-carousel other-carousel"
                >
                    {bedroomDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Living Room
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="custom-carousel other-carousel"
                >
                    {livingDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Kitchen
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="custom-carousel other-carousel"
                >
                    {kitchenDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Others
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="custom-carousel other-carousel"
                >
                    {otherDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/Other%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery