import React, {useEffect} from 'react'
import "./TitlePage.css"
import AOS from "aos";
import "aos//dist/aos.css"

// const TitlePage = () => {
//     return(
//         <div className = "title-page">
            
//             <div className = 'title-container'>
//                 <div className = 'tpage-staticblock-left'></div>
//                 <div className="title">
//                         <Zoom bottom>
//                         <div className="team-name">Team</div>
//                         <div className="team-name">Sammard</div>
//                         <div className="title-text">GIVE YOUR DREAMS SOME SPACE TO UNFOLD</div>
//                         </Zoom>
//                 </div>
//             </div>            
//         </div>
//     )
// }

const TitlePage = () =>{
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
        <div className = "title-page">
            <div className = "title-grid">
                <div className="title-left">
                    <div className = "title-content">
                    <div className="title-name" data-aos="fade-left" >team sammard</div>
                    <br/>
                    <div className="team-caption" data-aos="fade-right">GIVE YOUR DREAMS SOME SPACE TO UNFOLD</div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default TitlePage