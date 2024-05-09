import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import Footer from './Footer'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBatBall, faFutbol, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Game() {
    const [showLocation, setShowLocation] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [logout,setLogout] = useState(false);
    const [prop,setProp]=useState({});
    const id=location.state.index;
    const game=location.state.game;
    const [index,setIndex]=useState(id);
    const [findGame,setFindGame]=useState(game);
    // console.log(index);
    useEffect(()=>{
      const value =!localStorage.getItem('credentials');
      if(value){
        navigate('/');
      }
      
    },[])
    useEffect(()=>{
      getCricket();
      getFootball();
      getBadminton();
    },[])

   

    const getCricket=async()=>{
      try {
          const response = await axios.get(`http://localhost/stadium-backend/getCricketId.php?id=${index}`);
          const responseData = Array.isArray(response.data) ? response.data : [];
          setGetData(responseData);
              // console.log(responseData);
      } catch (error) {
          console.error(error);
      }    
  };


  const getFootball=async()=>{
    try {
        const response = await axios.get(`http://localhost/stadium-backend/getFootballId.php?id=${index}`);
        const responseData = Array.isArray(response.data) ? response.data : [];
        setGetDataFootball(responseData);
            // console.log(responseData);
    } catch (error) {
        console.error(error);
    }    
};
const getBadminton=async()=>{
  try {
      const response = await axios.get(`http://localhost/stadium-backend/getBadmintonId.php?id=${index}`);
      const responseData = Array.isArray(response.data) ? response.data : [];
      setGetDataBadminton(responseData);
          // console.log(responseData);
  } catch (error) {
      console.error(error);
  }    
};
  const [getData,setGetData]=useState([]);
  const [getDataFootball,setGetDataFootball]=useState([]);
  const [getDataBadminton,setGetDataBadminton]=useState([]);





  const goToCricket = (value) => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // setDatas({index:id,game:"karthik"});
    
    navigate('/SlotBook', { state: { datas:value } });
  }

  const goToFootball = (value) => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    navigate('/SlotBook', { state: { datas:value } });

  }
  const goToBadminton = (value) => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    navigate('/SlotBook', { state: { datas:value } });

  }





    // console.log(getDataFootball[0]);
  return (
    <>
    <NavItems />
<div className='dark-mode'>

    <div className='spacer'>
      {findGame=='cricket' &&
        <Container>
          {getData.map((value,index)=>(
            <div  key={index}>
            <Row>
              <Col md={7}>
                <img src={`http://localhost/stadium-backend/${value.image}`} className='game-img w-100' />
              </Col>
                <Col  md={5}>
                <h3>{value.name}</h3>
                <p>({value.city})</p>
                {/* <h4><FontAwesomeIcon icon={faFutbol} /> Football , <FontAwesomeIcon icon={faBaseballBatBall} /> Criket </h4> */}
                <h4>{value.games}</h4>
                <h4>Address:-</h4>
                <p>{value.address}
                </p>
                <div className='my-3'>
                    
                    <Button variant='warning' onClick={()=>setShowLocation(true)} className='m-2'><FontAwesomeIcon icon={faLocationArrow} className='bg-warning ' /> Get Location</Button>
                    <Button variant='success' href={value.contact} className='m-2'><FontAwesomeIcon icon={faPhone} className='transprent-background' /> Contacts</Button>
               
                </div>
               
                    {showLocation ? <a href={value.direction} >Google Map Location</a> :<></>  }
                    

                <h4>Description:-</h4>
                <p>{value.description}</p>
                   
              </Col>
              </Row>
             <Row className='my-5'>
                <Col className='d-flex justify-content-center'>
                <Button className='' onClick={()=>goToCricket(value)} variant='success' size='lg'>Host a Game</Button>
                </Col>
              </Row>
              </div>
            ))}
        </Container> 
        }
        {findGame=='football'&&
        <Container>
          {getDataFootball.map((value,index)=>(
            <div key={index}>
            <Row >
              <Col md={7}>
                <img src={`http://localhost/stadium-backend/${value.image}`} className='game-img w-100' />
              </Col>
                <Col  md={5}>
                <h3>{value.name}</h3>
                <p>({value.city})</p>
                {/* <h4><FontAwesomeIcon icon={faFutbol} /> Football , <FontAwesomeIcon icon={faBaseballBatBall} /> Criket </h4> */}
                <h4>{value.games}</h4>
                <h4>Address:-</h4>
                <p>{value.address}
                </p>
                <div className='my-3'>
                    
                    <Button variant='warning' onClick={()=>setShowLocation(true)} className='m-2'><FontAwesomeIcon icon={faLocationArrow} className='bg-warning ' /> Get Location</Button>
                    <Button variant='success' href={value.contact} className='m-2'><FontAwesomeIcon icon={faPhone} className='transprent-background' /> Contacts</Button>
               
                </div>
               
                    {showLocation ? <a href={value.direction} >Google Map Location</a> :<></>  }
                    

                <h4>Description:-</h4>
                <p>{value.description}</p>
                   
              </Col>
              </Row>
      
             <Row className='my-5'>
                <Col className='d-flex justify-content-center'>
                <Button className='' onClick={()=>goToFootball(value)} variant='success' size='lg'>Host a Game</Button>
                </Col>
              </Row>
              </div>
        ))}
        </Container>
        }
        {findGame=='badminton'&&
        <Container>
          {getDataBadminton.map((value,index)=>(
            <div  key={index}>
            <Row>
              <Col md={7}>
                <img src={`http://localhost/stadium-backend/${value.image}`} className='game-img w-100' />
              </Col>
                <Col  md={5}>
                <h3>{value.name}</h3>
                <p>({value.city})</p>
                {/* <h4><FontAwesomeIcon icon={faFutbol} /> Football , <FontAwesomeIcon icon={faBaseballBatBall} /> Criket </h4> */}
                <h4>{value.games}</h4>
                <h4>Address:-</h4>
                <p>{value.address}
                </p>
                <div className='my-3'>
                    
                    <Button variant='warning' onClick={()=>setShowLocation(true)} className='m-2'><FontAwesomeIcon icon={faLocationArrow} className='bg-warning ' /> Get Location</Button>
                    <Button variant='success' href={value.contact} className='m-2'><FontAwesomeIcon icon={faPhone} className='transprent-background' /> Contacts</Button>
               
                </div>
               
                    {showLocation ? <a href={value.direction} >Google Map Location</a> :<></>  }
                    

                <h4>Description:-</h4>
                <p>{value.description}</p>
                   
              </Col>
              </Row>

             
              <Row className='my-5'>
                <Col className='d-flex justify-content-center'>
                <Button className='' onClick={()=>goToBadminton(value)} variant='success' size='lg'>Host a Game</Button>
                </Col>
              </Row>
              </div>
 ))}
        </Container>
        }
    </div>

    </div>
    <Footer />
    </>
    )
}