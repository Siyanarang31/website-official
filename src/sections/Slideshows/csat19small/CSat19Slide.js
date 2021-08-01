import cs191 from '../../../assets/Slides/csat19/123.jpeg'
import cs192 from '../../../assets/Slides/csat19/234.jpeg'
import cs193 from '../../../assets/Slides/csat19/2018+2019 project.jpg'
import cs194 from '../../../assets/Slides/csat19/edited_2.png'
import cs195 from '../../../assets/Slides/csat19/edited_3.png'
import cs196 from '../../../assets/Slides/csat19/edited.png'
import { Carousel } from 'react-bootstrap'
import './CSat19Slide.css'
import Fade from 'react-reveal/Fade'

const CSat19Slide = () =>{
  return(
    <Fade>
    <div className ="my-csat-slide">
      <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs191}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs192}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs193}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs194}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs195}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs196}
      alt="First slide"
    />
  </Carousel.Item>
  
</Carousel>
    </div>
    </Fade>
  )
}
export default CSat19Slide






