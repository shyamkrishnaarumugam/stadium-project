import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";
import Footer from "./Footer";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import axios from "axios";

export default function Alerts() {
    const [getAlert,setGetAlert]=useState([]);
    useEffect(()=>{
     
        showAlert();
    
        },[]);
    
        const showAlert = async () => {
          try {
            const response = await axios.get(`http://localhost/stadium-backend/view-alerts.php`);
            const responseData = Array.isArray(response.data) ? response.data : [];
            setGetAlert(responseData);
            showAlert();
          } catch (err) {
            console.error('Error:', err);
          }
        }
        

  return (
    <>
    
      <NavItems />
      <div className="spacer dark-mode">
        <Container>
          <Row>
            <Col>
              <div
                className="overflow-auto scroll"
                style={{ maxHeight: "600px" }}
              >
                <ListGroup as="ol" numbered className="bg-black">
                  {getAlert.length > 0 ? (
                    getAlert.map((data, index) => (
                      <ListGroup.Item action as="li" key={index}  className="bg-danger  my-3 text-light" >
                        {data.alert}
                        {/* <Button
                          className="float-end"
                          variant="danger"
                          onClick={() => handleDelete(data.id)}
                        >
                          Delete
                        </Button> */}
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>No alerts found</ListGroup.Item>
                  )}
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      
    </>
  );
}
