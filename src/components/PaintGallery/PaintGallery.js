import React, { useState, useEffect } from 'react';
import './PaintGallery.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function PaintGallery() {

    const wallPaintingArray = [];
    const wallDesignArray = [];

    const [wallPaintingDisplay, setWallPaintingArray] = useState([]);
    const [wallDesignDisplay, setWallDesignArray] = useState([]);

    const [ImageSrc, setImageSrc] = useState("");
    const [show, setShow] = useState(false);

    const storage = getStorage(app);

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
                } else if(i === 1) {
                    pageContainer[0].classList.remove("display");
                    pageContainer[1].classList.remove("display");
                    pageContainer[2].classList.add("display");
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
                    Paint
                    <CDropdown variant="btn-group">
                        <CDropdownToggle size="sm"></CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem onClick={onSelect}>Wall Painting</CDropdownItem>
                            <CDropdownItem onClick={onSelect}>Wall Design</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>

                {/* All Paints */}
                <div className='individual-page-container display'>
                    {wallPaintingDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-painting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div>
                    ))}
                    {wallDesignDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-design%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div>
                    ))}
                </div>

                {/* Wall Painting */}
                <div className='individual-page-container'>
                    {wallPaintingDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-painting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div>
                    ))}
                </div>

                {/* Wall Design */}
                <div className='individual-page-container'>
                    {wallDesignDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-design%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" onClick={image_click} />    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaintGallery;