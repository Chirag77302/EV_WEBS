import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
// import { Nav,Navbar} from 'react-bootstrap';
import Menu from './SelectorMenu';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BiPhoneCall } from "react-icons/bi";
import { useHistory } from 'react-router-dom';
import UserProfile from './UserProfile';

mapboxgl.accessToken='pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
// Sample data 
// const data = [
// 	{
// 		"location": "St. Georges School Alaknanda ND",
// 		"city": "New Delhi",
// 		"state": "Delhi",
// 		"coordinates": [77.252970,28.525260],
// 	},
// 	{
// 		"location": "Govindpuri Metro Station",
// 		"city": "New Delhi",
// 		"state": "Delhi",
// 		"coordinates": [77.264427,28.543952],
// 	},
// 	{
// 		"location": "Domino's Kalkaji",
// 		"city": "New Delhi",
// 		"state": "Delhi",
// 		"coordinates": [77.257661,28.540669],
// 	}
// ]

class Mapp extends Component{
	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: 77.260071,
			lat: 28.543140,
			zoom: 16,
		}
		this.mapContainer = React.createRef();
		// this.handleBooking = this.handleBooking.bind(this);
	}

	// Create map and lay over markers
	async componentDidMount(){
		const map = await new mapboxgl.Map({
			container: this.mapContainer.current,
			style: 'mapbox://styles/mapbox/dark-v10', 
			center: [77.260071, 28.543140],
			zoom: this.state.zoom
		})

		const d = await axios.get('/api/getstations/');

		d.data.forEach((location) => {
			console.log('added : ', location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.geometry.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML(`<div>
										<h4>${location.username}</h4>
										<div>
										<p  style="font-size: 10px;">${location.location}</p>
										</div>
										<BiPhoneCall />
										<a href= "tel:${location.phone}" > 
											${location.phone}
										</a>
										<div style="font-size: 14px;" > 
											${location.type}
										</div>
										<div style="font-size: 13px;">
										 <strong> ${location.email} </strong>
										</div>
								</div>  `))  //add a booking button here and it's functionality
							
							
							.addTo(map);

		})

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                enableHighAccuracy: true
                },
                trackUserLocation: true,
                showUserHeading: true
                })
            );
	}

	// handleBooking(){
	// 	const history = useHistory();
	// 	const d = JSON.parse(localStorage.getItem('loginData'));
	// 	history.push(`/user/${d._id}/bookings`);
	// }

	render(){
		// const d = JSON.parse(localStorage.getItem('loginData'));
		return(
			<div style={{height:'700px'}}>
				<Container fluid style={{height:'inherit'}}>
					<Row style={{height:'inherit'}}>
					<Col sm={12} md={7}>
						<div className="map-container" ref={this.mapContainer}/>
					</Col>
					<Col sm={12} md={4} className="d-flex align-items-center justify-content-start" >
						<UserProfile />
					</Col>
					<Col sm={1} md={1}></Col>
					</Row>
					</Container>
			  </div>
			// <div className="aree_map"  style={{height:'700px'}}>
			// 	<Container className='p-0' fluid style={{height:'inherit'}}>
			// 		<Row style={{height:'inherit'}}>
			// 			<Col sm={1} md={0}></Col>
			// 			<Col sm={10} md={12}>
			// 			{/* className="d-flex align-items-center justify-content-center" */}
			// 
			// 				{/* style={{width:'inherit'}} */}
			// 			</Col>
			// 			<Col sm={1} md={0}></Col>
			// 		</Row>
			// 	</Container>
			// </div>
		)
	}
}

export default Mapp;
