import './Cansat3.css'
import React,{ useState , useEffect} from 'react';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import { data3 } from '../../constants/cansat_constants';
import conops from "../../assets/projects/conops_2021.jpg"
import pic1 from '../../assets/projects/7.jpg'
import pic2 from '../../assets/projects/Image3.jpg'
import pic3 from '../../assets/projects/IMG_20191005_094851.jpg'
import logo from "../../assets/projects/cansatlogo.png"
import Modal_show from "../../components/Modal/modal_show"
import Fade from 'react-reveal/Fade'
import CSat21Slide from '../Slideshows/csat21small/CSat21Slide.js'
import CSat21SlideBig from '../Slideshows/CSat21SlideBig';
import csatImg from '../../assets/projects/image_2021-07-05_234100 1.png'
import payloadImg from '../../assets/projects/CanSat_Payload 1.png'
import AOS from "aos";
import "aos//dist/aos.css"

const Cansat3 = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);

    return(
        <div className = 'our-cansat1'>
            <div className = 'cansat1-heading'>Cansat 2021</div>
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
                            data3.map((link) =>
                                <Col xs={12} >
                                <h4 className="text-heading offset-md-2 col-xs-12 col-md-8  ">{link.title}</h4>
                                        <div ><p className=" cansat1p justify-content">{link.info1}</p></div>
                                            <ul className="cansat1ul">
                                                <li className=" cansat1li ">{link.info2}</li>
                                                <li className=" cansat1li justify-content">{link.info3}</li>
                                                <li className="cansat1li justify-content">{link.info4}</li>
                                                <li className="cansat1li justify-content">{link.info5}</li>
                                                <li className="cansat1li justify-content">{link.info6}</li>
                                                <li className="cansat1li justify-content">{link.info7}</li>

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
                    <Fade>
                    <div className = 'present-cansat'>
                        <div  data-aos="fade-right"><img className = "ploadImg" src={payloadImg}></img></div>
                        <div  data-aos="fade-left"><img className = "csatImg" src={csatImg}></img></div>
                    </div>
                    </Fade>
                    
                    <CSat21Slide/>
                    
                    <CSat21SlideBig/>
                    <br/><br/><br/><br/><br/>

    </div>
        

    )
}

export default Cansat3