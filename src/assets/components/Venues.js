import React, { useState } from 'react'
import NavItems from './NavItems'
import { Card, CardBody, CardImg, CardText, Col, Container, Form, Row } from 'react-bootstrap'
import Footer from './Footer'
import { useNavigate } from 'react-router'

export default function Venues() {

    const navigate = useNavigate();
    const [search,setSearch] = useState();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        navigate('/game');
      }

  return (
    <>
    <NavItems />
<div className='dark-mode py-3'>
    <Container >
        <Row>
          <Col md='3' className='p-2'>
            {/* <FloatingLabel controlId="floatingSelect" label="Select the Location"> */}
              <Form.Select className="rounded-pill bg-dark text-white" >
              {/* <Form.Select className='rounded-pill' > */}
                <option>Select the Location</option>
                <option value="1">Pondicherry</option>
                <option value="2">Villupram</option>
                <option value="3">Cuddalore</option>
              </Form.Select>
            {/* </FloatingLabel> */}
          </Col>
          <Col md='9' className='p-2'>
            {/* <FloatingLabel controlId="floatingSelect"  label="Select Venues or Sports"> */}
            <Form.Control type='text' className='mainLoginInput rounded-pill  bg-dark text-white' placeholder='&#61442; Venues, Sports' onChange={(e)=>setSearch(e.target.value)}></Form.Control>
            {/* </FloatingLabel> */}
          </Col>
        </Row>
      </Container>
      </div>
<div className='dark-mode'>
    <div className='spacer'>
    <Container>
             <Row className=''>
            <Col>
                <div className='d-inline'>
                <h3 className='d-inline-block '>Football Venues</h3>
                <a href='' className='float-end clearfix'>See all</a>
                </div>
                </Col>
            </Row>
        <Row>
            <Col>
                <Card onClick={scrollToTop} className='img-ho'>
                    <CardImg variant='top' className='card-img' src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText >Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top'  className='card-img' src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top'  className='card-img' src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top' className='card-img'  src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
    <div className='spacer'>
    <Container>
        <Row className=''>
           <Col>
            <div className='d-inline'>
            <h3 className='d-inline-block'>Criket Venues</h3>
            <a href='' className='float-end clearfix'>See all</a>
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top'  className='card-img' src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top' className='card-img'  src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top' className='card-img'  src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top' className='card-img'  src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
    <div className='spacer'>
    <Container>
        <Row className=''>
           <Col>
            <div className='d-inline'>
            <h3 className='d-inline-block'>Batminton Venues</h3>
            <a href='' className='float-end clearfix'>See all</a>
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top' className='card-img'  src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top' className='card-img'  src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top' className='card-img'  src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='img-ho'>
                    <CardImg variant='top' className='card-img'  src={require('../images/football-1.jpeg')}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText>Double Double</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
</div>



    <Footer />
    </>
  )
}
