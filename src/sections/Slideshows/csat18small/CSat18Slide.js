import cs181 from '../../../assets/Slides/csat18/7(1).jpg'
import cs182 from '../../../assets/Slides/csat18/edited_1.png'
import cs183 from '../../../assets/Slides/csat18/edited_2.png'
import cs184 from '../../../assets/Slides/csat18/edited_3.png'
import cs185 from '../../../assets/Slides/csat18/Image3.jpg'
import cs186 from '../../../assets/Slides/csat18/IMG_20191005_094851.jpg'
import { Carousel } from 'react-bootstrap'
import './CSat18Slide.css'
import Fade from 'react-reveal/Fade'

const CSat18Slide = () =>{
  return(
    <Fade>
    <div className ="my-csat-slide">
      <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs181}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs182}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs183}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs184}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs185}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={cs186}
      alt="First slide"
    />
  </Carousel.Item>
  
</Carousel>
    </div>
    </Fade>
  )
}
export default CSat18Slide






