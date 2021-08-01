import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import logo from "../../assets/projects/cansatlogo.png"
import '../../sections/cansat1/Cansat1.css';
import "./modal_show.css";
import ModalDialog from 'react-bootstrap/ModalDialog'
import Bounce from 'react-reveal/Bounce'

class Modal_show extends React.Component {
     constructor(props){
         super(props);
         this.state = {
           show: false
       };
     }
    
    render(){
      
      
      
    
        return (
         <>
              <p onClick={() => this.setState({ show: true })} className="logop">Know More about CanSat<img src={logo} className="logoimg" /></p> 
          
            <Modal dialogClassName="my-modal"
            show={this.state.show}
            
          animation={true}
          onHide={() => this.setState({ show: false })}
            > <Bounce>
              <div className="moddisp">
             <Modal.Header closeButton>
  
             <Modal.Title className = 'myModal-heading'> <h3 className="md-margin-5">WHAT IS THE CANSAT COMPETITION?</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body className="mansha-model-text">
                The CanSat competition is organized by American Astronautical Society(AAS) and recognized by NASA Goddard. A CanSat is the simulation of a satellite prototype in the shape of a canister, used as a means to impart relevant space  technology knowledge and skills to students.The CanSat competition is held in Texas where a unique mission statement is designed every year for the students. Top 40 university teams across the globe compete,design and launch their CanSat prototypes after getting shortlisted through rigorous preliminary rounds.
                 For more details:<br/>
                 <a target="_blank" href="http://www.cansatcompetition.com/index.html">http://www.cansatcompetition.com/index.html</a>
            </Modal.Body>
            </div>
            </Bounce>
            
             </Modal>
        </> 
    );
  }
}
export default Modal_show; 