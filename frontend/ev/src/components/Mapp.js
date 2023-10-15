import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import UserProfile from './UserProfile';

mapboxgl.accessToken='pk.eyJ1IjoiYWtzaGl0MjAwMSIsImEiOiJjbDNza24yeGswM3R6M2NyeDFsdXlyamIwIn0.l8sSd7U_JLjCQeMzHu341g'; 
const link = process.env.REACT_APP_BACKEND_API;

class Mapp extends Component{
	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: 77.260071,
			lat: 28.543140,
			zoom: 18,
		}
		this.mapContainer = React.createRef();
	}

	// Create map and lay over markers
	async componentDidMount(){
		const map = await new mapboxgl.Map({
			container: this.mapContainer.current,
			style: 'mapbox://styles/mapbox/navigation-day-v1', 
			center: [77.260071, 28.543140],
			zoom: this.state.zoom
		})

		
		const d = await axios.get(link+'/api/getstations/');

		d.data.forEach((location) => {
			// console.log('added : ', location);
			var marker = new mapboxgl.Marker()
							.setLngLat(location.geometry.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML(`<div>
										<h4>${location.username}</h4>
										<div>
											<a href="https://maps.google.com/?q=${location.location}" style="font-size: 10px;">Directions</a>
										</div>
										<a href= "tel:${location.phone}" > 
											Contact Us
										</a>
										<div style="font-size: 14px;" > ${location.type}</div>
										<div style="font-size: 13px;">
										 <strong> ${location.email} </strong>
										</div>
								</div>  `))  //add a booking button here and it's functionality
							
							
							.addTo(map);

		})
		
		map.addControl(new mapboxgl.FullscreenControl());
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


	render(){
		// const d = JSON.parse(localStorage.getItem('loginData'));
		return(
			<div style={{height:'700px'}}>
				<Container fluid style={{height:'inherit'}}>
					<Row style={{height:'inherit'}}>
						<Col sm={12} md={7} className="d-flex align-items-center justify-content-center" style={{height:'600px'}} >
							<div className="map-container border" ref={this.mapContainer}/>
						</Col>
						<Col sm={12} md={4} className="d-flex align-items-start justify-content-start mt-4" ><UserProfile /></Col>
						<Col sm={0} md={1}></Col>
					</Row>
					</Container>
			  </div>
		)
	}
}

export default Mapp;
