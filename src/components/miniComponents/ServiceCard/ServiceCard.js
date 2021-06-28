import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./ServiceCard.css";
import headspace from "../../../assets/images/headspace.png"


const ServiceCard = ({id, title, description, imgLink, addedToCart, handleAddToCart, handleRemoveFromCart, serviceAdded}) => {

  const addToChart = (id) => {

  }
  return <Card style={{ width: '15rem', height: '15rem' }} className="mx-auto">
  <Card.Img variant="right" 
  style={{height:`5rem`}}
  // src={imgLink} 
  src={headspace} 
  />
  <Card.Body className="OverflowHidden">
  
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    
  </Card.Body>
  {serviceAdded[id] === true ? 
    <Button disabled className="AddToCartButton" >{"Ajouté"}</Button>
    :
    <Button className="AddToCartButton" onClick={() => handleAddToCart(id)}>{"Ajouter au panier"}</Button>}
   </Card>;
};

export default ServiceCard;
