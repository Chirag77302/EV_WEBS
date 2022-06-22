import React, { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";

class ErrorHandler extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div style={{height:'700px'}} className="d-block align-items-center justify-content-center">
                <Container style={{height:'inherit'}}>
                    <Row style={{height:'inherit'}}>
                        <Col sm={0} md={1} ></Col>
                        <Col sm={12} md={10} className="d-flex align-items-center justify-content-center">
                            <div style={{fontSize:"100px"}} >ERROR !</div>
                        </Col>
                        <Col sm={0} md={1}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ErrorHandler;