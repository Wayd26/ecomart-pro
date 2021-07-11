import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap'
import house from '../../assets/icons/house.png'
import './Header.css'
import { AiFillHome } from 'react-icons/ai'
import { TiBook } from 'react-icons/ti'
import { RiCustomerService2Line } from 'react-icons/ri'
import { useHistory } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi"
// import logo from '../../assets/icons/ecomaproexpert2.jpeg'
import logo from '../../assets/icons/ecoma_pro_expert.svg'
import cart from '../../assets/images/total_cart.svg'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import GetInTouchForm from "../miniComponents/GetInTouchForm/GetInTouchForm"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import * as actions from "../../redux/actions/index"




const Header = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const states = useSelector(state=>state, shallowEqual); 
  const [showForm, setShowForm] = useState(false);
  const { addToast } = useToasts();
  
  const goToHome = () => {
    // history.push("/");
    window.location.href = "#Home";
  }

  const goToServices = () => {
    console.log("history is ---> ", history)
    // history.push("/services");
    window.location.href = "#Services";
  }

  const goToCatalogues = () => {
    // history.push("/catalogues");
    window.location.href = "#Catalogues";
  }

  const openCartForm = () => {
      setShowForm(true);
  }

  const closeCartForm = () => {
      setShowForm(false);
  }
  const sendCustomerInfo = () => {
    setShowForm(false);
    addToast('Envoyé avec succès', { appearance: 'success', placement: 'top-center', autoDismissTimeout: '2000', autoDismiss: true, });
   setTimeout(() => {
     window.location.reload();
   }, 3000)
  }

  return <Row className="Header d-flex flex-wrap justify-content-between">
    {showForm === true ? <GetInTouchForm sendCustomerInfo={sendCustomerInfo} showFormModal={showForm} setOpenFormTofalse={closeCartForm} /> : null}

    <Col  style={{color: 'white'}}>
      <img src={logo} style={{float: 'left', background: `#DB4513`}} />
    </Col>
    <Col sm={8}  className="HeaderRight">
      <div className="d-flex flex-nowrap HeaderRightContact justify-content-between align-item-end"> 
      
      <span className="d-flex flex-nowrap" >
      <FiPhone style={{width: `40px`, color: `#DB4513`}}/>
         +229 67 78 52 95</span>
      <span>
      <FiMail style={{width: `40px`, color: `#DB4513`}}/>
        info@gmail.com</span>

       </div>
      <Row style={{color: 'white'}} className="HeaderRightMenu pt-3">
        <Col sm={4} className="">
        <span className="HeaderRightMenuItem" onClick={goToHome}>
            Accueil
            <AiFillHome className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
          </span>
        </Col>
        <Col sm={4}>
        <span className="HeaderRightMenuItem ml-5 mr-5" onClick={goToServices}>Services
            <RiCustomerService2Line className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
          </span>
        </Col>
        <Col sm={4}>
        <span className="HeaderRightMenuItem" onClick={goToCatalogues}>Catalogues
            <TiBook className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
          </span>
        </Col>
       
      </Row>
       </Col>
       <Col>
       <span onClick={openCartForm}>
          <span style={{ cursor: `pointer` }}>

          <img src={cart} className="TotalCart" />
    
          </span>
          <span className="Badge" style={{color: `#002156`, border: `solid 2px rgb(219, 69, 19)`,
                                           borderRadius: `50%`,
                                           top: `10px`,
                                           background: `rgb(219, 69,19)`,
                                           padding: `3px`,
                                           marginLeft: `-7px`,
                                           cursor: 'pointer'
                                           }}>5</span>
       </span>
       </Col>


  </Row>
    ;
};

export default Header;
