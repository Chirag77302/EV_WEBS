import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';
import { gapi } from 'gapi-script';
import {useHistory} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function GoogleAuthLogin() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);


  const [loginData,setLoginData] = useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    : null);
  const history = useHistory();

    const handleFailure = (result) => {
      console.log("failure is : ",result);
      if(result.error !== "popup_closed_by_user")alert(result);
    }

    const handleLogin = async (googleData) => {
        console.log(googleData);
        console.log(googleData.tokenId);
        const res = await fetch('/api/auth/google', {
            method: 'POST',
            body: JSON.stringify({
              token: googleData.tokenId,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          const data = await res.json();
          console.log('data is : ',data);
          setLoginData(data);
          localStorage.setItem('loginData', JSON.stringify(data));
          history.push(`/user/${data._id}`);
        }

      const handleLogout = async() => {
          await localStorage.removeItem('loginData');
          setLoginData(null);
      };

  return (
    <div style={{height:'700px'}}>
    <Container fluid style={{height:'inherit'}}>
          <Row style={{height:'inherit'}}>
          <Col sm={0} md={3}></Col>
          <Col sm={12} md={6} className="d-flex align-items-center justify-content-center">
              {loginData ? (
                <div>
                  <h3>You logged in as {loginData.email}</h3>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Sign in with Google"
                  onSuccess={handleLogin}
                  onFailure={handleFailure}
                  theme="dark"
                  cookiePolicy={'single_host_origin'}
                ></GoogleLogin>
              )}
           </Col>
           <Col sm={0} md={3}></Col>
          </Row>
        </Container>
        </div>
  );
}

export default GoogleAuthLogin;
