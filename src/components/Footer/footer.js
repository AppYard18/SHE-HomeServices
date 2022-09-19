import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-company-details">
            <div className="footer-website-elements">
                <span><a href="/#design">Home</a></span>
                <span><a href="/gallery">Gallery</a></span>
                <span><a href="/contact">Contact Us</a></span>
            </div>
            <div className="footer-contact-details">
                <div className="footer-contact-address">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.968 0L0 10.286H13.68V24L23.968 0Z" fill="#EECC7C"/>
                    </svg>
                    <span>
                        #67, Ground Floor, Sapthagiri Layout, <br />
                        Bettadasanpura Main Road, <br />
                        Electronic city Phase - 1, <br />
                        Bengaluru, Karnataka <br />
                        560100
                    </span>
                </div>
                <div className="footer-contact-phone">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.487 14.14L13.422 10.444C13.2299 10.2693 12.9774 10.1762 12.7178 10.1842C12.4583 10.1922 12.212 10.3008 12.031 10.487L9.63801 12.948C9.06201 12.838 7.90401 12.477 6.71201 11.288C5.52001 10.095 5.15901 8.934 5.05201 8.362L7.51101 5.968C7.69742 5.78712 7.80614 5.54082 7.81417 5.2812C7.82219 5.02159 7.72889 4.76904 7.55401 4.57699L3.85901 0.512995C3.68405 0.320352 3.44089 0.203499 3.18116 0.187255C2.92143 0.17101 2.66561 0.256653 2.46801 0.425995L0.298008 2.28699C0.125119 2.46051 0.0219269 2.69145 0.0080073 2.93599C-0.0069927 3.18599 -0.292993 9.108 4.29901 13.702C8.30501 17.707 13.323 18 14.705 18C14.907 18 15.031 17.994 15.064 17.992C15.3085 17.9783 15.5393 17.8747 15.712 17.701L17.572 15.53C17.742 15.333 17.8283 15.0774 17.8124 14.8177C17.7965 14.558 17.6798 14.3148 17.487 14.14Z" fill="#EECC7C"/>
                    </svg>
                    <span><a href="tel:+919611119067">+91 96111 19067</a></span>
                </div>
            </div>
            <div className="footer-company-location-details">
                <div className='footer-company-location'>
                    <span>
                        ELECTRONIC CITY PHASE 1 <br />
                        NEELADRI NAGAR <br />
                        DODDATHOGUR <br />
                    </span>
                </div>
                <div className='footer-company-email'>
                    <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2812 0.53125H1.71875C1.21748 0.53125 0.8125 0.93623 0.8125 1.4375V19.5625C0.8125 20.0638 1.21748 20.4688 1.71875 20.4688H25.2812C25.7825 20.4688 26.1875 20.0638 26.1875 19.5625V1.4375C26.1875 0.93623 25.7825 0.53125 25.2812 0.53125ZM24.1484 3.66914V18.4297H2.85156V3.66914L2.06992 3.06025L3.18291 1.63008L4.39502 2.57314H22.6078L23.8199 1.63008L24.9329 3.06025L24.1484 3.66914ZM22.6078 2.57031L13.5 9.65039L4.39219 2.57031L3.18008 1.62725L2.06709 3.05742L2.84873 3.66631L12.5229 11.1882C12.8012 11.4043 13.1434 11.5217 13.4958 11.5217C13.8481 11.5217 14.1903 11.4043 14.4686 11.1882L24.1484 3.66914L24.9301 3.06025L23.8171 1.63008L22.6078 2.57031Z" fill="#EECC7C"/>
                    </svg>
                    <span><a href="mailto:shehomeservices@gmail.com">shehomeservices@gmail.com</a></span>
                </div>
            </div>
        </div>
        <div className="footer-company-copyright">
            <span className='footer-company-copyright-part1'>SHE © 2022 All Rights Reserved.</span> 
            <span className='footer-company-copyright-part2'>    <a href="http://appyard.co.in/">Designed By AppYard</a></span>
        </div>
    </div>
  )
}

export default Footer