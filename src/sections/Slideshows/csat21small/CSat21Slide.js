import cs211 from '../../../assets/Slides/csat21/cansat_1.png'
import cs212 from '../../../assets/Slides/csat21/cansat_2.png'
import cs213 from '../../../assets/Slides/csat21/gui.png'
import cs214 from '../../../assets/Slides/csat21/PCB.png'
import cs215 from '../../../assets/Slides/csat21/Test1.png'
import cs216 from '../../../assets/Slides/csat21/Test2.png'
import { Carousel } from 'react-bootstrap'
import './CSat21Slide.css'
import Fade from 'react-reveal/Fade'

const CSat21Slide = () =>{
  return(
    <Fade>
    <div className ="my-csat-slide">
      <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs211}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs212}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs213}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs214}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs215}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs216}
      alt="First slide"
    />
  </Carousel.Item>
  
</Carousel>
    </div>
    </Fade>
  )
}
export default CSat21Slide






