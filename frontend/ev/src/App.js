import React from "react";
// import Main from './components/Main';
import Navbr from "./components/Navbar";
import {Route,Switch  } from 'react-router-dom';
import LoginAdmin from "./components/LoginAdmin";
import Register from "./components/RegPage";
import Mapp from "./components/Mapp";
import GoogleAuthLogin from "./googleauth";
import MainPage from "./components/Main";
import ChargerPage from './ChargerPage';
import ListedBookings from "./components/ListedBookings";
import StationProfile from "./components/StationProfile";
import UserNotifications from "./components/UserNotifications";

const App = () =>{
  return (
    <div>
      <Switch >
          <Route exact path = "/"><MainPage /></Route>
          <Route exact path="/admin/"><ChargerPage /></Route>
          <Route exact path="/admin/login"><LoginAdmin /></Route>
          <Route exact path="/admin/register"><Register/></Route>
          <Route exact path="/admin/:id"><StationProfile /></Route>
          {/* <Navbr /> */}
          <Route exact path="/user/login"><GoogleAuthLogin /></Route>
          <Route exact path="/user/:id" render={routeProps => (<Mapp {...routeProps} />)}></Route>
          <Route exact path="/user/:id/bookings"> <ListedBookings /> </Route>
          <Route exact path="/user/:id/notifications"> <UserNotifications /> </Route>
      </Switch >
      {/* <Main /> */}
    </div>
  );
}
export default App;
