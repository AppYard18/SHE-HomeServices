import React, { useState, useEffect } from 'react';
import './Bedroom.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Bedroom() {

    const guestArray = [];
    const kidsArray = [];
    const masterArray = [];

    const [guestDisplay, setGuestArray] = useState([]);
    const [kidsDisplay, setKidsArray] = useState([]);
    const [masterDisplay, setMasterArray] = useState([]);

    const [ImageSrc, setImageSrc] = useState("");
    const [show, setShow] = useState(false);

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

    const onSelect = () => {
        let items = document.querySelectorAll(".dropdown-item");
        let pageContainer = document.querySelectorAll(".individual-page-container");

        for(let i = 0; i<items.length; i++) {
            items[i].addEventListener('click', () => {
                console.log(i);
                if(i === 0) {
                    pageContainer[0].classList.remove("display");
                    pageContainer[1].classList.add("display");
                    pageContainer[2].classList.remove("display");
                    pageContainer[3].classList.remove("display");
                } else if(i === 1) {
                    pageContainer[0].classList.remove("display");
                    pageContainer[1].classList.remove("display");
                    pageContainer[2].classList.add("display");
                    pageContainer[3].classList.remove("display");
                } else if(i === 2) {
                    pageContainer[0].classList.remove("display");
                    pageContainer[1].classList.remove("display");
                    pageContainer[2].classList.remove("display");
                    pageContainer[3].classList.add("display");
                }
            })
        }
    }

    const image_click = () => {
        let images = document.querySelectorAll(".product-image");
        
        for(let i = 0; i<images.length; i++) {
            images[i].addEventListener('click', () => {
                console.log(i);
                setImageSrc(images[i].src);
                document.querySelector(".image-zoom-container").style.display = "flex";
            })
        }
    }

    const removeZoom = () => {
        document.querySelector(".image-zoom-container").style.display = "none";
    }

    const copyLink = () => {
        navigator.clipboard.writeText(ImageSrc);
        setShow(true);
    }

    useEffect(() => {
        onSelect();
        image_click();
    })
    
    return (
        <div className='gallery-main-container'>
            <Alert show={show} variant="success">
                <Alert.Heading>Copied!!</Alert.Heading>
                <p>
                    The Link to the image has been copied to your clipboard.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close!
                    </Button>
                </div>
            </Alert>
            <div className='image-zoom-container' onClick={removeZoom}>
                <div className="image-zoom-inner-container">
                    <div className="image-zoom-container-head">
                        BEDROOM
                    </div>
                    <div className="image-zoom-container-image">
                        <img src={ImageSrc} alt="zoomed" />
                        <div className='share-icon-container' onClick={copyLink}>
                            <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gallery-main-content-container'>
                <div className='gallery-content-head'>
                    <div className='head-title'>
                        MAKE YOUR HOME INTERIORS LOOK <span>MODERN</span>
                    </div>
                </div>
                <div className='carousel-head'>
                    Bedroom
                    <CDropdown variant="btn-group">
                        <CDropdownToggle size="sm"></CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem onClick={onSelect}>Master Bedroom</CDropdownItem>
                            <CDropdownItem onClick={onSelect}>Guest Bedroom</CDropdownItem>
                            <CDropdownItem onClick={onSelect}>Kids Bedroom</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>

                {/* All Bedroom */}
                <div className='individual-page-container display'>
                    {masterDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fmaster%2F" + data +"?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div> 
                    ))}
                    {guestDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fguest%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div>
                    ))}
                    {kidsDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fkids%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div> 
                    ))}
                </div>

                {/* Master Bedroom */}
                <div className='individual-page-container'>
                    {masterDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fmaster%2F" + data +"?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div> 
                    ))}
                </div>

                {/* Guest Bedroom */}
                <div className='individual-page-container'>
                    {guestDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fguest%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div>
                    ))}
                </div>

                {/* Kids Bedroom */}
                <div className='individual-page-container'>
                    {kidsDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fkids%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Bedroom;