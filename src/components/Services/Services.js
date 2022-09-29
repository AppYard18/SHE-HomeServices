import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className='services-container'>
      <div className='services-inner-container'>
        <div className='services-container-head'>
            SERVICES
        </div> 
        <div className='services-container-sub-head'>
            WHAT CAN WE HELP YOU WITH ?
        </div>
        <div className='services-icons-container'>
            <div className='services-icon-container'>
                <img src={require("../../images/services-icons/sofa.png")} alt="icon" />
                <div className='services-icon-name'>Styling & Decor</div>
            </div>
            <div className='services-icon-container'>
                <img src={require("../../images/services-icons/building.png")} alt="icon" />
                <div className='services-icon-name'>Residential Design</div>
            </div>
            <div className='services-icon-container'>
                <img src={require("../../images/services-icons/house.png")} alt="icon" />
                <div className='services-icon-name'>Commercial Design</div>
            </div>
            <div className='services-icon-container'>
                <img src={require("../../images/services-icons/house.png")} alt="icon" />
                <div className='services-icon-name'>Commercial Design</div>
            </div>
            <div className='services-icon-container'>
                <img src={require("../../images/services-icons/headphones.png")} alt="icon" />
                <div className='services-icon-name'>Consultation</div>
            </div>
            <div className='services-icon-container'>
                <img src={require("../../images/services-icons/scale.png")} alt="icon" />
                <div className='services-icon-name'>Styling & Decor</div>
            </div>
            <div className='services-icon-container'>
                <img src={require("../../images/services-icons/chair.png")} alt="icon" />
                <div className='services-icon-name'>Styling & Decor</div>
            </div>
            <div className='services-icon-container'>
                <img src={require("../../images/services-icons/house.png")} alt="icon" />
                <div className='services-icon-name'>Commercial Design</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services