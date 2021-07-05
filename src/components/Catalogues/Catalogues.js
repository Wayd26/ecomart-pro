import React, {useEffect, useState} from "react";
import "./Catalogues.css"
import {Row, Col} from "react-bootstrap"
import CatalogCard from "../miniComponents/CatalogCard/CatalogCard"
import CartList from "../miniComponents/CartList/CartList";
import {catalogs} from "../../data/catalogs"

const Catalogues = () => {

  const [catalogsState, setCatalogsState] = useState(catalogs);
  const [selectedCatalogs, setSelectedCatalogs] = useState({});
  const [catalogAdded, setCatalogAdded] = useState({});
  const [catalogsInCart, setCatalogsInCart] = useState([]);
  const [formAvailable, setFormAvailable] = useState(false);

  let OpenForm;

  const handleAddToCart = (id) => {
    console.log("element Checked")
    var updatedCatalogs = {...selectedCatalogs};
    updatedCatalogs[id] = ""
    setSelectedCatalogs(updatedCatalogs)
    var addedCatalog = {...catalogAdded};
    addedCatalog[id] = true ;
    setCatalogAdded(addedCatalog)
    let element = catalogsState.find(o => o.id === id);
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
    let element = catalogsState.find(o => o.id === id);
    catalogsInCart.pop(element)
  }
 
  useEffect(() => {
    console.log(catalogs)
  } ,[])
 
  useEffect(() => {
setFormAvailable(OpenForm)
console.log("formAvailablec---> ", formAvailable)
  } ,[formAvailable])

  return <div className="Catalogues">Catalogues
  
  <Row className="p-5">
    <Col>
    <Row>
    {catalogsState ? catalogsState.map((catalog, key) => {
        return <Col key={key} sm={4} className="mb-3">
      <CatalogCard 
          id={catalog.id}
          label={catalog.label}
          description={catalog.description}
          images={catalog.images}
          handleRemoveFromCart={()=>{handleRemoveFromCart(catalog.id)}}
          handleAddToCart={()=>{handleAddToCart(catalog.id)}}
          catalogAdded={catalogAdded}
      />
      </Col>
       }) : <div>Aucun élément en Catalogue Disponible</div>}
    </Row>
    </Col>

    {catalogsInCart.length !== 0 && 
    <Col sm={3}>
      <CartList catalogsInCart={catalogsInCart} 
                handleRemoveFromCart={handleRemoveFromCart}
                OpenForm={OpenForm}/>
    </Col> 
}
  </Row>
  </div>;
};

export default Catalogues;
