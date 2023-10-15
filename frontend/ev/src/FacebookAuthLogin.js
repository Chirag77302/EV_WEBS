import React from "react";
import FacebookLogin from 'react-facebook-login';
import { useState } from "react";

// further enhancements / future scope dummy files

function FacebookAuthLogin(){
    const [loginData,setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null);

    const responseFacebook = async (response) => {
        console.log('response is : ', response);
        const res = await fetch('/api/auth/facebook', {
            method: 'POST',
            body: JSON.stringify({accessToken: response.accessToken,userID:response.userID}),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          const data = await res.json();
          setLoginData(data);
          console.log(loginData);
          localStorage.setItem('loginData', JSON.stringify(data));
    }

    const componentClicked = () => {
        console.log('Component is clicked');
    }

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    };

    return (
        <div>
            {loginData?
            <div>
                <h3>You logged in as {loginData.email}</h3>
                <button onClick={handleLogout}>Logout</button>
            </div>:
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends,user_actions.books"
                onClick={componentClicked}
                callback={responseFacebook}
            />
            }
        </div>
    )
}

export default FacebookAuthLogin;