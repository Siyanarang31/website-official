import './Legacy.css'
import React,{useEffect} from 'react';
import Timeline from '../../assets/Achievements/timeline.png'
import one from '../../assets/Achievements/teamPics/1.jpeg'
import two from '../../assets/Achievements/teamPics/2.jpeg'
import third from '../../assets/Achievements/teamPics/3.JPG'
import four from '../../assets/Achievements/teamPics/4.jpg'
import Zoom from 'react-reveal/Zoom'
import AOS from "aos";
import "aos//dist/aos.css"

const Legacy = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
        <div className = 'our-legacy'>
            <div className = 'container-fluid'>
                <div className = 'legacy-heading'>our legacy</div>
                <div className = 'legacy-timeline' data-aos="fade-down"><img src= {Timeline}></img></div>
                
                <div className='ourl-backimages'>
                <Zoom>
                <div className = 'ourl-img1'><img src={one}></img></div>
                <div className = 'ourl-img2'><img src={two}></img></div>
                </Zoom>
                <Zoom>
                <div className = 'ourl-img3'><img src={third}></img></div>
                <div className = 'ourl-img4'><img src={four}></img></div>
                </Zoom>
                </div>
               
            </div>
            
        </div>
    )
}

export default Legacy