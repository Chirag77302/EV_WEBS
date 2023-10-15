import React from 'react';
import { Nav,Navbar , Container } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
function Navbr(){

    const history = useHistory();
    const HandleLogout = () => {
        localStorage.removeItem('loginData');
        history.push('/');
    }

    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">EV_PROJECT</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link >Map</Nav.Link>
            <Nav.Link onClick={HandleLogout} >Logout</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default Navbr;