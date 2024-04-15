import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import NavItems from "./NavItems";
import Footer from "./Footer";
import { Navigate, useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const bookNow = () => {
    navigate("/venues");
    window.scroll({ top: 0, behavior: "instant" });
  };
  return (
    <>
      <NavItems />

      <div className="dark-mode">
        {/* <div className='py-3'>
      <Container >
        <Row>
          <Col md='3' className='p-2'>
              <Form.Select className="rounded-pill bg-dark text-white" >
                <option >Select the Location</option>
                <option value="1" >Pondicherry</option>
                <option value="2">Villupram</option>
                <option value="3">Cuddalore</option>
              </Form.Select>
          </Col>
          <Col md='9' className='p-2'>
            <Form.Control type='text' className='mainLoginInput rounded-pill bg-dark text-white' placeholder='&#61442; Venues, Sports'></Form.Control>
          </Col>
        </Row>
      </Container>
      </div> */}

        <div>
          <Container>
            <Row className="spacer-home1">
              <Col md={6} sm={12} className="d-flex align-items-end ">
                <div className="pb-5">
                  <h1 className="heading-home">
                    Welcome to <span className="text-warning">Sportiq</span>
                  </h1>

                  <h3 className="subhead-home">
                    <span className="text-info">Build</span> your gaming skill
                  </h3>
                  <div>
                  
                    <a href="" onClick={bookNow} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                      <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Book Now</span>
                      <span class="relative invisible">Button</span>
                    </a>
              
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="">
                  <img
                    src={require("../images/game1.jpg")}
                    // src={require("../images/puzle ball-1.png")}

                    className="w-100"
                  />
                </div>
              </Col>
            </Row>

            <Row className="spacer-home">
              <Col md={6} sm={12}>
                <div className="">
                  <img
                    src={require("../images/cricket-ball.png")}

                    className="w-100"/>
                </div>
              </Col>
              <Col md={6} sm={12} className="d-flex align-items-center justify-content-center">
                <div className="p-5  ">
                  <h1 className="heading-home-one text-end">One <span className="text-warning heading-home"> Team </span>sharing a single dream; to bring the <span className="text-info heading-home">cup Home.</span></h1>
                  
                </div>
              </Col>
            </Row>
            <Row className="spacer-home1">
              <Col md={6} sm={12} className="d-flex align-items-center justify-content-center">
              <div className="p-5">
                  <h1 className="heading-home-one ">Make sure your <span className="text-warning heading-home"> Ball </span> flies over the net, Not into the <span className="text-info heading-home">Net.</span></h1>
                  
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="">
                  <img
                    src={require("../images/batmition.png")}
                    // src={require("../images/puzle ball-1.png")}

                    className="w-100"
                  />
                </div>
              </Col>
            </Row>
            <Row className="pt-5">
              <Col>
              <h4 className="text-center py-2 discover-para">Made for the host in you</h4>
              <h1 className="text-center py-2">The Grass is always Greener on our Side</h1>
              <hr className="w-25 mx-auto"/>
              </Col>
            </Row>
            <div className="spacer-home">
            <Row className="m-0">
             <div className="home-card">
              <Row>
              <Col md={6} sm={12}>
               
              <h1 className="p-4">Discover the best places to play</h1>
              <h3 className="p-4 discover-para">Browse through the hottest venues in town.
                Look up photos, read reviews, and start hosting
                with a tap.</h3>
                
              </Col>
              <Col md={6} sm={12}>
              {/* <div className="home-card "> */}
              <img className="w-100" src={require("../images/jdfkjd.png")} />
              {/* </div> */}
              </Col>
              </Row>
              </div>
              
            </Row>
            <Row className="my-4">
            <Col md={6} sm={12} className="my-auto">
              <div className="home-card tablecell">
                <div>
                <h2>Never run short of players</h2>
                <h5 className="discover-para py-3">Post your game on Town and get players from
                across your neighbourhood to join in and make
                your game happen.</h5>
                </div>
              <div>
              <img className="w-100" src={require("../images/people.png")} />
              </div>
              </div>
              </Col>
              <Col md={6} sm={12} className="py-auto my-auto">
              <div className="home-card ">
                <div>
                <h2>Split the bill effortlessly</h2>
                <h5 className="discover-para py-3">Get everyone to pay their share directly on the app and prevent chaos at the payment desk.</h5>
                </div>
                <div>
              <img className="w-100" src={require("../images/people1.png")} />
              </div>
              </div>
              </Col>
            </Row>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
