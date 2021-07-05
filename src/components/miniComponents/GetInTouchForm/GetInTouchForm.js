import React from "react";
import {Modal, Button, Row, Col, Form} from "react-bootstrap";
import "./GetInTouchForm.css";

const GetInTouchForm = ({showFormModal, setOpenFormTofalse, sendCustomerInfo}) => {


  return <Modal show={showFormModal} onHide={setOpenFormTofalse}>
  <Modal.Header>
    <Modal.Title>Formulaire de Contact</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Row>
    <Form>

  <Form.Group controlId="formBasicEmail" className="mb-3">
    <Form.Label>Nom Complet<span className="RedStar">*</span></Form.Label>
    <Form.Control type="email" placeholder="Entrer votre nom complet" required/>   
  </Form.Group>

  <Form.Group controlId="formBasicEmail" className="mb-3">
    <Form.Label>Téléphone<span className="RedStar">*</span></Form.Label>
    <Form.Control type="email" placeholder="Entrer votre numéro de téléphone" required/>  
  </Form.Group>

  <Form.Group controlId="formBasicEmail" className="mb-3">
    <Form.Label>Adresse e-mail<span className="RedStar">*</span></Form.Label>
    <Form.Control type="email" placeholder="Entrer votre adresse e-mail" required/>
    <Form.Text className="text-muted">
      Nous n'allons pas partager votre adresse mail.
    </Form.Text>
  </Form.Group>
 
</Form>
    </Row>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={setOpenFormTofalse}>
      Annuler
    </Button>
    <Button variant="primary" onClick={sendCustomerInfo}>
      Envoyer
    </Button>
  </Modal.Footer>
</Modal>
};

export default GetInTouchForm;
