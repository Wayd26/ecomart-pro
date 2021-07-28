import React, { useState, useEffect } from "react";
import { Row, Button, Modal } from "react-bootstrap"
import "./CartList.css"
import GetInTouchForm from "../GetInTouchForm/GetInTouchForm"
import { ToastProvider, useToasts } from 'react-toast-notifications';



const CartList = ({ servicesInCart, handleRemoveFromCart, OpenForm, catalogsInCart }) => {

  const [showFormModal, setShowFormModal] = useState(false);

  const { addToast } = useToasts();

  const setOpenFormToTrue = () => {
    OpenForm = true;
    console.log("object");
    console.log(OpenForm);
    setShowFormModal(true);
  }

  const setOpenFormTofalse = () => {
    setShowFormModal(false);
  }

  const sendCustomerInfo = () => {
    setShowFormModal(false);
    addToast('Envoyé avec succès', { appearance: 'success', placement: 'top-center', autoDismissTimeout: '2000', autoDismiss: true, });
  }


  return <div className="CartList">
    {showFormModal === true ? <GetInTouchForm sendCustomerInfo={sendCustomerInfo} showFormModal={showFormModal} setOpenFormTofalse={setOpenFormTofalse} /> : null}
    <p className="CartListTitle">Panier</p>

    <p>Services</p>
    {servicesInCart?.length !== 0 ?

      servicesInCart?.map((item, index) => {
        return (
          <p key={index} className="d-flex flex-nowrap justify-content-between px-3 CartElement mx-2">
            <span>{item.title}</span>
            <span style={{ height: `30px`, width: `30px`, cursor: `pointer` }}
              onClick={() => { handleRemoveFromCart(item.id) }}>x</span>
          </p>
        )
      })


      : <p>Aucun Service dans le panier</p>
    }

    <p>Catalogues</p>
    {catalogsInCart?.length !== 0 ?

      catalogsInCart?.map((item, index) => {
        return (
          <p key={index} className="d-flex flex-nowrap justify-content-between px-3 CartElement mx-2">
            <span>{item.label}</span>
            <span style={{ height: `30px`, width: `30px`, cursor: `pointer` }}
              onClick={() => { handleRemoveFromCart(item.id) }}>x</span>
          </p>
        )
      })


      : <p>Aucun Service dans le panier</p>
    }


    {(servicesInCart?.length !== 0 || catalogsInCart?.length !== 0) && <p><Button onClick={setOpenFormToTrue} className="validateCartButton">Valider</Button></p>}




  </div>;
};

export default CartList;
