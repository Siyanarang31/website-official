import Cansat3 from '../../sections/cansat3/Cansat3.jsx'
import { useEffect } from 'react'

const Cansat2021 = () => {
    useEffect(  () =>{
        window.scrollTo(0,0);
    })
    return(
        <div>
            
            <Cansat3/>
        </div>
    )
}
 
export default  Cansat2021