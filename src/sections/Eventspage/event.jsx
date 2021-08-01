import React,{useEffect} from 'react';
import './event.css';
import calender from "../../assets/Events/calender.png";
import img1 from "../../assets/Events/img1.png";
import img2 from "../../assets/Events/img2.png";
import img3 from "../../assets/Events/img3.png";
import img4 from "../../assets/Events/img4.png";
import img5 from "../../assets/Events/img5.png";
import Zoom from 'react-reveal/Zoom';
import AOS from "aos";
import "aos//dist/aos.css"

const EventOne = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return (
        
        <div className="yashvi-main-event">
            
            <div className='yashvi-events-heading'>
                <img src={calender} className="yashvi-cal-logo" alt='ts-logo'></img>
                <div className='yashvi-new-eve-title'>events dashboard</div>
            </div>
       
            <Zoom>
            <div className="yashvi-main-div">
                <div className="yashvi-my-sub-div">
                    <div className="yashvi-my-main-para">
                        <b>About: <br /></b>
                        Team Sammard is in collaboration with Bharat Scouts and Guide, Karnataka, in their ongoing project SATCAN, which was inaugurated on 19th June. SATCAN aims at imparting STEM education to school and college students by teaching them how to build a can-sized satellite through a series of weekly workshops. Over 160 students around the globe were selected for this event, who will learn and build their own miniature satellite, and launch it in the near future with the facilities provided to them.
                    </div>
                    <img src={img1} className="yashvi-eve-pic1" alt='picture1'></img>
                </div>
            </div>
            </Zoom>
        

            <div className='yashvi-prev-evehead'>previous events</div>
            {/* AFTER THIS */}
            <div className="yashvi-all-eves-container">
                <div className="yashvi-previous-event" >
                    <img src={img2} className="yashvi-eve-pic" alt="picture2" data-aos="flip-up"></img>
                    <div className="yashvi-event-paragraphs">
                        Team Sammard in collaboration with Star Labs organized an online session on “MARS - The next Giant Leap” where forty-five plus space enthusiasts from and outside VIT had joined to witness Mr. Sunny Kabrawala, CEO of Star Labs share a few facts about MARS. It was an interactive session where the audience flooded the speaker with questions varying from aerospike engines, Ingenuity helicopter in MARS to commercialisation of space and future colonization in MARS. The speaker also talked about his start-up’s future projects and contribution in the Indian space arena. The speaker was more than eager to address all the questions asked and answer them in layman terms for easy understanding. The session got extended by an hour due to enthusiasm of both the audience and the speaker. Overall, it was a very informative session and a very interactive one where in the end everyone gained something from it.
                    </div>
                </div>

                <div className="yashvi-previous-event right">
                    <div className="yashvi-event-paragraphs">
                        As World Space Week came to an end, we organized a Space Voyage discussing the mind-boggling and awe-striking topics of rocket stability, rocket projectile, and propulsion systems. Team Sammard is VIT's official rocketry team, and our experience and expertise in rocket science compelled us to share our knowledge. We discussed the various subsystems and mechanisms implemented in rockets to stabilize the flight and ensure that the rocket's flight trajectory remains unaltered. The discussion also included an overview of all the various types of propulsion systems. We used the Airmeet platform to conduct the event with over 50 students from all over the campus and from various other colleges attending the event. It marked a fitting end to the entire World Space Week by bringing like minded enthusiasts together.
                    </div>
                    <img src={img3} className="yashvi-eve-pic" alt="picture3"  data-aos="flip-up"></img>
                </div>

                <div className="yashvi-previous-event">
                    <img src={img4} className="yashvi-eve-pic" alt="picture4"  data-aos="flip-up"></img>
                    <div className="yashvi-event-paragraphs">
                        Astrophilia was an event organized by Team Sammard in coordination with Star Labs, Surat. It enabled the audience to indulge in an intense discussion on a plethora of topics pertaining to space exploration. It covered a wide range of topics starting from the engineering aspects of space science to the policies and factors that affect it. Expertized individuals from the industry provided valuable insights into the engineering aspects of departments like propulsion and avionics with real life work experience. The event was attended by over 50 individuals from various different colleges which provided a unique platform for all space enthusiasts to share as well as gain knowledge and interact with such like minded individuals.
                    </div>
                </div>

                <div className="yashvi-previous-event right">
                    <div className="yashvi-event-paragraphs">
                        The ISRO Space Exhibition was conducted in May of 2019 in order to celebrate the World Space Week. The team was invited by Gobi Arts and Science College, where the event was held to demonstrate the team’s various projects including the Cansat project and it’s various components. The event was attended by notable personalities from the Indian Space and Research Organization as well as the Chancellor of Vellore Institute of Technology. Imparting knowledge and experience to young budding students and spreading awareness to create a society of space enthusiasts has always been the aim of the team and this event provided us with the perfect opportunity to do so. Overall it was a prestigious oppurtinity for us and the event was a great success.
                    </div>
                    <img src={img5} className="yashvi-pic5" alt="picture5"  data-aos="flip-up"></img>
                </div>

                <br /><br /><br /><br /><br />
            </div>

        </div>

    )
}

export default EventOne