import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bgflower from '../assets/bg-flowers.jpg';
import bg from '../assets/bg-mn.jpg';


export default class CarouselBox extends Component {
  render() {
    return (

      <Carousel>
      
      <Carousel.Item>

        <img className="d-block w-100" height="50%" src={bgflower} alt="Background flower"/>
        <Carousel.Caption>
          <h3>Hey!!! This is my site on React</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>

        <img className="d-block w-100" height={650} src={bg} alt="Background mountain"/>
        <Carousel.Caption>
          <h3>This is second item of Carousel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>

      </Carousel.Item>


      </Carousel>

    )
  }
}
