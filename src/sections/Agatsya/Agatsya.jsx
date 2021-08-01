import React, {useEffect} from 'react'
import './Agatsya.css'
import agatsya_pic2 from '../../assets/SAC2021/Agatsya_pic2.png'
import subs1 from '../../assets/SAC2021/subs1.png'
import subs2 from '../../assets/SAC2021/subs2.png'
import subs3 from '../../assets/SAC2021/subs3.png'
import subs4 from '../../assets/SAC2021/subs4.png'
import pimac from '../../assets/SAC2021/pimac.png'
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import SAC21small from '../../sections/Slideshows/sac21small/SAC21small.js'
import SAC21SlideBig from '../../sections/Slideshows/SAC21SlideBig.js'
import AOS from "aos";
import "aos//dist/aos.css"
const subArray = [
    {
        id : 1,
        title : "Aerostructures",
        image : subs1,
        desc1 : "Aerostructures comprise the designing and manufacturing of the main rocket body. It is an essential aspect of rocketry since it determines the structural integrity and topology of the various subsystems.",
        desc2 : "The workflow of this department consists of CAD modelling, extensive structural dynamic and static analyses, design optimization, composite manufacturing, CNC machining and assembly of the airframe.",
        desc3 : ""
    },

    {
        id : 2,
        title : "Aerodynamics",
        image : subs2,
        desc1 : "An aerodynamics engineer optimizes the rocket's profile to ensure better flight performance by analyzing the flow of air around the rocket. The department tries to ensure that the rocket endures maximum aerodynamic loads aiding to a flawless flight profile.",
        desc2 : "They predict the rocket's flight path and design the efficient subsystems required to help it to reach the desired apogee and allow us to recover the rocket successfully.",
        desc3 : ""
    },

    {
        id : 3,
        title : "Avionics",
        image : subs3,
        desc1 : "The avionics system includes the electronics and communication systems associated with the rocket. It acts as the functional brain of the rocket that gathers atmospheric data and measures rocket parameters using sensors, uses them to calculate altitude and orientation, and relay the data to the ground station.",
        desc2 : "Sensor fusion techniques and control algorithms are implemented using microcontrollers to facilitate in-flight stability of the rocket.",
        desc3 : "",
    },

    {
        id : 4,
        title : "Payload",
        image : subs4,
        desc1 : "The payload is the carrying capacity of a rocket. It can be either functional or non functional. Functional payloads generally include satellites and space probes that are carried to certain altitudes by the rocket. They are intended to perform scientific experimentation or technical demonstration. ",
        desc2 : "Our rocket Agatsya carries a functional payload that we named PiMAC which demonstrates a pitch correction technology developed by the team."
    }
]


const renderSubs = (subsystem) => {
    return(
        <div key = {subsystem.id}>
            <SubsCard
                title = {subsystem.title}
                image = {subsystem.image}
                desc1 = {subsystem.desc1}
                desc2 = {subsystem.desc2}
                desc3 = {subsystem.desc3}
            />
        </div>
    )
}

const SubsCard = (props) => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(

        <div className = 'subs-card' data-aos="fade-up">
            <div className = 'subs-head'>{props.title}</div>
            <Fade><div className = 'subs-img'><img src = {props.image}></img></div></Fade>
            <div className = 'subs-content'>
                <div className = 'subs-desc'>{props.desc1}</div><br/>
                <div className = 'subs-desc'>{props.desc2}</div><br/>
                <div className = 'subs-desc'>{props.desc3}</div><br/>
            </div>
            
        </div>
    )
}

const Agatsya = () => {
    return(
        <div className = 'Agatsya'>
            {/* AGASYTA MODEL_--------------------- */}
            <div className = 'agat-head'>agatsya</div>
            <div className = 'agat-grid'>
                <div className = 'agat-detail-card'>
                <div className = 'agat-details'>
                    <div className = 'agat-params'>
                        <div className = 'myParam'>Height</div>
                        <div className = 'myParam-value'> 9.7ft</div>
                    </div>

                    <div className = 'agat-params'>
                        <div className = 'myParam'>Diameter</div>
                        <div className = 'myParam-value'> 6 in</div>
                    </div>

                    <div className = 'agat-params'>
                        <div className = 'myParam'>Mass</div>
                        <div className = 'myParam-value'>24.69 kg</div>
                    </div>

                    <div className = 'agat-params'>
                        <div className = 'myParam'>Max Thrust</div>
                        <div className = 'myParam-value'>6805.2 N</div>
                    </div>

                    <div className = 'agat-params'>
                        <div className = 'myParam'>Max Velocity</div>
                        <div className = 'myParam-value'>988 km/h</div>
                    </div>

                    <div className = 'agat-params'>
                        <div className = 'myParam'>Target Apogee</div>
                        <div className = 'myParam-value'>10,000 ft</div>
                    </div>

                    <div className = 'agat-params'>
                        <div className = 'myParam'>Payload Mass</div>
                        <div className = 'myParam-value'>4.08 kg</div>
                    </div>
                </div>
                </div>
                
                <div className = 'agat-model'>
                    <Fade><img src = {agatsya_pic2}></img></Fade>
                </div>
            </div>


            {/* AGATSYA SUBSYTEMS */}
            <div className = 'agat-head'>subsytems</div>
            
            
            <div className = 'agat-subs-grid'>
                {subArray.map(renderSubs)}    
            </div>


            {/* PIMAC------------------------ */}
            <div className = 'pimac-head'>pimac</div>

            <div className = 'pimac'>
                <div className = 'pimac-desc'>
                The payload carried by Agatsya is named PiMAC which stands for Pitch Measurement And Control. PiMAC comprises an Inertial Measurement Unit (IMU), a microcontroller and a gimbal. The purpose of PiMAC is to measure the rocket’s pitch angle using the IMU as it ascends and make corrections to it based on a predefined trajectory. The corrections are made on a custom gimbal that is set up inside the payload structure which doesn’t affect the actual rocket’s flight. The working of PiMAC can be extended to landing of the rocket contributing to the Thrust Vector Control (TVC) technology implemented in landing rockets. PiMAC weighs 4.08 kg (9 lbs). 
                </div>
                <div className = 'pimac-pic'>
                    <Zoom><img src = {pimac}></img></Zoom>
                </div>

            </div>
            
            <SAC21small/>
            <SAC21SlideBig/>
            <br/><br/><br/><br/><br/>

        </div>
    )
}

export default Agatsya