import React from "react";
import { Col, Row } from "react-bootstrap"
import headspace1 from "../../assets/images/headspace1.jpeg"
import headspace from "../../assets/images/headspace.png"
import headspace_new from "../../assets/images/headspace_new.svg"
import headspace5 from "../../assets/images/headspace5.png"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return <div id="Home" style={{marginBottom: `20px`}}>
    {/* <Carousel prevLabel="" nextLabel="" fade="true"> 
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
</Carousel> */}
<Carousel autoPlay={false} 
          infiniteLoop 
          interval={10000}
          showStatus={false}
          showThumbs={false}
          transitionTime={1000}
          stopOnHover={false}>
                <div>
                    <img src={headspace_new} />
                    {/* <p className="legend">Legend 1</p> */}
                    <Row>
                      <Col sm={4}></Col>
                      <Col sm={2}>
                    <p className="CarouselText">Ceci est le contenu qui n'a pas vraiment un sens</p>

                      </Col>
                      <Col sm={4}></Col>
                    </Row>
                </div>
                <div>
                    <img src={headspace_new} />
                    {/* <p className="legend">Legend 1</p> */}
                    <Row>
                      <Col sm={4}></Col>
                      <Col sm={2}>
                    <p className="CarouselText">Ici c'est l'espace des développeurs qui peuvent tout</p>

                      </Col>
                      <Col sm={4}></Col>
                    </Row>
                </div>
                <div>
                    <img src={headspace_new} />
                    {/* <p className="legend">Legend 1</p> */}
                    <Row>
                      <Col sm={4}></Col>
                      <Col sm={2}>
                    <p className="CarouselText">Bah bah c'est juste la flemme de réaliser du louuurd</p>

                      </Col>
                      <Col sm={4}></Col>
                    </Row>
                </div>
                {/* <div>
                    <img src={headspace_new} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={headspace_new} />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
  </div>;
};

export default Home;
