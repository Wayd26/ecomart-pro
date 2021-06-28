import React from "react";
import { Row, Button } from "react-bootstrap"
import "./CartList.css"

const CartList = ({servicesInCart, handleRemoveFromCart, OpenForm}) => {

  const setOpenFormToTrue = () => {
    OpenForm = true
    console.log("object")
  }
  return <div className="CartList">
    <p className="CartListTitle">Panier</p>
    
    {servicesInCart.length !== 0 ? 
  
   servicesInCart.map((item, index) => {
      return (
            <p key={index} className="d-flex flex-nowrap justify-content-between px-3 CartElement mx-2">
            <span>{item.title}</span>
            <span style={{height: `30px`, width: `30px`, cursor: `pointer`}}
                  onClick={()=>{handleRemoveFromCart(item.id)}}>x</span>
          </p>
    )})
    
  
    : <p>Aucun Service dans le panier</p>
  }
  
  
  {servicesInCart.length !== 0 && <p><Button onClick={setOpenFormToTrue} className="validateCartButton">Valider</Button></p>}
    


    
  </div>;
};

export default CartList;
