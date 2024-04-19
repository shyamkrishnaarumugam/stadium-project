import React, { useState,useEffect } from "react";
import NavItems from "./NavItems";
import Footer from "./Footer";
import {  Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function SlotBook() {

    const navigate = useNavigate();
    const [isChecked,setIsChecked] = useState({});
    const [totalPrice,setTotalPrice] = useState(0);
    const [currentDate,setCurrentDate]= useState(new Date().toISOString().split('T')[0]);
    const [currentHour,setCurrentHour]=useState(new Date().getHours())
    const [selectedDate,setSelectedDate]=useState(currentHour);


  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentHour(new Date().getHours());
    },1000*60)
    return ()=>clearInterval(interval);
  },[])

    const handleDateChange =(e)=>{
      const newDate = e.target.value;
      setCurrentDate(new Date().toISOString().split('T')[0]);
      setSelectedDate(newDate);
      if(new Date(newDate).toISOString().split('T')[0]!==currentDate){
        setCurrentHour(0);
      }else{
        setCurrentHour(new Date(newDate).getHours());
      }
    };

    const bookTheSlot = ()=>{
    
      window.scrollTo({left:0, top:0, behavior:"instant"});
      const selectedSlot = Object.keys(isChecked).filter((key)=>isChecked[key]);

      if(selectedSlot.length>0){
        const totalPrice = selectedSlot.length*600
          alert(`Are you sure! You want to book the slot Rs: ${totalPrice}`);
        navigate('/paynow',{state:totalPrice});
      }
      else{
        alert("please select any slot")
      }
      };


  return (
    <>
      <NavItems />
      <div className="dark-mode">
      <Container>
        <div className="spacer ">
          <Row>
            <Col>
            <div className="d-flex">
            <img className="mx-auto w-50" src={require('../images/why_study_online.jpg')} alt="nothing"/>
            </div>
              <h3>Welcome to Slot Booking</h3>
              <button>Location</button>
              <div>

              <h4>Select the Date:-</h4>
              
              <input className=" date-input mb-4" type="date" min={currentDate} value={selectedDate} onChange={handleDateChange} />
              </div>
              
              <h4>Select the Slot:-</h4>
            </Col>
        </Row>
              <Row className="spacer">
                <Col md={"6"} sm={"12"}>
                <h4 className="text-center">Twilight</h4>
                <div className="btn-group w-100 " role="group" aria-label="Basic checkbox toggle button group">
                  
                <input type="time" id="time" style={{margin:'5px',width:'100px',height:'40px',border:'1px solid black',borderRadius:'5px'}} onChange={(e)=>{setIsChecked({...isChecked,[e.target.value]:e.target.checked})}}/>
                <label htmlFor="time" style={{margin:'5px'}} ><button className="btn btn-outline-primary" width='100px' height='50px' padding='5px' >Book Slot</button></label>

                </div>
                
                </Col>
                
              </Row>
                <Row>
                  <Col>
                  <h1>Rs.{totalPrice}</h1>
                  </Col>
                </Row>
              
              <Row >
                <Col className='d-flex justify-content-center'>

                <Button className='' onClick={bookTheSlot} variant='warning' size='lg'>Submit</Button>
                </Col>
              </Row>
        </div>
            
      </Container>
      </div>
      <Footer />
    </>
  );
}
