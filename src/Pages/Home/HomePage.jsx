import { useEffect } from 'react'
import TitlePage from '../../sections/TitlePage/TitlePage'
import OurMission from '../../sections/Mission/OurMission.jsx'
  import HomeSlide from '../../sections/Slideshows/HomeSlide.js'
import './HomePage.css'

const HomePage = () => {
    useEffect(  () =>{
        window.scrollTo(0,0);
    })
    return(
        <div className = "myHome-page">
            <TitlePage/>
            
            <div  className="myHomeSlide-container">
            
            <HomeSlide />
            <br/><br/><br/>
            </div>
            
            
            <OurMission/>
        </div>
        
    )
}

export default HomePage
