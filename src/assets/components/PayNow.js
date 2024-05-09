import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import Footer from './Footer'
import { json, useLocation, useNavigate } from 'react-router';
import { Button, Card, CardBody, CardHeader, CardImg, Col, Container, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
export default function PayNow() {


    const getDate = useLocation();
    const [userData,setUserDate] = useState(null);
    const date = getDate.state.date;
    const slot = getDate.state.slot;

    const amount=getDate.state.value.amount;
    const name = userData ? userData.name : '';
    const phone = userData ? userData.phone: '';
    const venue =getDate.state.value.name;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

//   const slot =getDate.state.slot;
    const navigate = useNavigate();
    // const[showUpi,setShowUpi] = useState(false);
    // const[showPaytm,setShowPaytm] = useState(false);

    const goToHome=()=>{
        navigate('/');
        window.scrollTo({ left: 0, top: 0, behavior: "instant" });

    }
    const pay_now =async()=>{
        // window.scrollTo({left:0, top:0, behavior:"instant"});
        try {
            const formData=new FormData();
            formData.append('name',name);
            formData.append('phone',phone);
            formData.append('venue',venue);
            formData.append('date',date);
            formData.append('slot',slot);
            formData.append('amount',amount);
            const response=await axios.post('http://localhost/stadium-backend/booking.php',formData,{
                headers:{
                    'Content-Type':'application.json'
                }
            });
            console.log(response.data);
            
        } catch (error) {
            console.error(error);
        }


setShow(true);

        // navigate("/pay")
    }

    useEffect(()=>{
        const dataString = localStorage.getItem('credentials');
        const dataObject = JSON.parse(dataString);
        
  if (dataObject) {
    setUserDate(dataObject);
  }
    },[]);
    // console.log(userData);
    // console.log(uname);
  return (
    <>
    <NavItems />
    <div className='dark-mode'>
        <Container>
            <Row>
                <Col>
                <h1>Booking Details:-</h1>
                    <div className='text-center '>
                        <h1 className=' d-inline '>Name :</h1><h1 className=' d-inline '> <span className='text-warning'> {name}</span></h1><br />
                        <h1 className=' d-inline '>Phone Number :</h1><h1 className=' d-inline '> <span className='text-success'> {phone}</span></h1><br />
                        <h1 className=' d-inline '>Venue :</h1><h1 className=' d-inline '> <span className='text-success'> {venue}</span></h1><br />
                         
                        <h1 className=' d-inline '>Date :</h1><h1 className=' d-inline '> <span className='text-success'> {date}</span></h1><br />
                     <h1 className=' d-inline '>slot :</h1><h1 className=' d-inline '> <span className='text-info'> {slot}</span></h1><br />
                     <h1 className=' d-inline '>Amount :</h1><h1 className=' d-inline '> <span className='text-danger'> {amount}</span></h1>
                     {/* <h1 className=' d-inline '>Amount :</h1><h1 className=' d-inline '> <span className='text-success'> {userData}</span></h1></div> */}
                     </div>
                        
                        
                    
                        <h3>QR Code:-</h3>
                        <Row>
                            <Col className=''>
                       <div className='d-flex'>
                            <img variant='top' className='img-thumbnail w-25 mx-auto payment-image' src={require("../images/qrcode.jpg")} ></img>
                            </div>
                        </Col>
                        
                        {/* <Col>
                        {showUpi ?
                        <h3>sportiq2024@okhdfcbank</h3>
                        : ""}
                        </Col>  */}
                        </Row>
                   
                   </Col>
            </Row>
            <Row>
                
                <Button variant='outline-success' className='my-5 w-25 d-block mx-auto' onClick={pay_now}>Book Now</Button>
    {/* modal box start */}
                <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Booking Status</Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>
            <FontAwesomeIcon icon={faCircleCheck} beat className='fs-1 p-3 text-success text-center mx-auto d-flex' />
            <h1 className='text-center'>Booking successfully</h1>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="danger" onClick={goToHome}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal box end */}
            </Row>
        </Container>
    </div>
    <Footer />
    </>
  )
}
