import { Carousel } from "react-bootstrap";
import team1 from '../../assets/Slides/home/team1.jpg';
import team2 from '../../assets/Slides/home/team2.jpg';
import team3 from '../../assets/Slides/home/team3.jpg';
import Zoom from 'react-reveal/Zoom'
import './HomeSlide.css'

const HomeSlide = () =>{
  return(
    <div className ="my-home-slide">
     <Zoom> <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={team1}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={team2}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={team3}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Zoom>
    </div>
  )
}
export default HomeSlide