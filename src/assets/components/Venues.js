import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import { Card, CardBody, CardImg, CardText, Col, Container, Form, Row } from 'react-bootstrap'
import Footer from './Footer'
import { useNavigate } from 'react-router'
import axios from 'axios'
export default function Venues() {

    const navigate = useNavigate();
    const [search,setSearch] = useState();
    const [getDataCricket,setGetDataCricket]=useState([]);
    const [getDataFootball, setGetDataFootball]=useState([]);
    const [getDataBadminton,setGetDataBadminton]=useState([]);
    const[cricketData,setCricketData] = useState([]);
    const [datas,setDatas] = useState({
        index:'',
        game:''
    });
    const goToCricket = (id) => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        // setDatas({index:id,game:"karthik"});
        
        navigate('/game', { state: { index: id, game: "cricket" } });
      }

      const goToFootball = (id) => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        navigate('/game', { state: { index: id, game: "football" } });

      }
      const goToBadminton = (id) => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        navigate('/game', { state: { index: id, game: "badminton" } });

      }


      const getCricket=async()=>{
        try {
            const response = await axios.get(`http://localhost/stadium-backend/getCricket.php`);
            const convert = await response.data;
            if(Array.isArray(convert)){
                setGetDataCricket(convert);
            }
            

        } catch (error) {
            console.error(error);
        }    
    };
    const getFootball=async()=>{
        try {
            const response = await axios.get(`http://localhost/stadium-backend/getFootball.php`);
            const convert = await response.data;
            if(Array.isArray(convert)){
                setGetDataFootball(convert);
            }
            
  
        } catch (error) {
            console.error(error);
        }    
    };
    const getBadminton=async()=>{
        try {
            const response = await axios.get(`http://localhost/stadium-backend/getBadminton.php`);
            const convert = await response.data;
            if(Array.isArray(convert)){
                setGetDataBadminton(convert);
            }
            
  
        } catch (error) {
            console.error(error);
        }    
    };
    useEffect(()=>{
        getCricket();
        getFootball();
        getBadminton();
    }, []);

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
                <h3 className='d-inline-block '>Cricket Venues</h3>
                {/* <a href='' className='float-end clearfix'>See all</a> */}
                </div>
                </Col>
            </Row>
        <Row>
            {getDataCricket.map((value,index)=>(
            <Col md={3} key={index}>
                <Card onClick={()=>{goToCricket(value.id)}} className='img-ho h-100'>
                    <CardImg variant='top' className='card-img' src={`http://localhost/stadium-backend/${value.image}`}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText >{value.name} <span className='float-end clearfix text-warning'>Rs. {value.amount}</span></CardText>
                    </CardBody>
                </Card>
            </Col>
        ))}
        </Row>
    </Container>
    </div>
    <div className='spacer'>
    <Container>
        <Row className=''>
           <Col>
            <div className='d-inline'>
            <h3 className='d-inline-block'>Football Venues</h3>
            {/* <a href='' className='float-end clearfix'>See all</a> */}
            </div>
            </Col>
        </Row>
        <Row>
            {getDataFootball.map((value,index)=>(
            <Col md={3} key={index}>
                <Card onClick={()=>goToFootball(value.id)} className='img-ho h-100'>
                    <CardImg variant='top' className='card-img' src={`http://localhost/stadium-backend/${value.image}`}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText >{value.name} <span className='float-end clearfix text-warning'>Rs. {value.amount}</span></CardText>
                    </CardBody>
                </Card>
            </Col>
))}
        </Row>
    </Container>
    </div>
    <div className='spacer'>
    <Container>
        <Row className=''>
           <Col>
            <div className='d-inline'>
            <h3 className='d-inline-block'>Batminton Venues</h3>
            {/* <a href='' className='float-end clearfix'>See all</a> */}
            </div>
            </Col>
        </Row>
        <Row>
            {getDataBadminton.map((value,index)=>(
            <Col md={3} key={index}>
                <Card onClick={()=>goToBadminton(value.id)} className='img-ho h-100'>
                    <CardImg variant='top' className='card-img ' src={`http://localhost/stadium-backend/${value.image}`}></CardImg>
                    <CardBody className='bg-dark '>
                        <CardText >{value.name} <span className='float-end clearfix text-warning'>Rs. {value.amount}</span></CardText>
                    </CardBody>
                </Card>
            </Col>
        ))}
        </Row>
    </Container>
    </div>
</div>



    <Footer />
    </>
  )
}
