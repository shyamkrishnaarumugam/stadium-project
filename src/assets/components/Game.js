import React, { useState } from 'react'
import NavItems from './NavItems'
import Footer from './Footer'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBatBall, faFutbol, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Game() {
    const [showLocation, setShowLocation] = useState(false);

    const navigate = useNavigate();

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      navigate('/slotBook');
    }
  return (
    <>
    <NavItems />
<div className='dark-mode'>
    <div className='carousel-size mx-auto spacer'>
        
            <Row>
                <Col>
                <Carousel fade>
      
      <Carousel.Item interval={1000}>

        <img src={require("../images/home-banner.jpg")} className='w-100'/>

      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img src={require("../images/why_study_online.jpg")} className='w-100'/>
 
      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img src={require("../images/home-banner.jpg")} className='w-100'/>

      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img src={require("../images/why_study_online.jpg")} className='w-100'/>
 
      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img src={require("../images/home-banner.jpg")} className='w-100'/>

      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img src={require("../images/why_study_online.jpg")} className='w-100'/>
 
      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img src={require("../images/home-banner.jpg")} className='w-100'/>

      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img src={require("../images/why_study_online.jpg")} className='w-100'/>
 
      </Carousel.Item>
    </Carousel>
                </Col >
            </Row>
        
    </div>
    <div className='spacer'>
        <Container>
            <Row>
                <Col>
                <h3>Double Double</h3>
                <p>(Lawspet)</p>
                <h4><FontAwesomeIcon icon={faFutbol} /> Football , <FontAwesomeIcon icon={faBaseballBatBall} /> Criket </h4>
                <h4>Address:-</h4>
                <p>No. 23 First Cross,<br />
                    Gandhi Road,<br />
                    Lawspet, Puducherry-605010.
                </p>
                <div className='my-3'>
                    
                    <Button variant='warning' onClick={()=>setShowLocation(true)} className='m-2'><FontAwesomeIcon icon={faLocationArrow} className='bg-warning ' /> Get Location</Button>
                    <Button variant='success' href='tel:+917896541258' className='m-2'><FontAwesomeIcon icon={faPhone} className='transprent-background' /> Contacts</Button>
               
                </div>
                </Col>
            </Row>
            <Row>
              <Col>
                    {showLocation ? <iframe className=' w-75' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.8952892998504!2d79.82217600616784!3d11.956141544014175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53615de0d9e94f%3A0x5b4cb4a780bcb198!2sLotus%20Badminton%20Club!5e0!3m2!1sen!2sin!4v1709979016173!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> : <></> }
                    </Col>

                <h4>Description:-</h4>
                <p>Stadiums in ancient Greece and Rome were built for different purposes, and at first only the Greeks built structures called "stadium"; Romans built structures called "circus". Greek stadia were for foot races, whereas the Roman circus was for horse races. Both had similar shapes and bowl-like areas around them for spectators. The Greeks also developed the theatre, with its seating arrangements foreshadowing those of modern stadiums.</p>
                    </Row>
              
              <Row >
                <Col className='d-flex justify-content-center'>
                <Button className='' onClick={scrollToTop} variant='success' size='lg'>Host a Game</Button>
                </Col>
              </Row>
        </Container>
    </div>

    </div>
    <Footer />
    </>
    )
}