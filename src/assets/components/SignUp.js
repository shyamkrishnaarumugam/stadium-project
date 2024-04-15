import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function SignUp() {
    const navigate = useNavigate();

    const signUpAlert = async () => {
        
        try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('email', email);
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('password', password);

            const response = await axios.post('http://localhost/stadium-backend/insert.php', formData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data'
                    'Content-Type': 'application.json'
                }
            });
            console.log(response.data); 
        } catch (error) {
            console.error(error);
        }
    };

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <div className='signup-bg'>
            <Container>
                <div >
                    <Row className='mx-auto justify-content-center align-items-center min-vh-100 g-0 w-50'>
                        <Col className='mx-auto '>
                            <h1 className='text-center text-light'>Sign Up</h1>
                            <h4 className='text-center text-light'>(Create Your Account)</h4>

                            <Form>
                                <FloatingLabel controlId="floatingInput" label="User Name"  className="mb-3 text-light">
                                    <Form.Control value={username} type="text" className='text-light' style={{backgroundColor:'black'}} required onChange={(e) => setUsername(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="text-light mb-3">
                                    <Form.Control value={email} type="email" className='text-light'  style={{backgroundColor:'black'}}  onChange={(e) => setEmail(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3 text-light">
                                    <Form.Control value={name} type="text" className=' text-light' style={{backgroundColor:'black'}}  onChange={(e) => setName(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3 text-light">
                                    <Form.Control value={phone} type="number" className=' text-light' style={{backgroundColor:'black'}}  onChange={(e) => setPhone(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 text-light">
                                    <Form.Control value={password} type="password" className=' text-light' style={{backgroundColor:'black'}}  onChange={(e) => setPassword(e.target.value)} />
                                </FloatingLabel>
                                <Button variant='success' type='submit' className='mt-4' onClick={signUpAlert}>Sign Up</Button><br />
                                <a href='' onClick={() => navigate('/login')}>Already have an account? Log In</a>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
            </div>
        </>
    );
}
