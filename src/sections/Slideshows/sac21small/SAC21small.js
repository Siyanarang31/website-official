import sac211 from '../../../assets/Slides/sac21/SAC1.png'
import sac212 from '../../../assets/Slides/sac21/SAC2.png'
import sac213 from '../../../assets/Slides/sac21/SAC3.png'
import sac214 from '../../../assets/Slides/sac21/SAC4.png'
import sac215 from '../../../assets/Slides/sac21/SAC5.png'
import sac216 from '../../../assets/Slides/sac21/SAC6.png'
import { Carousel } from 'react-bootstrap'
import './SAC21small.css'
import Fade from 'react-reveal/Fade'

const SAC21small = () =>{
  return(
    <div className ="my-csat-slide">
      <Fade>
      <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={sac211}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={sac212}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={sac213}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={sac214}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={sac215}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={sac216}
      alt="First slide"
    />
  </Carousel.Item>
  
</Carousel>
</Fade>
    </div>
  )
}
export default SAC21small






