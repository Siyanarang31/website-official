import './SACup2021.css'
import AboutSAC from '../../sections/AboutSAC/AboutSAC.jsx'
import Agatsya from '../../sections/Agatsya/Agatsya.jsx'
import { useEffect } from 'react'

const SACup2021 = () => {
    useEffect(  () =>{
        window.scrollTo(0,0);
    })
    return(
        <div className = 'sac2021-page'>
            
            <AboutSAC/>
            <Agatsya/>
        </div>
    )
}

export default SACup2021