import React from 'react';
import './Commercial.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Commercial() {
  return (
    <div className='commercial-container'>
        <div className='commercial-inner-container'>
            <div className='commercial-container-head'>
                COMMERCIAL DESIGN
            </div>     
            <Row>
                <Col sm>
                    <div className='commercial-container-image'>
                        <img src={require("../../images/commercial_page_image.png")} alt="commercial" />
                    </div>
                </Col>
                <Col sm>
                    <div className='commercial-container-content'>
                        <span className='commercial-content-head'>OUR APPROACH</span>
                        <span className='commercial-content-text'>We work alongside our clients, architects, and builders throughout the project to provide.</span>
                        <div className='commercial-content-list'>
                            <ul>
                                <li><span>Conceptual Design Development</span></li>
                                <li><span>Space Planning & Layout Development</span></li>
                                <li><span>Design & Fabrication of Custom Features</span></li>
                                <li><span>Material, Fixture, and Finish Selections</span></li>
                                <li><span>Procurement of Furniture, Art and Accessories</span></li>
                            </ul>
                        </div>
                        <span className='commercial-content-button'><a href="">LEARN MORE</a></span>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Commercial