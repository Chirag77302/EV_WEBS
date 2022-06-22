import React, { Component } from "react";
import { Container, Row,Col } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import { BiPhoneCall } from "react-icons/bi";
import './ListedBookings.css'; 
import { TbRecharging } from "react-icons/tb";
import { IoMailOpenOutline} from "react-icons/io5";
import { MdEvStation } from "react-icons/md";
import { withRouter } from "react-router";

const link = process.env.REACT_APP_BACKEND_API;

class ListedBookings extends Component{

    constructor(props){
        super(props);
        this.state = {
            avail:[],
            not_avail:[]
        }
        this.BookAStation = this.BookAStation.bind(this);
        this.printunav = this.printunav.bind(this);
        this.goPreviousPage = this.goPreviousPage.bind(this);
    }

    async componentDidMount(){
        
        const obj = await JSON.parse(localStorage.getItem('loginData'));
        // console.log('obj is : ',obj);
        if(obj){
            const res = await fetch(link+'/api/user/bookings', {
                method: 'POST',
                body: JSON.stringify({
                  username:obj.username,
                  email: obj.email
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            let d = await res.json();

            // console.log('res is : ', d);
            await this.setState({
                avail:[...d.available],
                not_avail:[...d.not_available]
            },console.log(this.state));
        }

    }

    printunav(){
        console.log('state is : ',this.state);
    }

    goPreviousPage(){
        console.log("aa gye yahan pr");
        const d = JSON.parse(localStorage.getItem('loginData'));
        this.props.history.push(`/user/${d._id}`);
    }

    async BookAStation(e){
        
        e.preventDefault();
        let id_extract = e.target.id;
        console.log('id extracted is : ',id_extract);
        // console.log('state is : ',this.state.avail);
        let station_extract = await this.state.avail.filter(st => st._id === id_extract);
        console.log("station is : ",station_extract[0]);
    
        const obj = await JSON.parse(localStorage.getItem('loginData'));
        const res = await fetch(link+'/api/user/update/', {
                        method: 'POST',
                        body: JSON.stringify({
                            email: obj.email,
                            id_extract: id_extract
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
        let d = await res.json();
        console.log(d);
        await this.setState({
            avail: this.state.avail.filter(st => st.email !== station_extract[0].email),
            not_avail:[...this.state.not_avail,station_extract[0]]
        }, this.printunav());

    }

    render(){
        return (
            <div className="head">
                <div sm={12} className="d-flex justify-content-center"><h1><strong>BOOKINGS</strong></h1></div>
                    <Container fluid>
                        <Row>
                            <Col sm={1}></Col>
                            <Col sm={10}>
                                <h4>Available Bookings</h4>

                                {this.state.avail.length === 0 ?<div className="card mb-3 border d-flex justify-content-center align-items-center" style={{borderRadius:'0.75rem'}} >
                                    <h4 className="text-primary p-2"> No Stations Available </h4>
                                </div>  : this.state.avail.map(station => {
                                    return (
                                        <div className="card mb-3 border" style={{borderRadius:'0.75rem'}} >
                                            <div className="row">
                                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                                    <MdEvStation className="m-1 border" style={{fontSize: '200px',color:"#198754"}}/>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <h4 className="card-title fw-bold text-primary">{station.username}</h4>
                                                        <p className="card-text"><strong>{station.location}</strong></p>
                                                        <p className="card-text d-flex align-items-center">
                                                           <TbRecharging className="me-1" style={{fontSize: '22px',color:"#198754"}}/> <h5>{station.type}</h5>
                                                        </p>
                                                        <p className="card-text">
                                                            <p className="text-muted"><strong><BiPhoneCall style={{fontSize: '20px'}}/> {station.phone}</strong> </p>
                                                        </p>
                                                        <p className="card-text d-flex flex-row justify-content-between">
                                                            <p className="card-text">
                                                                <IoMailOpenOutline className="me-1" style={{fontSize: '30px'}}/>{station.email}
                                                            </p>
                                                            <p className="card-text">
                                                                <button id={station._id} type="button" className="btn btn-primary m-1" onClick={this.BookAStation} >Book</button>
                                                            </p>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            
                                <h4>Current Bookings</h4>
                                {this.state.not_avail.length === 0 ? <div className="card mb-3 border d-flex justify-content-center align-items-center" style={{borderRadius:'0.75rem'}} >
                                    <h4 className="text-primary p-2"> No Bookings Added </h4>
                                    <button type="button" className="btn btn-outline-primary m-1" onClick={this.goPreviousPage}  >Go Back </button>
                                </div>  : this.state.not_avail.map(station => {
                                    return (
                                        <div className="card mb-3 border" style={{borderRadius:'0.75rem'}} >
                                            <div className="row">
                                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                                    <MdEvStation className="m-1 border" style={{fontSize: '200px',color:"#198754"}}/>
                                                </div>
                                                <div className="col-md-9 p-0">
                                                    <div className="card-body">
                                                        <h4 className="card-title fw-bold text-primary">{station.username}</h4>
                                                        <p className="card-text"><strong>{station.location}</strong></p>
                                                        <p className="card-text d-flex align-items-center">
                                                           <TbRecharging className="me-1" style={{fontSize: '22px',color:"#198754"}}/> <h5>{station.type}</h5>
                                                        </p>
                                                        <p className="card-text">
                                                            <p className="text-muted"><strong><BiPhoneCall style={{fontSize: '20px'}}/> {station.phone}</strong> </p>
                                                        </p>
                                                        {/* <p className="card-text d-flex flex-row justify-content-between"> */}
                                                            <p className="card-text">
                                                                <IoMailOpenOutline className="me-1" style={{fontSize: '30px'}}/>{station.email}
                                                            </p>
                                                        {/* </p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-outline-primary m-1" onClick={this.goPreviousPage}  >Go Back </button>
                                        </div>
                                    )
                                })}
                            </Col>
                            <Col sm={1}></Col>
                        </Row>
                    </Container>
            </div>
        )
    }

}

export default withRouter(ListedBookings);