import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { BiPhoneCall } from "react-icons/bi";
import './ListedBookings.css'; 


class ListedBookings extends Component{

    constructor(props){
        super(props);
        this.state = {
            avail:[
                // {
                //     'location' : "New Delhi, India",
                //     'state' : "Delhi",
                //     'name' : 'Laxmi Charging Station',
                //     'Contact':' +91-9711041096',
                //     'type':"DC LEVEL 1"
                // },
                // {
                //     'location' : "New Delhi, India",
                //     'state' : "Delhi",
                //     'name' : 'Laxmi Charging Station',
                //     'Contact':' +91-9711041096',
                //     'type':"DC LEVEL 1"
                // },
                // {
                //     'location' : "New Delhi, India",
                //     'state' : "Delhi",
                //     'name' : 'Laxmi Charging Station',
                //     'Contact':' +91-9711041096',
                //     'type':"DC LEVEL 1"
                // }
            ],
            not_avail:[]
        }
        this.BookAStation = this.BookAStation.bind(this);
        this.printunav = this.printunav.bind(this);
    }

    async componentDidMount(){
        
        const obj = await JSON.parse(localStorage.getItem('loginData'));
        console.log('obj is : ',obj);
        if(obj){
            const res = await fetch('/api/user/bookings', {
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

            console.log('res is : ', d);
            await this.setState({
                avail:[...d.available],
                not_avail:[...d.not_available]
            },console.log(this.state));
        }

    }

    printunav(){
        console.log('state is : ',this.state);
    }

    // componentDidUpdate(station,id){
    //     if(station){
    //         this.setState({
    //             avail:this.state.avail.filter(st => st._id !== id),
    //             not_avail:[...this.state.not_avail,station]
    //         },this.printunav(this.state.not_avail));
    //     }
    // }


    async BookAStation(e){
        
        e.preventDefault();
        let id_extract = e.target.id;
        console.log('id extracted is : ',id_extract);
        // console.log('state is : ',this.state.avail);
        let station_extract = await this.state.avail.filter(st => st._id === id_extract);
        console.log("station is : ",station_extract[0]);
    
        const obj = await JSON.parse(localStorage.getItem('loginData'));
        const res = await fetch('/api/user/update/', {
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
                <div sm={12} className="d-flex justify-content-center"><h1>Bookings</h1></div>
                <Row sm={12}>
                    <Container>
                        <Row sm={12}>
                            <ul className="mb-5">
                                <h3>Available Bookings</h3>
                                <li className="p-2" key={1}>
                                    <div><p className="cont">Name</p></div>
                                    <div><p className="cont ms-5">Type</p></div>
                                    <div><p className="cont">Contact</p></div>
                                    <div><p className="cont">Location</p></div>
                                    <div><p className="cont"></p></div>
                                </li>
                                {this.state.avail.map(station => {
                                    return (
                                        <li className="mb-3 p-3 ps-0 pe-0 rounded-3 heading" key={station._id} >
                                            <p className="fw-bold ps-1">{station.username}</p>
                                            <p>{station.type}</p>
                                            <p><BiPhoneCall /> {station.Contact}</p>
                                            <p>{station.location}</p>
                                            <Button id={station._id} variant="success" onClick={this.BookAStation} >Book Now</Button>
                                        </li>
                                    )
                                })}
                            </ul>
                            
                            <ul>
                                <h3>Current Bookings</h3>
                                <li key={2}>
                                    <p className="cont">Name</p>
                                    <p className="cont">Type</p>
                                    <p className="cont">Contact</p> 
                                    <p className="cont">Location</p>
                                </li>
                                {this.state.not_avail.map(station => {
                                    return (
                                        <li className="m-3 mt-0 p-3 ps-0 rounded-3 heading" key={station._id}>
                                            <p>{station.username}</p>
                                            <p>{station.type}</p>
                                            <p><BiPhoneCall /> {station.Contact}</p>
                                            <p>{station.location}</p>
                                        </li>
                                    )
                                })}
                            </ul>

                            {/* <li className="d-inline-block">
                                    <p>Name</p>
                                    <p>Location</p>   
                                    <p>State</p> 
                                </li>
                            <ListGroup>
                                {this.state.avail.map(station => {
                                    return (
                                        <ListGroup.Item className="d-inline">
                                            <ListGroup horizontal>
                                                <ListGroup.Item>{station.name}</ListGroup.Item>
                                                <ListGroup.Item>{station.location}</ListGroup.Item>
                                                <ListGroup.Item>{station.state}</ListGroup.Item>
                                                <ListGroup.Item><Button variant="success">Book Now</Button></ListGroup.Item>
                                            </ListGroup>
                                        </ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </Row>
                        <Row sm={12}>
                            <h2>Booked Slots</h2>
                            <ListGroup>
                                {this.state.not_avail.map(station => {
                                    return (
                                        <ListGroup.Item>
                                            <ListGroup horizontal>
                                                <ListGroup.Item>{station.name}</ListGroup.Item>
                                                <ListGroup.Item>{station.location}</ListGroup.Item>
                                                <ListGroup.Item>{station.state}</ListGroup.Item>
                                            </ListGroup>
                                        </ListGroup.Item>
                                    )
                                })}
                            </ListGroup> */}
                        </Row>
                    </Container>
                </Row>
            </div>
        )
    }

}

export default ListedBookings;