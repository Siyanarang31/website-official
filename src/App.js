import React, {Fragment} from 'react'
import "./App.css"
import HomePage from './Pages/Home/HomePage.jsx'
import OurTeam from './Pages/OurTeam/OurTeam.jsx';
import Sponsorship from './Pages/Sponsorship/Sponsorship.jsx';
import Achievements from './Pages/Achievements/Achievements.jsx';
import SACup2021 from './Pages/SACup2021/SACup2021.jsx';
 import Cansat2018 from './Pages/cansat2018/cansat2018.jsx';
 import Cansat2019 from './Pages/cansat2019/cansat2019.jsx';
 import Cansat2021 from "./Pages/cansat2021/cansat2021.jsx";
import EventsPage from './Pages/Events/Events.jsx';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from "./components/Navbar/NavigationBar.jsx"
import ContactFooter from './components/ContactFooter/ContactFooter';
//import {BrowserView, MobileView ,TabletView, isBrowser, isMobile, isTablet} from 'react-device-detect';
import ScrollTop from './ScrollTop';

function App() {
  return (
    <div>
    <div>
       {/* <BrowserView> */}
      <NavigationBar/>
      <Switch>
        <Route exact
          path="/"
          component={HomePage}
        />
        <Route
          path="/ourTeam"
          component={OurTeam}
          exact={true }
        />
        <Route
          path="/cansat2018"
          component={Cansat2018}
          exact={true }
        />
        <Route
          path="/cansat2019"
          component={Cansat2019}
          exact={true }
        />
        <Route
          path="/cansat2021"
          component={Cansat2021}
          exact={true }
        />
        <Route
          path="/sACup2021"
          component={SACup2021 }
          exact={true }
        />
        <Route
          path="/achievements"
          component={Achievements}
          exact={true }
        />
        <Route
          path="/sponsorship"
          component={Sponsorship}
          exact={true }
        />
        <Route
          path="/events"
          component={EventsPage}
          exact={true }
        />
      </Switch>
      <ContactFooter/>
             {/* </BrowserView> */}
       </div>
 {/* <div style={{backgroundColor:"black",height:"100vh"}}>
       <MobileView>
         <h1 style={{textAlign:"center", fontSize:"2.2em", color:"#f15831", fontFamily:"Montserrat", padding:"5% "}} > This website is still under construction, please use a laptop to view this website in full screen. We sincerely apologize for the inconvenience. </h1>
       </MobileView>
       </div>
    */}
    </div>
  );
}

export default App;
