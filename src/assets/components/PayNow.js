import React, { useState } from 'react'
import NavItems from './NavItems'
import Footer from './Footer'
import { useLocation, useNavigate } from 'react-router';
import { Button, Card, CardBody, CardHeader, CardImg, Col, Container, Row } from 'react-bootstrap';

export default function PayNow() {


    const getDate = useLocation();
  
  const value = getDate.state;
    const navigate = useNavigate();
    const[showUpi,setShowUpi] = useState(false);
    const[showPaytm,setShowPaytm] = useState(false);

    const pay_now =()=>{
        window.scrollTo({left:0, top:0, behavior:"instant"});
        navigate("/pay")
    }

    

  return (
    <>
    <NavItems />
    <div className=''>
        <Container>
            <Row>
                <Col>
                <Card >
                    <CardHeader className='text-center d-inline '><h3>Total Amount :</h3><h1> Rs.<span className='text-success'>{value}</span></h1></CardHeader>

                    <CardBody>
                        <h3>Payment Mode:-</h3>
                        <Row>
                            <Col>
                        <Card className=' m-2'>
                            <Card.Img variant='top' className='img-thumbnail payment-image' src={require("../images/upi.png")} onClick={()=>setShowUpi(true)} ></Card.Img>
                        </Card>
                        </Col>
                        
                        <Col>
                        {showUpi ?
                        <h3>sportiq2024@okhdfcbank</h3>
                        : ""}
                        </Col> 
                        </Row>
                   </CardBody>
                   </Card>
                   </Col>
            </Row>
            <Row>
                
                <Button variant='outline-success' className='my-5 w-25 d-block mx-auto' onClick={pay_now}>Pay Now!</Button>
                
            </Row>
        </Container>
    </div>
    <Footer />
    </>
  )
}
