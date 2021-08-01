import '../cansat1/Cansat1.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import { data2,slides1 } from '../../constants/cansat_constants';
import conops2 from "../../assets/projects/CONOPS_2019.png"
import pic1 from '../../assets/projects/2018+2019 project.jpg'
import pic2 from '../../assets/projects/edited.png'
import pic3 from '../../assets/projects/photo.jpeg'
import logo from "../../assets/projects/cansatlogo.png"
import Modal_show from "../../components/Modal/modal_show"
import Fade from 'react-reveal/Fade'
import CSat19Slide from '../Slideshows/csat19small/CSat19Slide.js'
import CSat19SlideBig from '../Slideshows/CSat19SlideBig';

const Cansat2 = () => {
    return(
        <div className = 'our-cansat1'>
            <div className = 'cansat1-heading'>Cansat 2019</div>
            {/* <br/> */}
            {/* <Modal_show /> */}
            <div className = "abt-csat">
                <div className="abt-csat-head">WHAT IS THE CANSAT COMPETITION</div>
                <div className="abt-csat-text">The CanSat competition is organized by American Astronautical Society (AAS) and recognized by NASA Goddard. A CanSat is the simulation of a satellite prototype in the shape of a canister, used as a means to impart relevant space technology knowledge and skills to students. The CanSat competition is held in Texas where a unique mission statement is designed every year for the students. Top 40 university teams across the globe compete, design and launch their CanSat prototypes after getting shortlisted through the rigorous preliminary rounds. For more details: <a href="http://www.cansatcompetition.com/index.html">http://www.cansatcompetition.com/index.html</a>
                </div>
            </div>
            <Container>
                    <Row>
                    <div className="data_back">
                        {
                            data2.map((link) =>
                                <Col xs={12}>
                                <h4 className="text-heading offset-md-2 col-xs-12 col-md-8  ">{link.title}</h4>
                                        <div ><p className=" cansat1p justify-content">{link.info1}</p></div>
                                            <ul className="cansat1ul">
                                                <li className=" cansat1li justify-content">{link.info2}</li>
                                                <li className=" cansat1li justify-content">{link.info3}</li>
                                                <li className="cansat1li justify-content">{link.info4}</li>
                                                <li className="cansat1li justify-content">{link.info5}</li>
                                                <li className="cansat1li justify-content">{link.info6}</li>
                                                <li className="cansat1li justify-content">{link.info7}</li>
                                                <li className="cansat1li justify-content">{link.info8}</li>
                                                <li className="cansat1li justify-content">{link.info9}</li>
                                                <li className="cansat1li justify-content">{link.info10}</li>

                                            </ul>
                                       

                                </Col>
                            )
                        }
                        </div>
                        <Fade><img className="cansat2img" src={conops2}/></Fade>
                  
                    </Row>
                    </Container>
                    <br/><br/>
                    <CSat19Slide/>
                    <CSat19SlideBig/>
                    <br/><br/><br/><br/><br/>
    </div>
    )
}

export default Cansat2