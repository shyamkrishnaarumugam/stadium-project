import React, { useState, useEffect } from "react";
import NavItems from "./NavItems";
import Footer from "./Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function SlotBook() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
      setCurrentHour(new Date().getHours());
    }, 1000 * 60); // Update current time every minute
    return () => clearInterval(interval);
  }, []);

  const bookTheSlot = () => {
    const selectedSlots = Object.keys(isChecked).filter((key) => isChecked[key]);
    if (selectedSlots.length > 0) {
      const totalPrice = selectedSlots.length * 600;
      alert(`Are you sure! You want to book the slot Rs: ${totalPrice}`);
      navigate("/paynow", { state: totalPrice });
    } else {
      alert("Please select any slot");
    }
  };

  const onClickHandle = (slotValue) => {
    setIsChecked((prev) => ({ ...prev, [slotValue]: !prev[slotValue] }));
    setTotalPrice((prev) => prev + (isChecked[slotValue] ? -600 : 600));
  };

  const renderSlots = () => {
    const slots = [];
    for (let i = currentHour; i < 24; i++) {
      const slotValue = i;
      const slotLabel = `${i} - ${i + 1} am`;
      slots.push(
        <div key={slotValue} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`slot-${slotValue}`}
            checked={isChecked[slotValue]}
            onChange={() => onClickHandle(slotValue)}
            disabled={slotValue < currentHour}
          />
          <label className="form-check-label" htmlFor={`slot-${slotValue}`}>
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
          <div className="spacer">
            <Row>
              <Col>
                <h3>Double Double</h3>
                <p>(Lawspet)</p>
              </Col>
            </Row>
            <Row className="spacer">
              <Col md={"6"} sm={"12"}>
                <h4 className="text-center">Available Slots:</h4>
                {renderSlots()}
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Rs.{totalPrice}</h1>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Button className="" onClick={bookTheSlot} variant="warning" size="lg">
                  Host a Game
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
