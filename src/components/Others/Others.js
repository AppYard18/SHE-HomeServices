import React, { useState } from 'react';
import './Others.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { app } from '../../firebase/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';

function Others() {

    const otherArray = [];
    const [otherDisplay, setOtherArray] = useState([]);

    const storage = getStorage(app);

    const getRefOther = ref(storage, 'Other');
    listAll(getRefOther).then((element) => {
        element.items.forEach((e) => {
            otherArray.push(e.name);
        });
        setOtherArray(otherArray);
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
                    Others
                </div>
                <div className='individual-page-container display'>
                    {otherDisplay.map((data, i) => (
                        <div className='image-div-container' key={i}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/she-interiors.appspot.com/o/Other%2F" + data + "?alt=media&token=52762cce-47e8-441b-a2fa-5cd70feae236"} key={i} alt="image1" />    
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Others;