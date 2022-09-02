import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {

  const navbar_close = () => {
    document.querySelector(".navbar-toggler").classList.add("collapsed");
    document.querySelector(".navbar-collapse").classList.remove("show");
  }

  return (
    <Navbar expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="/"><svg width="134" height="33" viewBox="0 0 134 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M71.7822 10.7407C71.6656 9.56534 71.1653 8.65222 70.2813 8.00137C69.3974 7.35053 68.1977 7.02511 66.6823 7.02511C65.6526 7.02511 64.7832 7.17082 64.074 7.46224C63.3649 7.74395 62.8209 8.13737 62.4421 8.6425C62.0729 9.14764 61.8884 9.72077 61.8884 10.3619C61.869 10.8962 61.9807 11.3624 62.2235 11.7607C62.4761 12.159 62.8209 12.5038 63.2581 12.7953C63.6952 13.077 64.2003 13.3247 64.7735 13.5384C65.3466 13.7424 65.9586 13.9172 66.6094 14.063L69.2905 14.7041C70.5922 14.9955 71.787 15.3841 72.875 15.8698C73.963 16.3555 74.9052 16.9529 75.7018 17.662C76.4984 18.3712 77.1152 19.2066 77.5523 20.1683C77.9992 21.1299 78.2275 22.2325 78.2372 23.4759C78.2275 25.3021 77.7612 26.8855 76.8383 28.2261C75.9252 29.5569 74.6041 30.5915 72.875 31.3297C71.1556 32.0583 69.0817 32.4226 66.6531 32.4226C64.244 32.4226 62.1458 32.0534 60.3584 31.3152C58.5807 30.5769 57.1916 29.4841 56.1911 28.0367C55.2002 26.5795 54.6805 24.7776 54.632 22.6308H60.7373C60.8053 23.6313 61.0918 24.4667 61.597 25.137C62.1118 25.7976 62.7966 26.2978 63.6515 26.6378C64.516 26.9681 65.4923 27.1332 66.5803 27.1332C67.6488 27.1332 68.5765 26.9778 69.3634 26.667C70.1599 26.3561 70.7768 25.9238 71.2139 25.3701C71.651 24.8164 71.8696 24.1802 71.8696 23.4613C71.8696 22.7911 71.6705 22.2276 71.2722 21.7711C70.8836 21.3145 70.3105 20.926 69.5528 20.6054C68.8048 20.2848 67.8868 19.9934 66.7988 19.7311L63.5495 18.9151C61.0335 18.3032 59.047 17.3463 57.5899 16.0446C56.1328 14.7429 55.4091 12.9896 55.4188 10.7845C55.4091 8.97764 55.8899 7.3991 56.8613 6.04885C57.8425 4.69859 59.1879 3.64461 60.8975 2.88691C62.6072 2.12922 64.55 1.75037 66.726 1.75037C68.9408 1.75037 70.8739 2.12922 72.5253 2.88691C74.1864 3.64461 75.4784 4.69859 76.4012 6.04885C77.324 7.3991 77.8 8.96307 77.8292 10.7407H71.7822ZM82.481 32V2.15836H88.7903V14.4709H101.598V2.15836H107.893V32H101.598V19.6728H88.7903V32H82.481ZM113.095 32V2.15836H133.203V7.36025H119.404V14.4709H132.169V19.6728H119.404V26.7981H133.261V32H113.095Z" fill="white"/>
          <rect x="13" width="16" height="16" fill="white"/>
          <rect x="24" y="16" width="16" height="16" fill="white"/>
          <rect y="16" width="16" height="16" fill="white"/>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#design" onClick={navbar_close}>Home</Nav.Link>
            <Nav.Link href="/#testimonies" onClick={navbar_close}>Testimonies</Nav.Link>
            <Nav.Link href="/contact" onClick={navbar_close}>Contact Us</Nav.Link>
            <Nav.Link href="/gallery" onClick={navbar_close}>Gallery</Nav.Link>
            <Nav.Link href="/">Get Estimate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header