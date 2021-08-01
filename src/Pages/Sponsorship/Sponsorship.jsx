import SponsorshipPage from '../../sections/SponsorshipPage/SponsorshipPage.jsx'
import { useEffect } from 'react'

const Sponsorship = () => {
    useEffect(  () =>{
        window.scrollTo(0,0);
    })
    return(
        <div>
            
            <SponsorshipPage/>
        </div>
    )
}

export default Sponsorship