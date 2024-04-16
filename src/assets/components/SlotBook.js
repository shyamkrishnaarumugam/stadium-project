import React, { useState,useEffect } from "react";
import NavItems from "./NavItems";
import Footer from "./Footer";
import {  Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function SlotBook() {

    const navigate = useNavigate();
    const [isChecked,setIsChecked] = useState({});
    const [date , setDate]= useState('');
    const [totalPrice,setTotalPrice] = useState(0);
    const [currentHour,setCurrentHour]=useState(new Date().getHours())

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentHour(new Date().getHours());
    },1000*60)
    return ()=>clearInterval(interval);
  },[])

    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];

    const bookTheSlot = ()=>{
       
      window.scrollTo({left:0, top:0, behavior:"instant"});
      const selectedSlot = Object.keys(isChecked).filter((key)=>isChecked[key]);

      if(selectedSlot.length>0){
        const totalPrice = selectedSlot.length*600
          alert(`Are you sure! You want to book the slot Rs: ${totalPrice}`);
        navigate('/paynow',{state:totalPrice});
      }
      else{
        alert("plase select any slot")
      }
      };

       

      const onClickHandle = (slotValue) => {
          setIsChecked((prev)=>({...prev,[slotValue]:!prev[slotValue]}));
          setTotalPrice((prev)=>(prev+(isChecked[slotValue] ? -600 : 600)));
        };

       
        const renderSlots = () => {
          const slots = [];
          for (let i = currentHour; i < 24; i++) {
            const slotValue = i;
            const slotMeridian = i < 12 ? "am":"pm";
            const slotLabel = `${i} - ${i + 1} ${slotMeridian}`;
            slots.push(
              <div key={slotValue} className="checkbox-container">
                <input
                  className="checkbox-input"
                  type="checkbox"
                  id={`slot-${slotValue}`}
                  checked={isChecked[slotValue]}
                  onChange={() => onClickHandle(slotValue)}
                  disabled={slotValue < currentHour}
                />
                <label className="checkbox-label" htmlFor={`slot-${slotValue}`}>
                  {slotLabel}
                </label>
              </div>
            );
          }
          return slots;
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
              <h3>Double Double</h3>
              <p>(Lawspet)</p>
              <div>
              <h4>Select the Date:-</h4>
              
              <input className="mb-4" type="date" min={currentDate} value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              
              <h4>Select the Slot:-</h4>
            </Col>
        </Row>
              <Row className="spacer">
                <Col md={"6"} sm={"12"}>
                <h4 className="text-center">Twilight</h4>
                <div className="btn-group w-100 " role="group" aria-label="Basic checkbox toggle button group">
                    

                    
                    {renderSlots()}

                    
                    
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

                <Button className='' onClick={bookTheSlot} variant='warning' size='lg'>Host a Game</Button>
                </Col>
              </Row>
        </div>
            
      </Container>
      </div>
      <Footer />
    </>
  );
}
