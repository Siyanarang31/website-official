import './TeamMember.css'
import {Button} from 'react-bootstrap'

const TeamMember = (props) => {
    return(
        <div className = 'member-card'>
            <img className ='member-image' src = {props.image}></img>
            <Button className = 'member-name' href={props.linkedin}><div>{props.name}</div></Button>
            <div className = 'member-position'>{props.position_primary}</div>
            <div className = 'member-position'>{props.position_secondary}</div>
            <div className = 'member-position'>{props.position_tertiary}</div>

        </div>
    )
}

export default TeamMember