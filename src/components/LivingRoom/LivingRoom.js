import React, { useState, useEffect } from 'react';
import './LivingRoom.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';

function LivingRoom() {

    const falseCeilingandLightingArray = [];
    const foyerAreaArray = [];
    const homeDecorArray = [];
    const tvUnitArray = [];

    const [falseCeilingandLightingDisplay, setCeilingArray] = useState([]);
    const [foyerAreaDisplay, setFoyerArray] = useState([]);
    const [homeDecorDisplay, setHomeDecorArray] = useState([]);
    const [tvUnitDisplay, setTvUnitArray] = useState([]);

    const storage = getStorage(app);

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

    const getRefTvUnit = ref(storage, 'living-room/tv-unit');
    listAll(getRefTvUnit).then((element) => {
        element.items.forEach((e) => {
            tvUnitArray.push(e.name);
        });
        setTvUnitArray(tvUnitArray);
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
                    pageContainer[4].classList.remove("display");
                } else if(i === 1) {
                    pageContainer[0].classList.remove("display");
                    pageContainer[1].classList.remove("display");
                    pageContainer[2].classList.add("display");
                    pageContainer[3].classList.remove("display");
                    pageContainer[4].classList.remove("display");
                } else if(i === 2) {
                    pageContainer[0].classList.remove("display");
                    pageContainer[1].classList.remove("display");
                    pageContainer[2].classList.remove("display");
                    pageContainer[3].classList.add("display");
                    pageContainer[4].classList.add("display");
                } else if(i === 3) {
                    pageContainer[0].classList.remove("display");
                    pageContainer[1].classList.remove("display");
                    pageContainer[2].classList.remove("display");
                    pageContainer[3].classList.remove("display");
                    pageContainer[4].classList.add("display");
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
                    Living Room
                    <CDropdown variant="btn-group">
                        <CDropdownToggle size="sm"></CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem onClick={onSelect}>Home Decor</CDropdownItem>
                            <CDropdownItem onClick={onSelect}>False Ceiling and Lighting</CDropdownItem>
                            <CDropdownItem onClick={onSelect}>Foyer Area</CDropdownItem>
                            <CDropdownItem onClick={onSelect}>TV Unit</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>

                {/* All Living */}
                <div className='individual-page-container display'>
                    {homeDecorDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Fhome-decor%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                    {falseCeilingandLightingDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffalse-ceiling-and-lighting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                    {foyerAreaDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffoyer-area%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                    {tvUnitDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ftv-unit%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* Home Decor */}
                <div className='individual-page-container display'>
                    {homeDecorDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Fhome-decor%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* False Ceiling and Lighting */}
                <div className='individual-page-container display'>
                    {falseCeilingandLightingDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffalse-ceiling-and-lighting%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* Foyer Area */}
                <div className='individual-page-container display'>
                    {foyerAreaDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ffoyer-area%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* TV Unit */}
                <div className='individual-page-container display'>
                    {tvUnitDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/living-room%2Ftv-unit%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LivingRoom;