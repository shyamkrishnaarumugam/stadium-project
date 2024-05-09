import React from 'react'
import { Button, Card, Col, Container, NavItem, Row, Stack } from 'react-bootstrap'
import NavItems from './NavItems'
import Footer from './Footer'
import { useLocation } from 'react-router'

export default function Pay() {

  
  return (
    <>
      <NavItems />
      <div className='pay-background '>
      <Container>
        <Row className=''>
          <Col className=''>
           
              <div className='d-flex vh-100'>
                <div className='my-auto mx-auto w-'>
                <h1 className=' text-danger  p-4'>Booking status send Successfully!</h1>
                </div>
              </div>
           
          </Col>
        </Row>
      </Container>
      </div>
      <Footer />
    </>
  );
}
