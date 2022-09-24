import React, { useState, useEffect } from 'react';
import './Kitchen.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';

function Kitchen() {

    const crockeryArray = [];
    const diningArray = [];
    const modularArray = [];

    const [crockeryDisplay, setCrockeryArray] = useState([]);
    const [diningDisplay, setDiningArray] = useState([]);
    const [modularDisplay, setModularArray] = useState([]);

    const storage = getStorage(app);

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
                    Kitchen
                    <CDropdown variant="btn-group">
                        <CDropdownToggle size="sm"></CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem onClick={onSelect}>Dining</CDropdownItem>
                            <CDropdownItem onClick={onSelect}>Modular Kitchen</CDropdownItem>
                            <CDropdownItem onClick={onSelect}>Crockery Unit</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>

                {/* All Kitchen */}
                <div className='individual-page-container display'>
                    {diningDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fdining%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                    {modularDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fmodular%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                    {crockeryDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fcrockery%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* Dining */}
                <div className='individual-page-container'>
                    {diningDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fdining%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* Modular Kitchen */}
                <div className='individual-page-container'>
                    {modularDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fmodular%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* Crockery Unit */}
                <div className='individual-page-container'>
                    {crockeryDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/kitchen%2Fcrockery%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Kitchen;