import './Board19.css'
import Bharadwaj from '../../assets/OurTeam/2019 circle/bharadwaj.png'
import Adarsh from '../../assets/OurTeam/2019 circle/adarsh.png'
import Ashwin from '../../assets/OurTeam/2019 circle/ashwin.png'
import Deepshika from '../../assets/OurTeam/2019 circle/deepshika.png'
import Godwyn from '../../assets/OurTeam/2019 circle/godwyn.png'
import Karthik from '../../assets/OurTeam/2019 circle/karthik.png'
import Zoom from 'react-reveal/Zoom'
import TeamMember from '../TeamMember/TeamMember.jsx'

const Board19 = () => {
    return(
        <div className = 'board-19'>
            <div className = 'board-year' >BOARD OF 2019</div>
            <div className = 'b19-grid-1'>
                <Zoom>
                <TeamMember linkedin="https://linkedin.com/in/bharadwaj98/" image={Bharadwaj} name="Bharadwaj Tallapragada" position_primary = "TEAM CAPTAIN" position_secondary = "MECHANICAL LEAD"/>
                <TeamMember linkedin="https://linkedin.com/in/god7wyn/" image={Godwyn} name="Godwyn James William" position_primary = "TEAM VICE CAPTAIN" position_secondary = "COMPUTER SCIENCE LEAD"/>
                <TeamMember linkedin="https://linkedin.com/in/adharshvenkatachalam/" image={Adarsh} name="Adarsh Venkatachalam" position_primary = "AVIONICS LEAD" position_secondary = ""/>
                <TeamMember linkedin="" image={Karthik} name="Karthik Srinivas" position_primary = "MANAGEMENT LEAD" position_secondary = "" />
                </Zoom>
                
                
            </div>

            <div className = 'b19-grid-2'>
                <Zoom>
                <TeamMember linkedin="https://linkedin.com/in/deepshikhakumari412/" image={Deepshika} name="Deepshikha Kumari" position_primary = "AVIONICS" position_secondary = ""/>
                <TeamMember linkedin="https://linkedin.com/in/ashwinsooryaprakash/" image={Ashwin} name="Ashwin Soorya Prakash" position_primary = "AVIONICS" position_secondary = "" />
                </Zoom>
                
            </div>


        </div>
    )
}


export default Board19
