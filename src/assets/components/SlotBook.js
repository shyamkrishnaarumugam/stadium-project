import React, { useState,useEffect } from "react";
import NavItems from "./NavItems";
import Footer from "./Footer";
import {  Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";

export default function SlotBook(){

    const navigate = useNavigate();
    // const [totalPrice,setTotalPrice] = useState(0);
    const [currentDate,setCurrentDate]= useState(new Date().toISOString().split('T')[0]);
    // const [currentHour,setCurrentHour]=useState(new Date().getHours())
    const [selectedDate,setSelectedDate]=useState(0);
    const [slotValue,setSlotValue] = useState(0);
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     setCurrentHour(new Date().getHours());
  //   },1000*60)
  //   return ()=>clearInterval(interval);
  // },[])


  const location = useLocation();
  // const [index,setIndex]=useState(location.state.index);
  const [propsData,setPropsData]=useState(location.state.datas);
  const datas={date:selectedDate,slot:slotValue,value:propsData};
  
    const handleDateChange =(e)=>{
      const newDate = e.target.value;
      // setCurrentDate(new Date().toISOString().split('T')[0]);
      setSelectedDate(newDate);
      // if(new Date(newDate).toISOString().split('T')[0]!==currentDate){
      //   setCurrentHour(0);
      // }else{
      //   setCurrentHour(new Date(newDate).getHours());
      // }
    };

    const bookTheSlot = ()=>{
    
      if (selectedDate !== 0 && slotValue !== 0) {
        window.scrollTo({ left: 0, top: 0, behavior: "instant" });
        
        navigate('/paynow', { state: datas });
      } 
      else {
        alert("Please select date and slot!");
      }
      
};



      // const onClickHandle = (slotValue) => {
      //     setIsChecked((prev)=>({...prev,[slotValue]:!prev[slotValue]}));
      //     setTotalPrice((prev)=>(prev+(isChecked[slotValue] ? -600 : 600)));
      //   };

       
        // const renderSlots = () => {
        //   const slots = [];
        //   const selectedDate = new Date();
        //   const selectedDay = selectedDate.getDate();
        //   const selectedMonth = selectedDate.getMonth();
        //   const today = new Date();
        //   const currentDay = today.getDay();
        //   const currentMonth = today.getMonth();

        //   if((selectedMonth > currentMonth)|| (selectedMonth === currentMonth && selectedDay >= currentDay)){
        //     for (let i = currentHour; i < 24; i++) {
        //       const slotValue = i;
        //       const slotMeridian = i < 12 ? "AM":"PM";
        //       const slotLabel = `${i} - ${i + 1} ${slotMeridian}`;
        //       slots.push(
        //         <div key={slotValue} className="checkbox-container">
        //           <input
        //             className="checkbox-input"
        //             type="checkbox"
        //             id={`slot-${slotValue}`}
        //             checked={isChecked[slotValue]}
        //             onChange={() => onClickHandle(slotValue)}
        //             disabled={slotValue < currentHour}
        //           />
        //           <label className="checkbox-label" htmlFor={`slot-${slotValue}`}>
        //             {slotLabel}
        //           </label>
        //         </div>
        //       );
        //     }
        //   }

        //   return slots;
        // };
        
      // console.log(slotValue);
      // console.log(selectedDate);
      console.log(propsData);

  return (
    <>
      <NavItems />
      <div className="dark-mode">
      <Container>
        <div className="spacer ">
          <Row>
            <Col>
            <div className="d-flex">
            <img className="mx-auto w-50" src={`http://localhost/stadium-backend/${propsData.image}`} alt="nothing"/>
            </div>
            </Col>
            </Row>
            <Row className="">
            <Col className="d-flex justify-content-center">
            <div className="spacer " >
              <h3>{propsData.name}</h3>
              <p>({propsData.city})</p>
              <h4>Select the Date:-</h4>
              <input className=" date-input mb-4" type="date" dateFormat="DD.MM.YYYY" min={currentDate} value={selectedDate} onChange={handleDateChange} />
              </div>
              </Col>
              <Col className="d-flex justify-content-center my-auto">
              <div className="dark-mode spacer">
                <h3 className="text-danger">Each slot Rs. {propsData.amount}</h3>
              <h4>Select the Slot:-</h4>
              <Form.Select className=" date-input" value={slotValue}  onChange={(e)=>{setSlotValue(e.target.value)}}>
                 <option>Select the slot</option>
                <option value="12AM-01AM" >12AM-01AM</option>
                <option value="01AM-02AM" >01AM-02AM</option>
                <option value="02AM-03AM" >02AM-03AM</option>
                <option value="03AM-04AM" >03AM-04AM</option>
                <option value="04AM-05AM" >04AM-05AM</option>
                <option value="05AM-06AM" >05AM-06AM</option>
                <option value="06AM-07AM" >06AM-07AM</option>
                <option value="07AM-08AM" >07AM-08AM</option>
                <option value="08AM-09AM" >08AM-09AM</option>
                <option value="09AM-10AM" >09AM-10AM</option>
                <option value="10AM-11AM" >10AM-11AM</option>
                <option value="11AM-12PM" >11AM-12PM</option>
                <option value="12PM-01PM" >12PM-01PM</option>
                <option value="01PM-02PM" >01PM-02PM</option>
                <option value="02PM-03PM" >02PM-03PM</option>
                <option value="03PM-04PM" >03PM-04PM</option>
                <option value="04PM-05PM" >04PM-05PM</option>
                <option value="05PM-06PM" >05PM-06PM</option>
                <option value="06PM-07PM" >06PM-07PM</option>
                <option value="07PM-08PM" >07PM-08PM</option>
                <option value="08PM-09PM" >08PM-09PM</option>
                <option value="09PM-10PM" >09PM-10PM</option>
                <option value="10PM-11PM" >10PM-11PM</option>
                <option value="11PM-12AM" >11PM-12AM</option>
              </Form.Select>
             
              </div>
              </Col>
           </Row>

              <Row >
                <Col className='d-flex justify-content-center'>

                <Button className='' onClick={bookTheSlot} variant='warning' size='lg'>Book the Slot</Button>
                </Col>
              </Row>
        </div>
            
      </Container>
      </div>
      <Footer />
    </>
  );
}
