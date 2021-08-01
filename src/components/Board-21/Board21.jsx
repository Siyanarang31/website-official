import './Board21.css'
import Deeraj from '../../assets/OurTeam/2021 circle/deeraj.png'
import Lakshman from '../../assets/OurTeam/2021 circle/lakshman.png'
import Mohan from '../../assets/OurTeam/2021 circle/mohan.png'
import Pranshu from '../../assets/OurTeam/2021 circle/pranshu.png'
import Soham from '../../assets/OurTeam/2021 circle/soham.png'
import Srinija from '../../assets/OurTeam/2021 circle/srinija.png'
import Zoom from 'react-reveal/Zoom'
import TeamMember from '../TeamMember/TeamMember.jsx'

const Board21 = () => {
    return(
        <div className = 'board-21'>
            <div className = 'board-year' >BOARD OF 2021</div>
            <div className = 'b21-grid-1'>
                <Zoom>
                <TeamMember linkedin = "https://linkedin.com/in/deerajkumar/" image={Deeraj} name="Deerajkumar Parthipan" position_primary = "TEAM CAPTAIN" position_secondary = "STRUCTURES LEAD"/>   
                <TeamMember linkedin = "https://linkedin.com/in/pranshu-aggarwal/" image={Pranshu} name="Pranshu Aggarwal" position_primary = "TEAM VICE CAPTAIN" position_secondary = "MANAGEMENT LEAD" position_tertiary = 'AERODYNAMICS LEAD'/>
                <TeamMember linkedin = "https://linkedin.com/in/srinija-ramichetty/" image={Srinija} name="Srinija Ramichetty" position_primary = "AVIONICS LEAD" position_secondary = "COMPUTER SCIENCE LEAD"/>
                <TeamMember linkedin = "https://linkedin.com/in/lakshman-sivakumar-vijay/" image={Lakshman} name="Lakshman Vijay" position_primary = "PROPULSION LEAD" position_secondary = "" />
                </Zoom>
                
            </div>

            <div className = 'b21-grid-2'>
                <Zoom>
                <TeamMember linkedin="https://linkedin.com/in/soham-korgaonkar-72506017a" image={Soham} name="Soham Korgaonkar" position_primary = "AVIONICS" position_secondary = ""/>
                <TeamMember linkedin="https://www.linkedin.com/in/mohan-raj-707946207/" image={Mohan} name="Mohan Raj" position_primary = "MECHANICAL" position_secondary = "" />
                </Zoom>
                    
            </div>


        </div>
    )
}


export default Board21
