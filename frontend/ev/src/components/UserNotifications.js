import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { BiPhoneCall } from "react-icons/bi";
import './ListedBookings.css'; 
import { TbRecharging } from "react-icons/tb";
import { IoMailOpenOutline,IoLogoWhatsapp } from "react-icons/io5";
import { MdEvStation } from "react-icons/md";

class UserNotifications extends Component{

    constructor(props){
        super(props);
        this.state = {
            avail:[],
        }
        this.handleStation = this.handleStation.bind(this);
        this.printunav = this.printunav.bind(this);
    }

    async componentDidMount(){
        
        const obj = await JSON.parse(localStorage.getItem('loginData'));
        console.log('obj is : ',obj);
        if(obj){
            const res = await fetch('/api/users/getbookings', {
                method: 'POST',
                body: JSON.stringify({
                  email: obj.email
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            let d = await res.json();

            console.log('d is : ', d.bookings);
            if(d.bookings.length === 0){
                await this.setState({
                    avail:[]
                },console.log(this.state));
            }else{
                await this.setState({
                    avail:[...d.bookings],
                },console.log(this.state));
            }
        }

    }

    printunav(){
        console.log('state is : ',this.state);
    }

   
    async handleStation(e){
        
        e.preventDefault();
        let id_extract = e.target.id;
        console.log('id extracted is : ',id_extract);
        // console.log('state is : ',this.state.avail);
        let station_extract = await this.state.avail.filter(st => st._id === id_extract);
        console.log("station is : ",station_extract[0]);
    
        const obj = await JSON.parse(localStorage.getItem('loginData'));
        const res = await fetch('/api/users/bookingsupdate', {
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
        console.log('ab wala d is : ', d);
        await this.setState({
            avail: this.state.avail.filter(st => st.email !== station_extract[0].email),
        }, this.printunav());

    }

    render(){
        return (
            <div className="head">
                <div sm={12} className="d-flex justify-content-center"><h1>Bookings</h1></div>
                    <Container>
                        <Row sm={12}>
                            <Col sm={1}></Col>
                            <Col sm={10}>
                                <h3>Available Bookings</h3>
                                {this.state.avail.length === 0 ? <div className="card mb-3 border d-flex justify-content-center align-items-center">
                                    <h4 className="text-primary p-2"> No Pending Bookings </h4>
                                 </div> : this.state.avail.map(station => {
                                    return (
                                        <div className="card mb-3 border">
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
                                                        <p className="card-text d-flex flex-row justify-content-between">
                                                            <p className="card-text">
                                                                <IoMailOpenOutline className="me-1" style={{fontSize: '30px'}}/>{station.email}
                                                            </p>
                                                            <p className="card-text">
                                                                <button id={station._id} type="button" className="btn btn-success m-1" onClick={this.handleStation} >Accept</button>
                                                                <button id={station._id} type="button" className="btn btn-danger m-1" onClick={this.handleStation} >Decline</button>
                                                            </p>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
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

export default UserNotifications;