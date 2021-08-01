import NavigationBar from '../../components/Navbar/NavigationBar.jsx'
import Legacy from '../../sections/Legacy/Legacy.jsx'
import ContactFooter from '../../components/ContactFooter/ContactFooter.jsx'
import { useEffect } from 'react'
const Achievements = () => {
    useEffect(  () =>{
        window.scrollTo(0,0);
    })
    return(
        <div>
            
            <Legacy/>
        </div>
    )
}
 
export default Achievements