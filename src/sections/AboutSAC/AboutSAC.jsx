import './AboutSAC.css'
import React,{ useEffect} from 'react';
import sac_pic1 from '../../assets/SAC2021/sac_pic1.png'
import sac_pic2 from '../../assets/SAC2021/sac_pic2.png'
import agatsya_pic1 from '../../assets/SAC2021/Agatsya_pic1.png'
import AOS from "aos";
import "aos//dist/aos.css"

const SAC21 = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return (
        <div className='sac-21'>
            <div className='sac21-heading'>sa cup 2021 - agatsya</div>
            
            <div className='sac21-about'>

                <div className='flex-one'>

                    <div className='sac21-abt-content'>
                    <div className='sac21-abt-head'>ABOUT SA CUP</div>
                        <div className='sac21-abt-text'>ESRA hosts the Spaceport America Cup (SA Cup) for student rocketry teams from around the world. Competing teams are challenged to design a sounding rocket that can reach altitudes of either 10,000 feet or 30,000 feet above ground, carrying a payload of mass over 4 kg (8.8 lbs). Multistage rockets and all chemical propulsion types (solid, liquid, and hybrid) are allowed.</div>
                    </div>

                    <div className='sac21-abt-img'>
                        <img src={sac_pic1} data-aos="flip-up"></img>
                    </div>

                </div>

                <div className='flex-two'>

                    <div className='sac21-abt-img'>
                        <img src={sac_pic2} data-aos="flip-up"></img>
                    </div>

                    <div className='sac21-abt-content'>
                        <div className='sac21-abt-text'>Over 1,700 students and faculty will gather in Southern New Mexico for the annual Spaceport America Cup. Drawn by the opportunity to collaborate and compete at a world-class spaceport facility, they represent the best and brightest from more than 200 institutions located all across the world.</div>
                        <div className='sac21-abt-text'>Visit <a target="_blank" href="https://www.soundingrocket.org">https://www.soundingrocket.org</a> for more information. </div>
                    </div>

                </div>   

                <div className='flex-three'>

                    <div className='sac21-abt-content'>
                        <div className='sac21-abt-head'>AGATSYA - OUR FIRST SOUNDING ROCKET</div>
                        <div className='sac21-abt-text'>For Team Sammard’s maiden attempt at the Spaceport America Cup in 2021 edition, our rocket Agatsya competed in the 10,000 feet COTS (Commercial Off The Shelf) category of the competition. Agatsya carries a payload named PiMAC to compete in the subsidiary event SDL payload challenge. </div>
                    </div>

                    <div className='sac21-abt-img'>
                        <img src={agatsya_pic1} data-aos="flip-up"></img>
                    </div>
                 </div>   

            </div>

        </div>
    )
}

export default SAC21