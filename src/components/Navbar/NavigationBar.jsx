import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import SammardLogo from "../../assets/HomePage/Team_Sammard_logo2.png";
import './NavigationBar.css';
class NavigationBar extends React.Component {
    scrollDown(){
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
          });
    }
    
   render() {
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    // var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar1").style.top = "0";
    //   } else {
    //     document.getElementById("navbar1").style.top = "-100px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }

       return ( 
              //  <div id="navbar1">  
            
            /* <span className="position-absolute trigger"></span> */
            <Navbar collapseOnSelect expand="md" className="nb-div sticky-top" class="navbar navbar-expand-md navbar-dark bg-dark " > 
               <Link  to="/" className="navbar-brand">
                    <img
                        src={SammardLogo}
                        className="team-logo"
                        alt="CanSat"
                    />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" data-toggle="collapse"  data-target=".navbar-collapse collapse"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link  to="/" eventKey="1" as={Link} className="nav-link">HOME</Nav.Link>
                        <Nav.Link  to="/ourTeam" eventKey="2" as={Link} className="nav-link">TEAM</Nav.Link>
                        <NavDropdown title="PROJECT" id="collasible-nav-dropdown" className="nav-link">
                            <Nav.Link  to="/cansat2018" as={Link} eventKey="3" className="nav-link">CANSAT 2018</Nav.Link>
                            <Nav.Link  to="/cansat2019" as={Link} eventKey="4" className="nav-link">CANSAT 2019</Nav.Link>
                            <Nav.Link  to="/cansat2021" as={Link} eventKey="5" className="nav-link">CANSAT 2021</Nav.Link>
                            <Nav.Link  to="/sACup2021" as={Link} eventKey="6" className="nav-link">SA CUP 2021</Nav.Link>
                            <Nav.Link  to="/events" as={Link} eventKey="7" className="nav-link">EVENTS</Nav.Link>
                        </NavDropdown>
                        <Nav.Link  to="/achievements" eventKey="7" as={Link} className="nav-link">ACHIEVEMENTS</Nav.Link>
                        <Nav.Link  to="/sponsorship" eventKey="8" as={Link} className="nav-link"> SPONSORS</Nav.Link>
                        <Nav.Link onClick={this.scrollDown} className="nb-text"> CONTACT US</Nav.Link>                  
                    </Nav>
                </Navbar.Collapse>
          </Navbar>
          //  </div> 
       );
    }
}
export default NavigationBar;