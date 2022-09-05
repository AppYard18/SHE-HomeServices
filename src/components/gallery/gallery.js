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

    const guestArray = [];
    const kidsArray = [];
    const masterArray = [];
    const falseCeilingandLightingArray = [];
    const foyerAreaArray = [];
    const homeDecorArray = [];
    const crockeryArray = [];
    const diningArray = [];
    const modularArray = [];
    const otherArray = [];
    const wallPaintingArray = [];
    const wallDesignArray = [];

    const [guestDisplay, setGuestArray] = useState([]);
    const [kidsDisplay, setKidsArray] = useState([]);
    const [masterDisplay, setMasterArray] = useState([]);
    const [falseCeilingandLightingDisplay, setCeilingArray] = useState([]);
    const [foyerAreaDisplay, setFoyerArray] = useState([]);
    const [homeDecorDisplay, setHomeDecorArray] = useState([]);
    const [crockeryDisplay, setCrockeryArray] = useState([]);
    const [diningDisplay, setDiningArray] = useState([]);
    const [modularDisplay, setModularArray] = useState([]);
    const [otherDisplay, setOtherArray] = useState([]);
    const [wallPaintingDisplay, setWallPaintingArray] = useState([]);
    const [wallDesignDisplay, setWallDesignArray] = useState([]);

    const storage = getStorage(app);
    const getRefGuest = ref(storage, 'bedroom/guest');
    listAll(getRefGuest).then((element) => {
        element.items.forEach((e) => {
            guestArray.push(e.name);
        });
        setGuestArray(guestArray);
    })

    const getRefKids = ref(storage, 'bedroom/kids');
    listAll(getRefKids).then((element) => {
        element.items.forEach((e) => {
            kidsArray.push(e.name);
        });
        setKidsArray(kidsArray);
    })

    const getRefMaster = ref(storage, 'bedroom/master');
    listAll(getRefMaster).then((element) => {
        element.items.forEach((e) => {
            masterArray.push(e.name);
        });
        setMasterArray(masterArray);
    })

    const getRefFalseCeiling = ref(storage, 'living-room/false-ceiling-and-lighting');
    listAll(getRefFalseCeiling).then((element) => {
        element.items.forEach((e) => {
            falseCeilingandLightingArray.push(e.name);
        });
        setCeilingArray(falseCeilingandLightingArray);
    })

    const getRefFoyerArea = ref(storage, 'living-room/foyer-area');
    listAll(getRefFoyerArea).then((element) => {
        element.items.forEach((e) => {
            foyerAreaArray.push(e.name);
        });
        setFoyerArray(foyerAreaArray);
    })

    const getRefHomeDecor = ref(storage, 'living-room/home-decor');
    listAll(getRefHomeDecor).then((element) => {
        element.items.forEach((e) => {
            homeDecorArray.push(e.name);
        });
        setHomeDecorArray(homeDecorArray);
    })

    const getRefCrockery = ref(storage, 'kitchen/crockery');
    listAll(getRefCrockery).then((element) => {
        element.items.forEach((e) => {
            crockeryArray.push(e.name);
        });
        setCrockeryArray(crockeryArray);
    })

    const getRefDining = ref(storage, 'kitchen/dining');
    listAll(getRefDining).then((element) => {
        element.items.forEach((e) => {
            diningArray.push(e.name);
        });
        setDiningArray(diningArray);
    })

    const getRefModular = ref(storage, 'kitchen/modular');
    listAll(getRefModular).then((element) => {
        element.items.forEach((e) => {
            modularArray.push(e.name);
        });
        setModularArray(modularArray);
    })

    const getRefOther = ref(storage, 'Other');
    listAll(getRefOther).then((element) => {
        element.items.forEach((e) => {
            otherArray.push(e.name);
        });
        setOtherArray(otherArray);
    })

    const getRefWallDesign = ref(storage, 'paint/wall-design');
    listAll(getRefWallDesign).then((element) => {
        element.items.forEach((e) => {
            wallDesignArray.push(e.name);
        });
        setWallDesignArray(wallDesignArray);
    })

    const getRefWallPainting = ref(storage, 'paint/wall-painting');
    listAll(getRefWallPainting).then((element) => {
        element.items.forEach((e) => {
            wallPaintingArray.push(e.name);
        });
        setWallPaintingArray(wallPaintingArray);
    })
    
    return (
        <div className='gallery-main-container'>
            <div className='-gallery-main-content-container'>
                <div className='gallery-content-head'>
                    <div className='head-title'>
                        SOME OF OUR <span>LATEST DESIGNS</span>
                    </div>
                </div>
                <div className='carousel-head-main'>
                    Bedroom
                </div>
                <div className='carousel-head'>
                    Master Bedroom
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {masterDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fmaster%2F" + data +"?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {masterDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fmaster%2F" + data +"?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {masterDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fmaster%2F" + data +"?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Guest Bedroom
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {guestDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fguest%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {guestDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fguest%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {guestDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fguest%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Kids Bedroom
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {kidsDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fkids%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {kidsDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fkids%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {kidsDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fkids%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head-main'>
                    Living Room
                </div>
                <div className='carousel-head'>
                    Home Decor
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {homeDecorDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Fhome-decor%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {homeDecorDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Fhome-decor%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {homeDecorDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffalse-ceiling-and-lighting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    False Ceiling and Lighting
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {falseCeilingandLightingDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffalse-ceiling-and-lighting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {falseCeilingandLightingDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffalse-ceiling-and-lighting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {falseCeilingandLightingDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffalse-ceiling-and-lighting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Foyer Area
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {foyerAreaDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffoyer-area%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {foyerAreaDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffoyer-area%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {foyerAreaDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffoyer-area%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head-main'>
                    Kitchen
                </div>
                <div className='carousel-head'>
                    Dining Area
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {diningDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fdining%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {diningDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fdining%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {diningDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fdining%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Modular Kitchen
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {modularDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fmodular%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {modularDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fmodular%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {modularDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fmodular%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Crockery Unit
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {crockeryDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fcrockery%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {crockeryDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fcrockery%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {crockeryDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fcrockery%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head-main'>
                    Others
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {otherDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/Other%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {otherDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/Other%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {otherDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/Other%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head-main'>
                    Paint
                </div>
                <div className='carousel-head'>
                    Wall Painting
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {wallPaintingDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-painting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {wallPaintingDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-painting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {wallPaintingDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-painting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='carousel-head'>
                    Wall Design
                </div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel normal"
                >
                    {wallDesignDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-design%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel tablet"
                >
                    {wallDesignDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-design%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="gallery-carousel other-carousel mobile"
                >
                    {wallDesignDisplay.map((data, i) => (
                        <SwiperSlide key={i} className="carousel-inner">
                            <div className='image-div-container' key={i}>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-design%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery