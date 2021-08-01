import './SponsorshipPage.css'
import Ansys from '../../assets/Sponsorship/ANSYS.png'
import EPsoft from '../../assets/Sponsorship/EPSoft.jpg'
import Fabheads from '../../assets/Sponsorship/FABHEADS.png'
import Loanswall from '../../assets/Sponsorship/Loanswall.png'
import Simscale from '../../assets/Sponsorship/SIMSCALE.png'
import Solidworks from '../../assets/Sponsorship/SolidWorks.png'
import Starlabs from '../../assets/Sponsorship/StarLabs.png'
import Vit from '../../assets/Sponsorship/VIT.png'

import Zoom from 'react-reveal/Zoom'
const SponsorshipPage = () => {
    return(
        <div className = 'sponsor-page'>
            <div className="container-fluid">
            <div className = 'spon-heading'>Our sponsors and collaborators</div>
            <div className = 'spon-grid-1'>
                <Zoom>
                <div className = 'spon-logos'><a href="https://www.ansys.com/en-in"><img src = {Ansys}></img></a></div>
                <div className = 'spon-logos'><a href="https://www.epsoftinc.com"><img src = {EPsoft}></img></a></div>
                <div className = 'spon-logos'><a href="https://www.starlabsurat.com"><img src= {Starlabs}/></a></div>
                <div className = 'spon-logos-loans'><a href="https://www.loanswall.com"><img src = {Loanswall}></img></a></div>
                <div className = 'spon-logos'><a href="https://www.solidworks.com"><img src = {Solidworks}></img></a></div>
                <div className = 'spon-logos'><a href="https://www.simscale.com"><img src = {Simscale}></img></a></div>
                </Zoom>
            </div>

            <div className = 'spon-grid-2'>
                <Zoom>
                <div className = 'star-spon-logo'><a href="https://www.vit.ac.in"><img src= {Vit}/></a></div>
                
                </Zoom>
            </div>
            <br/><br/><br/><br/><br/><br/>

            {/* <div className = 'sponsor-us'>
                <div className = 'spon-us-heading'>HOW CAN YOU HELP US?</div>
                <div className = 'spon-us-grid'>
                    <div className = 'spon-us-cards'>
                        <div className = 'spon-card-heading'>SPONSOR US</div>
                    </div>
                    <div className = 'spon-us-cards'>
                        <div className = 'spon-card-heading'>DONATE US</div>
                    </div>
                </div>
            </div> */}
        </div>
        </div>
    )
}

export default SponsorshipPage