import Cansat1 from '../../sections/cansat1/Cansat1.jsx'
import { useEffect } from 'react'

const Cansat2018 = () => {
    useEffect(  () =>{
        window.scrollTo(0,0);
    })
    return(
        <div>
           
            <Cansat1/>
        </div>
    )
}
 
export default  Cansat2018