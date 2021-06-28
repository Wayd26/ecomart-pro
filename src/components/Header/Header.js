import React from "react";
import { Row, Col } from 'react-bootstrap'
import house from '../../assets/icons/house.png'
import './Header.css'
import { AiFillHome } from 'react-icons/ai'
import { TiBook } from 'react-icons/ti'
import { RiCustomerService2Line } from 'react-icons/ri'
import { useHistory } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi"


const Header = () => {

  let history = useHistory();

  const goToHome = () => {
    history.push("/");
  }

  const goToServices = () => {
    console.log("history is ---> ", history)
    history.push("/services");
  }

  const goToCatalogues = () => {
    history.push("/catalogues");
  }

  return <Row className="Header ">
    <Col sm={1}>

      <img className="HeaderIcon" src={house} />

    </Col>
    <Col sm={2} className="HeaderAppName my-auto">
      {/* <span >ECOMARTPRO EXPERT</span> */}
      <span >My App</span>

    </Col>
    <Col sm={6} className="my-auto totalheight">
      <Row className="totalheight">
        <Col sm={4} className="MenuElement totalheight pt-5" onClick={goToHome}>
          <span>
            Accueil
            <AiFillHome className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
          </span>
        </Col>
        <Col sm={4} className="MenuElement totalheight pt-5" onClick={goToServices}>
          <span>Services
            <RiCustomerService2Line className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
          </span></Col>
        <Col sm={4} className="MenuElement totalheight pt-5" onClick={goToCatalogues}>
          <span>Catalogues
            <TiBook className="my-auto" style={{ marginLeft: `5px`, paddingBottom: `5px`, height: `25px`, width: `25px` }} />
          </span></Col>
      </Row>
    </Col>
    <Col style={{background: `white`, height: `30px`}}>
      <FiPhone style={{height: `20px`, width: `15px`, color: `#061522`, marginRight: `7px`}}/>
      <span style={{color: `#061522`, }}> +229 67 78 52 95</span>
      <FiMail style={{height: `20px`, width: `15px`, color: `#061522`, marginLeft: `15px`, marginRight: `5px`}}/>
      <span style={{color: `#061522`, }}>info@gmail.com</span>
    </Col>


  </Row>
    ;
};

export default Header;
