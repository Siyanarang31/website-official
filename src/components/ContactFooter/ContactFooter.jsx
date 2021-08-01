import './ContactFooter.css'
import React from 'react';
import { Button} from 'react-bootstrap';
     
class ContactFooter extends React.Component {
    instaLink = "https://www.instagram.com/team_sammard/"
    render() {
    return(
        <div className = 'contact-footer'>
            <div className = 'contact-title'>CONTACT US</div>

            <div className = 'contact-grid'>
                <div className = 'contact-orangeblock'></div>
                <div className = 'contact-address'>
                2nd Floor, CTS Building, Creation Labs, VIT, Vellore Campus, Tiruvalam Rd, Katpadi, Vellore, Tamil Nadu 632014
                </div>
                <div className = 'contact-media1'>
                    <Button className = 'cntct-media-text' href = "https://www.instagram.com/team_sammard/">team_sammard &nbsp; &nbsp;<i class="fab fa-instagram fa-2x myLogo"></i></Button>
                    {/* <div href={this.instaLink}  className = 'cntct-media-text'>team_sammard &nbsp; &nbsp;<i class="fab fa-instagram fa-2x myLogo"></i></div> */}
                    <Button className = 'cntct-media-text' href="https://www.linkedin.com/company/teamsammardrocketry/mycompany/">Team Sammard &nbsp; &nbsp;<i class="fab fa-linkedin fa-2x myLogo"></i></Button>
                    {/* <div className = 'cntct-media-text'>Team Sammard &nbsp; &nbsp;<i class="fab fa-linkedin fa-2x myLogo"></i></div> */}
                    <Button className = 'cntct-media-text' href="mailto: teamsammard@gmail.com">teamsammard@gmail.com &nbsp; &nbsp;<i class="fas fa-envelope fa-2x myLogo"></i></Button>
                    {/* <div className = 'cntct-media-text'>teamsammardofficial@gmail.com &nbsp; &nbsp;<i class="fas fa-envelope fa-2x myLogo"></i></div> */}
                </div>
                <div className = 'contact-media2'>
                    <Button className = 'cntct-media-text'>+91 96747 90288 &nbsp; &nbsp;<i class="fas fa-phone fa-2x myLogo"></i></Button>
                    {/* <div className = 'cntct-media-text'>+91 96747 90288 &nbsp; &nbsp;<i class="fas fa-phone fa-2x myLogo"></i></div> */}
                    <Button className = 'cntct-media-text' href="https://www.facebook.com/teamsammard/">@teamsammard &nbsp; &nbsp;  <i class="fab fa-facebook-square fa-2x myLogo"></i></Button>
                    {/* <div className = 'cntct-media-text'>@teamsammard &nbsp; &nbsp;  <i class="fab fa-facebook-square fa-2x myLogo"></i></div> */}
                </div>
            </div>

            <div className = 'footer-text'>
            © Copyright 2021. All Rights Reserved by Team Sammard
            </div>
        </div>
    )
}
}


export default ContactFooter