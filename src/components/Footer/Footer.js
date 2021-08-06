import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import { FiPhone, FiMail } from "react-icons/fi"


const Footer = () => {
  var d = new Date();
  var y = d.getFullYear();
  return <Row className="Footer d-flex flex-wrap text-center">
    {/* <Col style={{color:`#C96D63`, fontWeight: `bold`}}>EcomaProExpert <span>&copy;</span>{y}</Col> */}
    {/* <Col sm={8}> <div className="d-flex flex-wrap FooterContact justify-content-between align-item-end"> 
      <span className="mb-2" style={{color:`#C96D63`, fontWeight: `bold`}}>EcomaProExpert <span>&copy;</span>{y}</span>
      
      <span className="d-flex flex-wrap" style={{fontWeight: `bold`}}>
      <span className="d-flex flex-nowrap mb-2" >
      <FiPhone style={{width: `40px`, color: `#C96D63`}}/>
         +229 67 78 52 95</span>
      <span>
      <FiMail style={{width: `40px`, color: `#C96D63`}}/>
        info@gmail.com</span>
        </span>


       </div></Col>
       <Col sm={2}></Col>
       <Col  style={{color: `white`, float: `right`}}>Propulsé par <span style={{fontWeight: `bold`, color:`#C96D63`}}>Hélice</span></Col> */}
    <div id="Contact"><span className="mb-2" style={{ color: `#C96D63`, fontWeight: `bold` }}>EcomaProExpert <span>&copy;</span>{y}</span></div>

    {/* <div> */}
    {/* <span className="" style={{ fontWeight: `bold` }}> */}

    <div style={{ color: `#C96D63`, font: `Manrope` }}><FiPhone style={{ width: `40px`, color: `#C96D63` }} /> +229 67 78 52 95</div>
    <div style={{ color: `#C96D63`, font: `Manrope` }}><FiMail style={{ width: `40px`, color: `#C96D63` }} /> info@gmail.com</div>
    <div style={{ color: `white`, float: `right`, font: `Manrope` }}>Propulsé par <em style={{ fontWeight: `bold`, color: `#C96D63` }}>Hélice</em></div>

    {/* </span> */}
    {/* </div> */}
  </Row>;
};

export default Footer;
