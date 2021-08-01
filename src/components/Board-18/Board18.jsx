import './Board18.css'
import Anirudh from '../../assets/OurTeam/2018 circle/anirudh.png'
import Arunava from '../../assets/OurTeam/2018 circle/arunava.png'
import Baishayan from '../../assets/OurTeam/2018 circle/Baishayan Gupta.png'
import Karishnu from '../../assets/OurTeam/2018 circle/karishnu.png'
import Karthik from '../../assets/OurTeam/2018 circle/karthik.png'
import Preeth from '../../assets/OurTeam/2018 circle/preeth.png'
import Rajarshi from '../../assets/OurTeam/2018 circle/Rajarshi Bhattacharyya.png'
import Shashank from '../../assets/OurTeam/2018 circle/shashank.png'
import Shashwat from '../../assets/OurTeam/2018 circle/shashwat.png'
import Vaibhav from '../../assets/OurTeam/2018 circle/Vaibhav Sajnani.png'
import Zoom from 'react-reveal/Zoom'
import TeamMember from '../TeamMember/TeamMember.jsx'
const Board18 = () => {
    return(
        <div className = 'board-18'>
            <div className = 'board-year' >BOARD OF 2018</div>
            <div className = 'b18-grid-1'>
                <Zoom>
                <TeamMember linkedin="https://linkedin.com/in/shaswat-rajput/" image={Shashwat} name="Shaswat Rajput" position_primary = "TEAM CAPTAIN" position_secondary = ""/>
                <TeamMember linkedin="https://linkedin.com/in/shashanksamin/" image={Shashank} name="Shashank Amin" position_primary = "TEAM VICE CAPTAIN" position_secondary = "MECHANICAL LEAD"/>
                <TeamMember linkedin="https://linkedin.com/in/karishnu/" image={Karishnu} name="Karishnu Poddar" position_primary = "COMPUTER SCIENCE LEAD" position_secondary = ""/>
                <TeamMember linkedin="https://linkedin.com/in/rajarshi-bhattacharyya-a30036bb/" image={Rajarshi} name="Rajarshi Bhattacharyya" position_primary = "AVIONICS LEAD" position_secondary = ""/>
                <TeamMember linkedin = "https://linkedin.com/in/baishayan-gupta-b22a04121/" image={Baishayan} name="Baishayan Gupta" position_primary = "MANAGEMENT LEAD" position_secondary = "" />
                <TeamMember linkedin="https://linkedin.com/in/kartik-vijaykumar/" image={Karthik} name="Kartik Vijaykumar" position_primary = "MECHANICAL" position_secondary = ""/>
                <TeamMember linkedin="https://linkedin.com/in/anirudhkanthamraju/" image={Anirudh} name="KSP Anirudh" position_primary = "MECHANICAL" position_secondary = ""/>
                <TeamMember linkedin="https://linkedin.com/in/arunavabasu713/" image={Arunava} name="Arunava Basu" position_primary = "AVIONICS" position_secondary = ""/>
                </Zoom>
                
            </div>

            <div className = 'b18-grid-2'>
                <Zoom>
                <TeamMember linkedin="https://linkedin.com/in/preet-derasari/" image={Preeth} name="Preet Derasari" position_primary = "AVIONICS" position_secondary = ""/>
                <TeamMember linkedin = "https://linkedin.com/in/vaibhav-sajnani-b78257123/" image={Vaibhav} name="Vaibhav Sajnani" position_primary = "MANAGEMENT" position_secondary = "" />
                </Zoom>
            </div>
        </div>
    )
}

export default Board18