import './Board22.css'
import TeamMember from '../../components/TeamMember/TeamMember.jsx'
import Debal from '../../assets/OurTeam/2022 circle/debal.png'
import Eshan from '../../assets/OurTeam/2022 circle/eshan.png'
import Prarthana from '../../assets/OurTeam/2022 circle/prarthana.png'
import Sankalp from '../../assets/OurTeam/2022 circle/sankalp.png'
import Harsh from '../../assets/OurTeam/2022 circle/harsh.png'
import Chiran from '../../assets/OurTeam/2022 circle/chiran.png'
import Debdoot from '../../assets/OurTeam/2022 circle/debdoot.png'
import Pradyumna from '../../assets/OurTeam/2022 circle/pradyumna.png'
import Yashvi from '../../assets/OurTeam/2022 circle/yashvi.png'
import Zoom from 'react-reveal/Zoom';

const Board22 = () => {
    return(
        <div className = 'board-22'>
            <div className = 'board-year' >BOARD OF 2022</div>
            <div className = 'b22-grid-1'>
                <Zoom>
                <TeamMember linkedin = "https://linkedin.com/in/debal-goswami-2b97021a1/" image={Debal} name="Radha Debal Goswami" position_primary = "TEAM CAPTAIN" position_secondary = ""/>
                <TeamMember linkedin = "https://linkedin.com/in/sankalp-dua-21267818b/" image={Sankalp} name="Sankalp Dua" position_primary = "SA CUP LEAD" position_secondary = ""/>
                <TeamMember linkedin = "https://linkedin.com/in/harsh-desai-0107021a1/" image={Harsh} name="Harsh Desai" position_primary = "MECHANICAL LEAD" position_secondary = ""/>
                <TeamMember linkedin = "https://linkedin.com/in/eshan-sabhapandit-3017021a1/" image={Eshan} name="Eshan Sabhapandit" position_primary = "AVIONICS LEAD" position_secondary = "CANSAT LEAD"/>
                <TeamMember linkedin = "https://linkedin.com/in/prarthana-prabhakaran-2a07021a1/" image={Prarthana} name="Prarthana Prabhakaran" position_primary = "MANAGEMENT LEAD" position_secondary = ""/>
                <TeamMember linkedin = "" image={Chiran} name="Chiran Binnu Cherian" position_primary="MECHANICAL" />
                <TeamMember linkedin = "https://linkedin.com/in/debdootx/" image={Debdoot} name="Debdoot Ghosh" position_primary="MECHANICAL" />
                <TeamMember linkedin = "https://linkedin.com/in/pradyumna-kanthamraju-2b67391a3/" image={Pradyumna} name="KSV Pradyumna" position_primary="AVIONICS"/>
                </Zoom>
                
            </div>
            <Zoom>
            <div className="b22-grid-2"><TeamMember linkedin = "http://linkedin.com/in/yashvi-gaglani-36b7021a1" image={Yashvi} name="Yashvi Gaglani" position_primary="MANAGEMENT"/></div>
            </Zoom>
            

        </div>
    )
}

export default Board22