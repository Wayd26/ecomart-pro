import React, { useEffect, useState } from "react";
import headspace1 from "../../assets/images/headspace1.jpeg"
import ServiceCard from "../miniComponents/ServiceCard/ServiceCard";
import CartList from "../miniComponents/CartList/CartList";
import { Row, Col } from "react-bootstrap"
import {services} from "../../data/services"

import { Card, Button } from "react-bootstrap";
import "../miniComponents/ServiceCard/ServiceCard.css";
import headspace from "../../assets/images/headspace.png"
import "./Services.css";





const Services = () => {

  const [servicesState, setServicesState] = useState(services);

  const [selectedServices, setSelectedServices] = useState({});

  const [serviceAdded, setServiceAdded] = useState({});

  const [servicesInCart, setServicesInCart] = useState([]);

  const [formAvailable, setFormAvailable] = useState(false);

  // const addToChart = (id) => {

  // }
  let OpenForm;

  const handleAddToCart = (id) => {
    console.log("lang Checked")
    var updatedServices = {...selectedServices};
    updatedServices[id] = ""
    setSelectedServices(updatedServices)

    var addedService = {...serviceAdded};
    addedService[id] = true ;
    setServiceAdded(addedService)
    console.log("selectedServices this ==> ", selectedServices)
    console.log("updatedServices ==> ", updatedServices)
    console.log("addedService ==> ", addedService)
    console.log("serviceAdded this ==> ", serviceAdded)
    let element = servicesState.find(o => o.id === id);
    console.log("serviceAdded final ==> ", element)
    // setSelectedServices({...selectedServices, element})
    servicesInCart.push(element)
    console.log("selectedServices final ==> ", selectedServices)
    console.log("Cart Contains ==> ", servicesInCart)

  }

  const handleRemoveFromCart = (id) => {
    console.log("lang UnChecked")

    var updatedServices = { ...selectedServices };
    updatedServices[id] = ""
    // setSelectedLanguages(updatedLanguages)
    delete selectedServices[id];
    var addedService = { ...serviceAdded };
    addedService[id] = false
    setServiceAdded(addedService)
    let element = servicesState.find(o => o.id === id);
    servicesInCart.pop(element)
  }
 
  useEffect(() => {
    console.log(services)
  } ,[])
 
  useEffect(() => {
setFormAvailable(OpenForm)
console.log("formAvailablec---> ", formAvailable)
  } ,[formAvailable])
  return <div className="mx-auto">
    <Row className="p-5">
   <Col 
  //  sm={9}
   >
    <Row className="mx-auto ScrollEffect">
      
      {servicesState ? servicesState.map((service, key) => {
        return <Col key={key} sm={4} className="mb-3">
        <ServiceCard 
        // addToCart={addToChart} 
        id={service.id}
        title={service.title} 
        description={service.description} 
        imgLink={service.img}
        addedToCart={service.addedToCart}
        handleRemoveFromCart={()=>{handleRemoveFromCart(service.id)}}
        handleAddToCart={()=>{handleAddToCart(service.id)}}
        serviceAdded={serviceAdded} />

{/* Start ServiceCard */}

{/* <Card style={{ width: '15rem', height: '15rem' }} className="mx-auto">
  <Card.Img variant="right" 
  style={{height:`5rem`}}
 
  src={headspace} 
  />
  <Card.Body className="OverflowHidden">
  
    <Card.Title>{service.title}</Card.Title>
    <Card.Text>
      {service.description}
    </Card.Text>
    
  </Card.Body>
     {serviceAdded[service.id] === true ? 
    <Button disabled className="AddToCartButton" >{"Ajouté"}</Button>
    :
    <Button className="AddToCartButton" onClick={() => handleAddToCart(service.id)}>{"Ajouter au panier"}</Button>
                                                    }
    
    
</Card> */}

{/* End ServiceCard */}





        </Col>
      }) : <div>Aucun Service Disponible</div>}
    
    
    </Row>
    </Col>
    {servicesInCart.length !== 0 && 
    <Col sm={3} style={{}}>
      <CartList servicesInCart={servicesInCart} 
                handleRemoveFromCart={handleRemoveFromCart}
                OpenForm={OpenForm}/>
    </Col> 
}
      </Row>
    </div>;
};

export default Services;
