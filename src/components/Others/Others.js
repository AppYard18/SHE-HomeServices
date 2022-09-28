import React, { useState, useEffect } from 'react';
import './Others.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Others() {

    const otherArray = [];
    const [otherDisplay, setOtherArray] = useState([]);

    const [ImageSrc, setImageSrc] = useState("");
    const [show, setShow] = useState(false);

    const storage = getStorage(app);

    const getRefOther = ref(storage, 'Other');
    listAll(getRefOther).then((element) => {
        element.items.forEach((e) => {
            otherArray.push(e.name);
        });
        setOtherArray(otherArray);
    })

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
                    Others
                </div>
                <div className='individual-page-container display'>
                    {otherDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img className='product-image' src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/Other%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" onClick={image_click} />    
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Others;