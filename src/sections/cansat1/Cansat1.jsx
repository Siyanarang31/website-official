import './Cansat1.css';
import React,{ useState } from 'react';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import { data1 } from '../../constants/cansat_constants';
import conops from "../../assets/projects/conops_2018.png"
import pic1 from '../../assets/projects/7.jpg'
import pic2 from '../../assets/projects/Image3.jpg'
import pic3 from '../../assets/projects/IMG_20191005_094851.jpg'
import logo from "../../assets/projects/cansatlogo.png"
import Modal_show from "../../components/Modal/modal_show"
import Fade from 'react-reveal/Fade'
import CSat18Slide from '../Slideshows/csat18small/CSat18Slide.js'
import CSat18SlideBig from '../Slideshows/CSat18SlideBig';


const Cansat1 = () => {
    return(
        <div className = 'our-cansat1'>
            <div className = 'cansat1-heading'>Cansat 2018</div>
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
                            data1.map((link) =>
                                <Col xs={12} >
                                <h4 className="text-heading offset-md-2 col-xs-12 col-md-8">{link.title}</h4>
                                        <div ><p className=" cansat1p justify-content">{link.info1}</p></div>
                                            <ul className="cansat1ul">
                                                <li className=" cansat1li ">{link.info2}</li>
                                                <li className=" cansat1li justify-content">{link.info3}</li>
                                                <li className="cansat1li justify-content">{link.info4}</li>
                                                <li className="cansat1li justify-content">{link.info5}</li>
                                                <li className="cansat1li justify-content">{link.info6}</li>
                                                <li className="cansat1li justify-content">{link.info7}</li>
                                                <li className="cansat1li justify-content">{link.info8}</li>

                                            </ul>
                                       
                                       

                                </Col>
                            )
                        }
                        </div>
                        </Row>
                        <Row>
                        <Col xs={12}>
                        <Fade><img className="cansat1img" src={conops}/></Fade>
                        </Col>
                        </Row>
                
                    </Container>
                    <CSat18Slide className="smaller-slide"/>
                    <CSat18SlideBig className="bigger-slide"/>
                    <br/><br/><br/><br/><br/>
    </div>
        

    )
}

export default Cansat1