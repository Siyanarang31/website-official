import TeamPage from '../../sections/TeamPage/TeamPage.jsx'
import { useEffect } from 'react';

const OurTeam = () => {
    useEffect(  () =>{
        window.scrollTo(0,0);
    })
    return(
        <div>
            <TeamPage/>           
        </div>
        
    )
}

export default OurTeam;