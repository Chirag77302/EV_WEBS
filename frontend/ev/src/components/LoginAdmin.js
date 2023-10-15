import React, { useState } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const inivals = {
    email:"",
    password:""
}
const link = process.env.REACT_APP_BACKEND_API;

function LoginAdmin(){
        const [loginData,setLoginData] = useState();
        const [values,setvalues] = useState(inivals);
        const history = useHistory();
        const d = JSON.parse(localStorage.getItem('StationData'));
        if(d){
            history.push(`/admin/${d._id}`);
        }

        const loginHandler = async(e) =>{
            e.preventDefault();
            const res = await fetch(link+'/api/station/login', {
                method: 'POST',
                body: JSON.stringify({
                email: values.email ,
                password:values.password
                }),
                headers: {
                'Content-Type': 'application/json',
                },
            });
        
            const data = await res.json();
            setLoginData(data);
            // console.log('data login is :',data);
            localStorage.setItem('StationData', JSON.stringify(data));

            history.push(`/admin/${data._id}`);
        }

        const handleChange = (evt) =>{
            const { name, value } = evt.target;
            setvalues({
            ...values,
            [name]: value,
            });
        }

        return(
            <div style={{height:'700px'}}>
                <Container fluid style={{height:'inherit'}}>
                    <Row style={{height:'inherit'}}>
                        <Col sm={1} md = {4}></Col>
                        <Col sm={10} md={4}  className="d-flex align-items-center justify-content-center" >
                    <Form onSubmit={loginHandler} className="col-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" value={values.email} onChange={handleChange} required={true} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter Password" value={values.password} onChange={handleChange} required={true} />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    </Col>
                        <Col sm={1} md = {4}></Col>
                    </Row>
                </Container>
            </div>
        )
}

export default LoginAdmin;