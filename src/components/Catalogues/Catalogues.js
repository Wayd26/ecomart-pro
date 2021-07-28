import React, { useEffect, useState } from "react";
import "./Catalogues.css"
import { Row, Col } from "react-bootstrap"
import CatalogCard from "../miniComponents/CatalogCard/CatalogCard"
import CartList from "../miniComponents/CartList/CartList";
import { catalogs } from "../../data/catalogs"
import { AiFillHome } from 'react-icons/ai'
import { TiBook } from 'react-icons/ti'
import { RiCustomerService2Line } from 'react-icons/ri'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as actions from "../../redux/actions/index"



const Catalogues = () => {

  const dispatch = useDispatch();
  const states = useSelector(state => state, shallowEqual);


  const [catalogsState, setCatalogsState] = useState(catalogs);
  const [selectedCatalogs, setSelectedCatalogs] = useState({});
  const [catalogAdded, setCatalogAdded] = useState({});
  const [catalogsInCart, setCatalogsInCart] = useState([]);
  const [formAvailable, setFormAvailable] = useState(false);

  let OpenForm;

  const handleAddToCart = (id) => {
    console.log("element Checked")
    var updatedCatalogs = { ...selectedCatalogs };
    updatedCatalogs[id] = ""
    setSelectedCatalogs(updatedCatalogs)
    var addedCatalog = { ...catalogAdded };
    addedCatalog[id] = true;
    setCatalogAdded(addedCatalog)
    let element = states.catalogues.find(o => o.id === id);
    console.log("serviceAdded final ==> ", element)
    // setSelectedServices({...selectedServices, element})
    catalogsInCart.push(element)

  }

  const handleRemoveFromCart = (id) => {
    console.log("lang UnChecked")

    var updatedCatalogs = { ...selectedCatalogs };
    updatedCatalogs[id] = ""
    // setSelectedLanguages(updatedLanguages)
    delete selectedCatalogs[id];
    var addedCatalog = { ...catalogAdded };
    addedCatalog[id] = false
    setCatalogAdded(addedCatalog)
    let element = states.catalogues.find(o => o.id === id);
    catalogsInCart.pop(element)
  }

  useEffect(() => {
    console.log(catalogs)
  }, [])

  useEffect(() => {
    setFormAvailable(OpenForm)
    console.log("formAvailablec---> ", formAvailable)
  }, [formAvailable])

  useEffect(() => {
    dispatch({ type: "ADD_CATALOGUES_IN_CART", key: 'catalogsInCart', payload: catalogsInCart });
    console.log("catalogues in Cart simple ---> ", catalogsInCart)
    console.log("catalogues in Cart from Redux ---> ", states.catalogsInCart)
    console.log("catalogues in Cart from Redux ---> ", states)
  }, [catalogsInCart.length])

  useEffect(() => {
    setFormAvailable(OpenForm)
    console.log("formAvailablec---> ", formAvailable)
  }, [formAvailable])

  useEffect(() => {
    // setLocalState("Local State")
    dispatch(actions.getCatalogues())
    // dispatch({type: "SET", key: 'sharedState', payload: "Shared State"});
    console.log("Services from redux ---> ", states)
  }, [])

  return <div id="Catalogues" className="Catalogues">
    <div className="WhatWeOffer mx-auto">Nos disponibilités </div>
    <div className="ServiceSectionTitle mx-auto">

      Catalogues


      <TiBook style={{ height: `50px`, width: `50px`, marginLeft: `15px` }} />

    </div>

    <Row className="p-2">
      <Col>
        <Row>
          {states.catalogues ? states.catalogues.map((catalogue, key) => {
            return <Col key={key} className="mb-3">
              <CatalogCard
                id={catalogue.id}
                label={catalogue.label}
                description={catalogue.description}
                images={catalogue.images}
                handleRemoveFromCart={() => { handleRemoveFromCart(catalogue.id) }}
                handleAddToCart={() => { handleAddToCart(catalogue.id) }}
                catalogAdded={catalogAdded}
              />
            </Col>
          }) : <div>Aucun élément en Catalogue Disponible</div>}
        </Row>
      </Col>

      {/* {catalogsInCart.length !== 0 && 
    <Col sm={3}>
      <CartList catalogsInCart={catalogsInCart} 
                handleRemoveFromCart={handleRemoveFromCart}
                OpenForm={OpenForm}/>
    </Col> 
} */}
    </Row>
  </div>;
};

export default Catalogues;
