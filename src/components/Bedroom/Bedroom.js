import React, { useState, useEffect } from 'react';
import './Bedroom.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';

function Bedroom() {

    const guestArray = [];
    const kidsArray = [];
    const masterArray = [];

    const [guestDisplay, setGuestArray] = useState([]);
    const [kidsDisplay, setKidsArray] = useState([]);
    const [masterDisplay, setMasterArray] = useState([]);

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
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fmaster%2F" + data +"?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div> 
                    ))}
                    {guestDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fguest%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                    {kidsDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fkids%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div> 
                    ))}
                </div>

                {/* Master Bedroom */}
                <div className='individual-page-container'>
                    {masterDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fmaster%2F" + data +"?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div> 
                    ))}
                </div>

                {/* Guest Bedroom */}
                <div className='individual-page-container'>
                    {guestDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fguest%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div>
                    ))}
                </div>

                {/* Kids Bedroom */}
                <div className='individual-page-container'>
                    {kidsDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/bedroom%2Fkids%2F" + data + "?alt=media&token=20dc1d0b-f98d-4f11-8e89-9bc12c1bafbe"} key={i} alt="image1" />    
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Bedroom;