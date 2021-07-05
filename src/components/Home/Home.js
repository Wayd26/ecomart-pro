import React from "react";
import { Carousel } from "react-bootstrap"
import headspace1 from "../../assets/images/headspace1.jpeg"
import headspace from "../../assets/images/headspace.png"
import headspace5 from "../../assets/images/headspace5.png"
import "./Home.css"

const Home = () => {
  return <div>
    <Carousel prevLabel="" nextLabel="" fade="true"> 
  <Carousel.Item interval={3000}>
    <img
      className="CarouselImg"
      src={headspace}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="CarouselImg"
      src={headspace}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      // className="d-block w-100"
      className="CarouselImg"
      src={headspace}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>;
};

export default Home;
