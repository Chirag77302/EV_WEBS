import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";
import { RiChargingPileFill } from "react-icons/ri";
// RiChargingPileFill

function StationProfile(){
    const d = JSON.parse(localStorage.getItem('StationData'));
    console.log('state is : ',d);
    const history = useHistory();

    const handleLogout = async() => {
        await localStorage.removeItem('StationData');
        history.push('/');
    }

        return (
            <div style={{height:'700px'}}>
                <Container fluid style={{height:'inherit'}}>
                <Row style={{height:'inherit'}}>
                    <Col sm={0} md={2}></Col>
                    <Col sm={12} md={4} className="d-flex align-items-center justify-content-center" >
                        <div className="card mb-4 p-2 border">
                            <div className="card-body text-center border">
                                <img src="https://img.freepik.com/free-vector/electric-car_23-2148003400.jpg?w=2000" alt="avatar"
                                 className="rounded-circle img-fluid" />
                                <h4 className="my-3">{d.username}</h4>
                                <p className="text-muted mb-4">{d.location}</p>
                                <div className="d-flex justify-content-center mb-2">
                                <button type="button" className="btn btn-danger" onClick={handleLogout}>LogOut</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={5} className="d-flex align-items-center justify-content-start border" >
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body border">
                                    <div className='border p-3'>
                                        <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center justify-content-start">
                                                <p className="mb-0"><strong>Available Slots</strong></p>
                                            </div>
                                            <div className="col-sm-7">
                                                <h2 className="text-muted mb-0">{d.maxSlots-d.slots}</h2>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0"><strong> Email ID </strong></p>
                                            </div>
                                            <div className="col-sm-7">
                                                <p className="text-muted mb-0"> {d.email}</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0"><strong> Contact No</strong></p>
                                            </div>
                                            <div className="col-sm-7">
                                                <p className="text-muted mb-0">{d.phone}</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0"><strong>Type</strong></p>
                                            </div>
                                            <div className="col-sm-7">
                                                <p className="text-muted mb-0">{d.type}</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0"><strong>State</strong></p>
                                            </div>
                                            <div className="col-sm-7">
                                                <p className="text-muted mb-0">{d.state}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={0} md={1}></Col>
                </Row>
                </Container>
            </div>
        )
}

export default StationProfile;