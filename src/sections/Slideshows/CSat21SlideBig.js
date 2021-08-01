import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import cansat1 from "../../assets/Slides/csat21/cansat_1.png";
import cansat2 from "../../assets/Slides/csat21/cansat_2.png";
import cansat3 from "../../assets/Slides/csat21/gui.png";
import cansat4 from "../../assets/Slides/csat21/PCB.png";
import cansat5 from "../../assets/Slides/csat21/Test1.png";
import cansat6 from "../../assets/Slides/csat21/Test2.png";
import './slideBig.css'
import Fade from 'react-reveal/Fade'

export default class CSat21SlideBig extends Component {
  state = {
    goToSlide: 3,
    offsetRadius: 2,
    showNavigation: true,
    autplay:true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={cansat1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat4} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat5} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat6} alt="6" />
    },
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <Fade>
      <div className="my-big-slide" style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          autoplay={this.state.autoplay}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
          
          }}
        >
 
          
        </div>
      </div>
      </Fade>
    );
  }
}
