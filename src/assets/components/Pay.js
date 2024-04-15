import React from 'react'
import { Button, Card, Col, Container, NavItem, Row, Stack } from 'react-bootstrap'
import NavItems from './NavItems'
import Footer from './Footer'
import { useLocation } from 'react-router'

export default function Pay() {

  
  return (
    <>
      <NavItems />
      <div className='pay-background'>
      <Container>
        <Row className='vh-100'>
          <Col className='d-flex  '>
            <Card className=' mx-auto pay-card'>
              <div className='my-auto '>
                
                <h1 className='mx-5 text-success'>Payment request send Successfully!</h1>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
      <Footer />
    </>
  );
}
