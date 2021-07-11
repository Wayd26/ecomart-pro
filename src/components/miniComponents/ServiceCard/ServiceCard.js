import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./ServiceCard.css";
import headspace from "../../../assets/images/headspace.png"
import house from "../../../assets/images/house.svg"
import addToChart from "../../../assets/images/add-to-cart.svg"
import removeFromChart from "../../../assets/images/remove-from-cart.svg"


const ServiceCard = ({id, title, description, imgLink, addedToCart, handleAddToCart, handleRemoveFromCart, serviceAdded}) => {

  
  return <div className="ServiceCard">
    <div className="RoundedIcon">
<img src={house} style={{height: `45px`, width: `45px`}}/>

{/* <div>Atlanta</div> */}
    </div>
    <div className="ServiceTitle">{title}</div>
    <div className="ServiceDescription">{description}</div>
    {serviceAdded[id] === true ? 
    <Button onClick={() => handleRemoveFromCart(id)} className="AddToCartButtonS" >{"Enlever du panier"}
    <img src={removeFromChart} style={{height: `20px`, width: `20px`, marginLeft: `10px`}} /></Button>
    :
    <Button className="AddToCartButtonS" 
    onClick={() => handleAddToCart(id)}
    >{"Ajouter au panier"}
    <img src={addToChart} style={{height: `20px`, width: `20px`, marginLeft: `10px`}} /></Button>
    }
    {/* {serviceAdded[id] === true ? 
    <Button disabled className="AddToCartButton" >{"Ajouté"}</Button>
    :
    <Button className="AddToCartButton" onClick={() => handleAddToCart(id)}>{"Ajouter au panier"}</Button>} */}
  </div>
  // <Card style={{ width: '15rem', height: '15rem' }} className="mx-auto">
  // <Card.Img variant="right" 
  // style={{height:`5rem`}}
  // // src={imgLink} 
  // src={headspace} 
  // />
  // <Card.Body className="OverflowHidden">
  
  //   <Card.Title>{title}</Card.Title>
  //   <Card.Text>
  //     {description}
  //   </Card.Text>
    
  // </Card.Body>
  // {serviceAdded[id] === true ? 
  //   <Button disabled className="AddToCartButton" >{"Ajouté"}</Button>
  //   :
  //   <Button className="AddToCartButton" onClick={() => handleAddToCart(id)}>{"Ajouter au panier"}</Button>}
  //  </Card>
   ;
};

export default ServiceCard;
