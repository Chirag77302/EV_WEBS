import React from "react";
import {useHistory} from 'react-router-dom';
import { FaUserLock,FaChargingStation } from "react-icons/fa";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Main.css';

function MainPage(){
    const history = useHistory();

    const Redirectuser =  ()=> {
        const d = JSON.parse(localStorage.getItem('loginData'));
        if(d)history.push(`/user/${d._id}`);
        else history.push('/user/login');
    }

    const Redirectstation = ()=> {
      history.push('/admin');
    }

    return(
      <div style={{height:'700px'}}>
        <Container fluid style={{height:'inherit'}}>
          <Row style={{height:'inherit'}}>
            <Col sm={0} md={3}></Col>
            <Col sm={12} md={3} className="d-flex align-items-center justify-content-center" >
              <button onClick={Redirectuser} className="p-5 square rounded-3 shadow" style={{"backgroundColor":"#066764","opacity":"90%","border":"none" }} >
                <FaUserLock style={{fontSize: '200px',color:"white"}} />
                <br></br>
                <p style={{'color':"white"}}> User </p>
              </button>
            </Col>
            <Col sm={12} md={3} className="d-flex align-items-center justify-content-center" >
              <button onClick={Redirectstation} className="p-5 square rounded-3 shadow" style={{"backgroundColor":"#066764","opacity":"90%","border":"none" }}>
                <FaChargingStation style={{fontSize: '200px',color:"white"}}/>
                <br></br>
                <p style={{'color':"white"}} > Charging Station </p>
              </button>
            </Col>
            <Col sm={0} md={3}></Col>
          </Row>
        </Container>
      </div>
    );
};

export default MainPage;