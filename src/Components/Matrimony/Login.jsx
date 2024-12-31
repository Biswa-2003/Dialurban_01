import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import MatroFooter from '../../MatriMony/MatroFooter';

function Login() {
  // State for storing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Login Details:', email, password);
    // Implement login logic here
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh", marginTop: '-100px' }}>
        <Row className="w-100 d-flex align-items-center" style={{ borderRadius: '10px' }}>
          {/* Left Column for Image */}
          <Col md={6} className="p-0 d-flex justify-content-center">
            <img 
              src="/Image_02/tra1.jpg" 
              alt="Wedding" 
              style={{
                width: '70%',   // Slightly reduce the width to bring the form closer
                height: '80%', 
                objectFit: 'cover', 
                borderRadius: '10px 0 0 10px',
                marginTop: '10%',
                marginLeft:'40%' // Adds a little space from the top
              }} 
            />
          </Col>

          {/* Right Column for Login Form */}
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <Card style={{ width: '30rem', height: 'auto', border: 'none', marginRight:"10%" }}>
              <Card.Body>
                <Card.Title className="text-center">Login Here</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="8" className="text-start">
                      Email or Phone
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control 
                        type="email" 
                        placeholder="Enter email or phone" 
                        value={email} 
                        onChange={handleEmailChange} 
                        style={{ 
                          fontSize: '15px',       // Placeholder text size
                          color: '#888',          // Placeholder text color
                          padding: '10px',        // Input padding
                          borderRadius: '4px' ,
                          width:'180%'    // Rounded corners for the input
                        }} 
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="8" className="text-start">
                      Password
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        style={{ 
                          fontSize: '18px',       // Placeholder text size
                          color: '#888',          // Placeholder text color
                          padding: '10px',        // Input padding
                          borderRadius: '5px',
                          width:'180%'     // Rounded corners for the input
                        }} 
                      />
                    </Col>
                  </Form.Group>
                  <Button variant="danger" type="submit" style={{width:'117%'}} block>
                    Login
                  </Button>
                </Form>
                <div className="mt-3 text-center">
                  <a href="#forgot" style={{ marginLeft: '80px',textDecoration:'none' }}>Forgot Password?</a>
                  
                </div>
                <div style={{marginLeft:'80%', }}>
                <a href="#register">Register</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <MatroFooter />
    </>
  );
}

export default Login;
