import React from "react";
import "./CatalogCard.css"
import {Row, Col, Carousel, Button} from "react-bootstrap"
import Left from "../../../assets/icons/arrow-left.svg"
import Right from "../../../assets/icons/arrow-right.svg"
import headspace from "../../../assets/images/headspace.png"
// import headspace1 from "../../../assets/images/headspace1.png"


const CatalogCard = ({id, label, description, images, catalogAdded, handleAddToCart, handleRemoveFromCart}) => {
  return <div
  className="CatalogCard"
  >
    <Row className="d-flex flex-nowrap ">

    <Carousel variant="dark" prevLabel="" nextLabel="" slide={true} >
  <Carousel.Item className="CatImage" interval={9999999999}>
    <img
      className="d-block w-100"
      src={headspace}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h5>First slide label</h5>
      <Row >Nulla vitae elit libero, a pharetra augue mollis interdum.</Row > */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="CatImage" interval={9999999999}>
    <img
      className="d-block w-100"
      src={headspace}
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h5>Second slide label</h5>
      <Row>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Row> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="CatImage" interval={9999999999}>
    <img
      className="d-block w-100"
      src={headspace}
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h5>Third slide label</h5>
      <Row>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</Row> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      {/* <Col sm={1}><img className="BackNextIcon" src={Left}  /></Col>
      <Col><img src={headspace} style={{height: `50px`, width: `100%`}}/></Col>
      <Col sm={1}><img className="BackNextIcon" src={Right}/></Col> */}
    </Row>

    {/* <Row className="mx-auto w-100 d-flex flex-nowrap p-3 Label">{label}</Row> */}
    <Row className="OverflowHidden Description">{description}</Row>
    <Row>
    {catalogAdded[id] === true ? 
    <Button disabled className="AddToCartButton" >{"Ajouté"}</Button>
    :
    <Button className="AddToCartButton" onClick={() => handleAddToCart(id)}>{"Ajouter au panier"}</Button>
    }
    </Row>
  </div>;
};

export default CatalogCard;
