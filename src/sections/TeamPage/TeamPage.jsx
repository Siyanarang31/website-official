import './TeamPage.css'
import Board22 from '../../components/Board-22/Board22.jsx'
import Board21 from '../../components/Board-21/Board21.jsx'
import Board19 from '../../components/Board-19/Board19.jsx'
import Board18 from '../../components/Board-18/Board18.jsx'

const TeamPage = () => {
    return(
        <div className = 'team-page'>
           
            <div className = 'ourt-heading'>our team</div>


            {/* ------------------BORAD OF 2022----------------- */}
            <Board22/>
            {/* ------------------BORAD OF 2021----------------- */}
            <Board21/>
            {/* ------------------BORAD OF 2019----------------- */}
            <Board19/>
            {/* ------------------BORAD OF 2018----------------- */}
            <Board18/>
        </div>
    )
}

export default TeamPage