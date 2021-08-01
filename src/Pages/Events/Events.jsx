import EventOne from "../../sections/Eventspage/event.jsx";
import {useEffect} from 'react'

function EventsPage() {
    useEffect(  () =>{
        window.scrollTo(0,0);
    })
    return (
        <div className="new">
            
            <EventOne />
        </div>
    )
}

export default EventsPage;