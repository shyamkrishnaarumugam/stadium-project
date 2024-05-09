import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
    <div>
        <div className='footer-bg spacer'>
          
          
            <Container>
                <Row>
                    <Col>
                      <div className='text-center spacer'>
                        <h1>Sportiq</h1>
                        <p>The play makers</p>
                        <ul className=''>
                        <a href=''><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href=''><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href=''><FontAwesomeIcon icon={faTwitter} /></a>
                        </ul>

                        <p>Coppyrigt @2024. All rights reserved.</p>
                      </div>

                    </Col>
                
                </Row>
               
            </Container>
            
        </div>
    </div>

    
    </>
  )
}
