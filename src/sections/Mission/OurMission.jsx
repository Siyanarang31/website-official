import './OurMission.css'
import Zoom from 'react-reveal/Zoom'
const OurMission = () => {
    return(
        <div className = 'our-mission'>
            <div className = 'ourm-card'>
                <div className = 'ourm-head'>our mission</div>
                <div className = 'ourm-grid'>
                    <div className = 'ourm-video'>
                        <Zoom><iframe className= 'respon-video' src="https://www.youtube.com/embed/R1q6I-2obDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Zoom>
                    </div>
                    <div className = 'ourm-text'>Team Sammard has always helped its members materialise their passion for reaching the skies, and cultivate the zeal of engineering in them. We, a group of space enthusiasts, after tasting success in American Astronautical Society (AAS) and NASA's annual rocket science competition CANSAT, have laid our eyes on the prestigious SpacePort America Cup, an annual intercollegiate sounding rocket competition. The team is now capable of delivering launch vehicles, carrying experimental payloads up to an altitude of 10,000 feet. We also conduct various events focused at educating young minds in the art of engineering. At Team Sammard, it's not just about shooting up to the skies, it's about igniting a spark in every engineer's mind.</div>
                </div>
            </div>
        </div>
        
    )
}

export default OurMission