import React, { useState,useEffect } from "react";
import NavItems from "./NavItems";
import Footer from "./Footer";
import {  Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function SlotBook() {

    const navigate = useNavigate();
    const [isChecked,setIsChecked] = useState({});
    const [date , setDate]= useState('');
    const [totalPrice,setTotalPrise] = useState(0);
    const [currentTime,setCurrentTime]=useState(new Date().getTime())

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentTime(new Date().getTime());
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

       

      const onClickHandle = (e) => {
        const storingValue = parseInt(e.target.value);
        const isChecked = e.target.checked;
        // Get the selected time from the input value (assuming the value is in milliseconds)
        const selectedTime = storingValue;
    
        // Check if the selected time is in the future or the current time
        if (selectedTime >=currentTime) {
          setIsChecked((prev)=>({...prev,[storingValue]: isChecked}));
          setTotalPrise((prev)=>prev + (isChecked?600:-600));
    
          if (isChecked) {
            setIsChecked((oldValue) => oldValue + storingValue);
          } else {
            setIsChecked((oldValue) => oldValue - storingValue);
          }
        } else {
          // If the selected time is in the past, prevent selection
          e.target.checked = false;
          alert("You can only select current or future times.");
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
                    

                    
                    <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck1">12am-1am</label>

                    <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"  value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck2">1am-2am</label>

                    <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"  value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck3">2am-3am</label>
                    
                </div>
                <div className="btn-group w-100  my-3" role="group" aria-label="Basic checkbox toggle button group">

                    <input type="checkbox" className="btn-check" id="btncheck4" autocomplete="off"  value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck4">3am-4am</label>

                    <input type="checkbox" className="btn-check" id="btncheck5" autocomplete="off"  value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck5">4am-5am</label>

                    <input type="checkbox" className="btn-check" id="btncheck6" autocomplete="off"  value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck6">5am-6am</label>
                </div>
                </Col>
                <Col md={"6"} sm={"12"}>
                <h4 className="text-center">Morning</h4>
                <div className="btn-group w-100 h-25" role="group" aria-label="Basic checkbox toggle button group">
                    
                <input type="checkbox" className="btn-check" id="btncheck7" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck7">6am-7am</label>

                    <input type="checkbox" className="btn-check" id="btncheck8" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck8">7am-8am</label>

                    <input type="checkbox" className="btn-check" id="btncheck9" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck9">8am-9am</label>
                    
                </div>
                <div className="btn-group w-100 h-25 my-3" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck10" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck10">9am-10am</label>

                    <input type="checkbox" className="btn-check" id="btncheck11" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck11">10am-11am</label>

                    <input type="checkbox" className="btn-check" id="btncheck12" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck12">11am-12pm</label>



                    
                </div>
                </Col>
                <Col md={"6"} sm={"12"}>
                <h4 className="text-center">Afternoon</h4>
                <div className="btn-group w-100 h-25" role="group" aria-label="Basic checkbox toggle button group">
                    
                <input type="checkbox" className="btn-check" id="btncheck13" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck13">12pm-1pm</label>

                    <input type="checkbox" className="btn-check" id="btncheck14" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck14">1pm-2pm</label>

                    <input type="checkbox" className="btn-check" id="btncheck15" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck15">2pm-3pm</label>
                    
                </div>
                <div className="btn-group w-100 h-25 my-3" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck16" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck16">3pm-4pm</label>

                    <input type="checkbox" className="btn-check" id="btncheck17" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck17">4pm-5pm</label>

                    <input type="checkbox" className="btn-check" id="btncheck18" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck18">5pm-6pm</label>



                    
                </div>
                </Col>
                <Col md={"6"} sm={"12"}>
                <h4 className="text-center">Evening</h4>
                <div className="btn-group w-100 h-25" role="group" aria-label="Basic checkbox toggle button group">
                    
                <input type="checkbox" className="btn-check" id="btncheck19" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck19">6pm-7pm</label>

                    <input type="checkbox" className="btn-check" id="btncheck20" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck20">7pm-8pm</label>

                    <input type="checkbox" className="btn-check" id="btncheck21" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck21">8pm-9pm</label>
                    
                </div>
                <div className="btn-group w-100 h-25 my-3" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck22" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck22">9pm-10pm</label>

                    <input type="checkbox" className="btn-check" id="btncheck23" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck23">10pm-11pm</label>

                    <input type="checkbox" className="btn-check" id="btncheck24" autocomplete="off" value={new Date().getTime() + 1 * 60 * 60 * 1000} onClick={onClickHandle} disabled={currentTime>currentTime + 1 * 60 * 60 * 1000} />
                    <label className="btn btn-outline-primary me-1" for="btncheck24">11pm-12am</label>



                    
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
