import React from "react";
import { useState } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import{Container , Row , Col }from 'react-bootstrap'

const inivals = {
  username:"Sample Name",
  email:"sample@gmail.com",
  password:"6546312",
  maxslots:"4",
  location:"Delhi",
  state:"Delhi",
  type:"Level 1",
  mobile: "9188514"
}

function AdminProfile() {
  const [loginData,setLoginData] = useState(
      localStorage.getItem('StationData')
      ? JSON.parse(localStorage.getItem('StationData'))
      : null);
  const [values,setvalues] = useState(inivals);

  console.log(loginData);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
      setvalues({
        ...values,
        [name]: value,
        });
  }
  const mobileChange = (evt) => {
    setvalues({
        mobile : evt
    })
}
    return (
      <div className="container mt-3" >
          <Form  className="col-12 " >
              <Container>
                <Row>
                  <Col>
                  <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="username" type="text"  value={values.username} onChange={handleChange} required={true}  />
                  </Form.Group>

                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control name="email" type="email"  value={values.email} onChange={handleChange} required={true} />
                      </Form.Group>

                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange} required={true} />
                  </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicLocation">
                      <Form.Label>Location</Form.Label>
                      <Form.Control name="location" type="text" placeholder="Location" value={values.location} onChange={handleChange} required={true} />
                  </Form.Group>
                  </Col>  
                </Row> 

                <Row>
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicSlots">
                    <Form.Label>Max Slots</Form.Label>
                    <Form.Control name="maxslots" type="number" placeholder="Slot Capacity" value={values.maxslots} onChange={handleChange} required={true} />
                </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicState">
                    <Form.Label>State</Form.Label>
                    <Form.Control name="state" type="text" placeholder="State" value={values.state} onChange={handleChange} required={true} />
                </Form.Group>
                  </Col>  
                </Row> 

                <Row>
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicState">
                    <Form.Label>State</Form.Label>
                    <PhoneInput
                    className = "mb-3"
                        country={'us'}
                        name ="mobile"
                        value={values.mobile}
                        onChange={mobileChange}
                        />
                </Form.Group>

                  </Col>
                  <Col>
                    <Form.Group className="mb-6" controlId="formBasicType">
                      <Form.Label>Type</Form.Label>
                      <Form.Select  as="select" name="type" value = {values.type} custom="true" onChange={handleChange} required={true}>
                          <option value="">Please Select</option>
                          <option value="Level 1">Level 1</option>
                          <option value="Level 2">Level 2</option>
                          <option value="DC Fast">DC Fast</option>
                      </Form.Select>

                  </Form.Group>
                  </Col>  
                </Row> 

                <Row className ="justify-content-md-center mt-3" >
                  <Button variant="primary" type="submit" style = {{width : "30%" }}>EDIT</Button>
                </Row>
              </Container>
                
            </Form>
        </div>
    )

}
export default AdminProfile;