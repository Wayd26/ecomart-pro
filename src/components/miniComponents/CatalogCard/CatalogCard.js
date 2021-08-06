import React from "react";
import "./CatalogCard.css"
import { Row, Col, Carousel, Button } from "react-bootstrap"
import Left from "../../../assets/icons/arrow-left.svg"
import Right from "../../../assets/icons/arrow-right.svg"
import headspace from "../../../assets/images/headspace.png"
// import headspace1 from "../../../assets/images/headspace1.png"
import addToChart from "../../../assets/images/add-to-cart.svg"
import removeFromChart from "../../../assets/images/remove-from-cart.svg"
import img1 from "../../../assets/images/img1.jpg"
import img2 from "../../../assets/images/img2.jpg"
import img3 from "../../../assets/images/img3.jpg"
import img4 from "../../../assets/images/img4.jpg"
import img5 from "../../../assets/images/img5.jpg"
import img6 from "../../../assets/images/img6.jpg"




const CatalogCard = ({ id, label, description, images, catalogAdded, handleAddToCart, handleRemoveFromCart }) => {
  return <div
    className={catalogAdded[id] === true ? "CatalogCardSelected" : "CatalogCard"}
  >
    <Row className="d-flex flex-nowrap ">

      <Carousel fade transition={1000} variant="dark" prevLabel="" nextLabel="" slide={true} >
        <Carousel.Item className="CatImage" interval={999999999999}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
      <Row >Nulla vitae elit libero, a pharetra augue mollis interdum.</Row > */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CatImage" interval={999999999999}>
          <img
            className="d-block w-100"
            src={img3}
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
            src={img5}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
      <Row>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Row> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CatImage" interval={9999999999}>
          <iframe width="" height="200"
            src="https://www.youtube.com/embed/9YffrCViTVk?controls=1">
          </iframe>
          <Carousel.Caption>         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CatImage" interval={9999999999}>
          <iframe width="" height="200"
            src="https://www.youtube.com/embed/dFUYsbbf6U0?controls=1">
          </iframe>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CatImage" interval={9999999999}>
          <iframe width="" height="200"
            src="https://www.youtube.com/embed/kiyi-C7NQrQ?controls=1">
          </iframe>
          <Carousel.Caption>
           
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
        <Button onClick={() => handleRemoveFromCart(id)} className="AddToCartButtonSelectedC" >{"Enlever du panier"}
          <img src={removeFromChart} style={{ height: `20px`, width: `20px`, marginLeft: `10px` }} /></Button>
        :
        <Button className="AddToCartButton"
          onClick={() => handleAddToCart(id)}
        >{"Ajouter au panier"}
          <img src={addToChart} style={{ height: `20px`, width: `20px`, marginLeft: `10px` }} /></Button>
      }
    </Row>
  </div>;
};

export default CatalogCard;
