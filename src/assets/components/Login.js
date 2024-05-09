import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
      if(localStorage.getItem("credentials")){
        navigate('/home');
      }
    },[])

    const handleLogin = async (e) => {
        e.preventDefault();
      
        try {
          if (!username || !password) {
            throw new Error("Username or password is empty");
          }
      
          const response = await axios.post(
            `http://localhost/stadium-backend/login.php`,
            {
              action: 'login',
              Username: username,
              Password: password,
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
      
          if (response.data.status === 'success') {
            localStorage.setItem("credentials", JSON.stringify(response.data.user_details));
            navigate("/home");
          } else {
            setError("Incorrect username or password");
          }
        } catch (error) {
          console.error('Error:', error.message);
          setError("An error occurred during login");
        }
    };

    return (
        <div className='login-bg'>
    
    <Container>
        <div>
        <Row className='d-flex align-items-center min-vh-100 g-0'>
            <Col md={6} xs={12} className='mx-auto'>
                <div className=''>
                <img src={require('../images/logo.png')} className='w-100 h-auto' />
                </div>
            </Col>
            <Col md={6} xs={12}  className='mx-auto'>
                <div className=''>
                {/* <Card className='d-flex align-items-center justify-content-center'> */}
                <h1 className='text-center text-light'>LOGIN</h1>
                <Form onSubmit={handleLogin}>
                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInputCustom" className='text-light' type="text" placeholder="name@example.com"  style={{backgroundColor:'black'}} onChange={(e)=>setUsername(e.target.value)}  required/>
                    <label htmlFor="floatingInputCustom" className='text-light'>User Name</label>  
                </Form.Floating>
                <Form.Floating>
                    <Form.Control id="floatingPasswordCustom" type="password" className='text-light' placeholder="Password"  style={{backgroundColor:'black'}} onChange={(e)=>setPassword(e.target.value)}  />
                    <label htmlFor="floatingPasswordCustom" className='text-light'>Password</label>
                </Form.Floating>
                <p className='text-light'>Don't you have account?</p>
                <a href="" onClick={()=>navigate("/signUp")}>Sign up</a><br />
                <Button variant='warning' type='submit' className='mt-4'>Login</Button>
                </Form>
                {/* </Card> */}
                </div>
            </Col>
        </Row>
        </div>
    </Container>
    </div>
    );
}
