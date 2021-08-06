import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap'
import house from '../../assets/icons/house.png'
import './Header.css'
import { AiFillHome } from 'react-icons/ai'
import { TiBook } from 'react-icons/ti'
import { RiCustomerService2Line } from 'react-icons/ri'
import { useHistory } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi"
import { MdContactPhone } from "react-icons/md"
import logo from '../../assets/icons/ecoma_pro_expert.svg'
import cart from '../../assets/images/total_cart.svg'
import totalCart from '../../assets/images/totalCart.svg'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import GetInTouchForm from "../miniComponents/GetInTouchForm/GetInTouchForm"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useMediaQuery } from "react-responsive";
import { Badge, Button } from 'rsuite';




const Header = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const states = useSelector(state => state, shallowEqual);
  const [showForm, setShowForm] = useState(false);
  const [countInCart, setCountInCart] = useState(0);
  const { addToast } = useToasts();

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 645px)'
  })

  const goToHome = () => {
    window.location.href = "#Home";
  }

  const goToServices = () => {
    console.log("history is ---> ", history)
    window.location.href = "#Services";
  }

  const goToCatalogues = () => {
    window.location.href = "#Catalogues";
  }

  const goToContact = () => {
    window.location.href = "#Contact";
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
  const noSendCustomerInfo = () => {
    addToast('Veuillez revoir vos informations.', { appearance: 'error', placement: 'top-center', autoDismissTimeout: '2000', autoDismiss: true, });
  }
  useEffect(() => {
    console.log("Okay Okay")
  }, [])


  useEffect(() => {
    let total = states.catalogsInCart.length + states.servicesInCart.length;
    console.log("TOTAUX ===> ", total)
    console.log("catalogue length ===> ", total)
    console.log("service length ===> ", total)

    dispatch({ type: "SET_TOTAL_IN_CART", key: 'totalInCart', payload: total });

  }, [states.catalogsInCart.length, states.servicesInCart.length])

  return <Row className="Header d-flex flex-wrap justify-content-between">
    {showForm === true ? <GetInTouchForm sendCustomerInfo={sendCustomerInfo} noSendCustomerInfo={noSendCustomerInfo} showFormModal={showForm} setOpenFormTofalse={closeCartForm} /> : null}

    <Col style={{ color: 'white', paddingLeft: '0' }}>
      <span className="text-center">
        <img src={logo} style={{ float: 'left', background: `#C96D63` }} />
      </span>
    </Col>

    <Col>
      <ul class="nav justify-content-end d-flex flex-nowrap">

        <li class="nav-item my-auto">
          <a class="nav-link" >
            <span className="HeaderRightMenuItem d-flex flex-nowrap" onClick={goToHome}>
              {!isSmallScreen ? "Accueil" : ""}
              <AiFillHome className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
            </span>
          </a>
        </li>
        <li class="nav-item my-auto">
          <a class="nav-link">
            <span className="HeaderRightMenuItem ml-5 mr-5 d-flex flex-nowrap" onClick={goToServices}>
              {!isSmallScreen ? "Services" : ""}
              <RiCustomerService2Line className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
            </span>
          </a>
        </li>
        
        {/* Menu Mediatheque */}
        <li class="nav-item my-auto">
          <a class="nav-link">
            <span className="HeaderRightMenuItem d-flex flex-nowrap" onClick={goToCatalogues}>
              {!isSmallScreen ? "Mediathèque" : ""}
              <TiBook className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
            </span>
          </a>
        </li>
        {/* Menu Contact */}
        <li class="nav-item my-auto">
          <a class="nav-link">
            <span className="HeaderRightMenuItem d-flex flex-nowrap" onClick={goToContact}>
              {!isSmallScreen ? "Contact" : ""}
              <MdContactPhone className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
            </span>
          </a>
        </li>


        <li class="nav-item">
          <span onClick={openCartForm}>
            <span style={{ cursor: `pointer` }}>

              <img src={totalCart} className="TotalCart" />

            </span>

          </span>
        </li>
      </ul>
    </Col>


  </Row>
    ;
};

export default Header;
