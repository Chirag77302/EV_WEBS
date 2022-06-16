import React, { useState } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const inivals = {
    email:"",
    password:""
}

function LoginAdmin(){
        const [loginData,setLoginData] = useState();
        const [values,setvalues] = useState(inivals);
        const history = useHistory();

        const loginHandler = async(e) =>{
            e.preventDefault();
            const res = await fetch('/api/station/login', {
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
            localStorage.setItem('StationData', JSON.stringify(data));

            history.push(`/admin/`);
        }

        const handleChange = (evt) =>{
            const { name, value } = evt.target;
            setvalues({
            ...values,
            [name]: value,
            });
        }

        return(
            <div className="container">
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
            </div>
        )
}

export default LoginAdmin;