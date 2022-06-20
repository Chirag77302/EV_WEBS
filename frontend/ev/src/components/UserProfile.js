import React from "react";
import { useHistory } from "react-router-dom";

function UserProfile(){
    const d = JSON.parse(localStorage.getItem('loginData'));
    const history = useHistory();

    const handleBooking =  (e) => {
        e.preventDefault();
		history.push(`/user/${d._id}/bookings`);
	}

    const handleNotifications = (e) => {
        e.preventDefault();
        history.push(`/user/${d._id}/notifications`);
    }

    const handleLogout = async() => {
        await localStorage.removeItem('loginData');
        history.push('/');
    }

    return (
        <div className="card mb-4 p-2 border">
		    <div className="card-body text-center">
		    	<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
		    	className="rounded-circle img-fluid border" />
		    	<h3 className="my-2"><strong>{d.username}</strong></h3>
		    	<p className="mb-4">{d.email}</p>
		    	<div className="d-flex justify-content-center mb-2">
                <div>
                    <button type="button" className="btn btn-primary m-1" onClick={handleBooking} >Bookings</button>
                    <button type="button" className="btn btn-success m-1" onClick={handleNotifications} >Notifications
                        {/* <span className="badge bg-danger ms-2">8</span> */}
                    </button>
                    <button type="button" className="btn btn-danger m-1" onClick={handleLogout} >LogOut</button>
                </div>
		    	</div>
		    </div>
		</div>
    )
}

export default UserProfile;