import React, { useState, useEffect } from 'react';
import './PaintGallery.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';

function PaintGallery() {

    const wallPaintingArray = [];
    const wallDesignArray = [];

    const [wallPaintingDisplay, setWallPaintingArray] = useState([]);
    const [wallDesignDisplay, setWallDesignArray] = useState([]);

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

    useEffect(() => {
        onSelect();
    })
    
    return (
        <div className='gallery-main-container'>
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
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-painting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                    {wallDesignDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-design%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* Wall Painting */}
                <div className='individual-page-container'>
                    {wallPaintingDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-painting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* Wall Design */}
                <div className='individual-page-container'>
                    {wallDesignDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/paint%2Fwall-design%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaintGallery;