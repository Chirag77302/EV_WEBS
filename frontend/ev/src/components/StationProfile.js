import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";
// import { RiChargingPileFill } from "react-icons/ri";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { FiPhoneCall } from "react-icons/fi";
import './StationProfile.css';
// import { HiOutlineMailOpen } from "react-icons/hi";
// HiOutlineMailOpen
function StationProfile(){
    const d = JSON.parse(localStorage.getItem('StationData'));
    console.log('state is : ',d);
    const history = useHistory();

    const handleLogout = async() => {
        await localStorage.removeItem('StationData');
        history.push('/');
    }
    const link = "https://maps.google.com/?q=" + d.location;
    const link2 = "tel:" + d.phone;
    const link3 = "mailto:" + d.email;
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
                                <h1 className="my-3">{d.username}</h1>
                                <h4 className="text-muted mb-4">{d.maxSlots-d.slots} Slots</h4>
                                <div className="d-flex justify-content-center mb-2">
                                <button type="button" className="btn btn-danger" onClick={handleLogout}>LogOut</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="d-flex align-items-center justify-content-start row" >
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body border">
                                    <div className='border p-3'>
                                        <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center justify-content-start">
                                                <p className="mb-0 text-success"><strong>CONTACT US</strong></p>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-12 m-2 ms-0">
                                                <h1 className="mb-0"><strong> Get In Touch With Us </strong></h1>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        {/* <Row className="">
                                            <Col>a</Col>
                                            <Col>
                                                <h4 className="mb-0"><strong> Location</strong></h4>
                                                <p className="text-muted mb-0">Directions</p>
                                            </Col>
                                            {/* <div className="col-sm-5 d-flex align-items-center justify-content-start icon_box">
                                                <HiOutlineLocationMarker className='icon_style'/>
                                            </div>
                                            <div className="col-sm-7">
                                                <h2 className="text-muted mb-0">{d.maxSlots-d.slots}</h2>
                                            </div> */}
                                        {/* </Row> */}
                                        {/* <hr></hr> */}
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0"><strong>Location</strong></p>
                                            </div>
                                            <div className="col-sm-7">
                                                <a href={link} className="text-muted mb-0">Get Directions</a>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0"><strong> Email ID </strong></p>
                                            </div>
                                            <div className="col-sm-7">
                                                <a href = {link3}  className="text-muted mb-0"> {d.email}</a>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0"><strong> Contact No</strong></p>
                                            </div>
                                            <div className="col-sm-7">
                                                <a href = {link2} className="text-muted mb-0">Give A Call</a>
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
                                        {/* <Row className="mb-3">
                                            <Col sm={2} className="d-flex align-items-center justify-content-center icon_box">
                                                <HiOutlineLocationMarker className='icon_style'/>
                                            </Col>
                                            <Col sm={10} className="">
                                                <h4 className="mb-0"><strong><a href={link} className="text-muted mb-0">Location</a></strong></h4>
                                            </Col>
                                        </Row>
                                         <hr></hr> 
                                        <Row className="mb-3">
                                            <Col sm={2} className="d-flex align-items-center justify-content-center icon_box">
                                                <FiPhoneCall className='icon_style m-2'/>
                                            </Col>
                                            <Col sm={10} className="">
                                                <h4 className="mb-0"><strong><a href = {link2} className="text-muted mb-0">Call Us</a></strong></h4>
                                            </Col>
                                        </Row>
                                         <hr></hr>
                                        <Row className="">
                                            <Col sm={2} className="col-sm-2 d-flex align-items-center justify-content-center icon_box">
                                                <HiOutlineMailOpen className='icon_style m-2'/>
                                            </Col>
                                            <Col sm={10} className="col-sm-10">
                                                <h4 className="mb-0"><strong><a href = {link3} className="text-muted mb-0">Email Us</a></strong></h4>
                                            </Col>
                                        </Row> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* <Col sm={0} md={1}></Col> */}
                </Row>
                </Container>
            </div>
        )
}

export default StationProfile;