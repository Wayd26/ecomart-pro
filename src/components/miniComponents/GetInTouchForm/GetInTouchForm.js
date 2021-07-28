import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./GetInTouchForm.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SimpleReactValidator from 'simple-react-validator';


const GetInTouchForm = ({ showFormModal, setOpenFormTofalse, sendCustomerInfo, noSendCustomerInfo }) => {

  const dispatch = useDispatch();
  const states = useSelector(state => state, shallowEqual);
  const [nextStep, setNextStep] = useState(false);
  const [error, setError] = useState(false);

  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    phone: ""
  })

  const simpleValidator = useRef(new SimpleReactValidator(
    {
      messages: {
        required: 'Ce champ est requis',
        email: 'Veuillez saisir un email valide',
        phone: 'Veuillez saisir un numéro de téléphone valide'
      }
    }

  ))


  const handleInputChange = (propriety) => {
    return e => {
      setUserInfo({ ...userInfo, [propriety]: e.target.value })
    }

  }

  const goToNextStep = () => {
    setNextStep(true);
  }

  const goToBackStep = () => {
    setNextStep(false);
    simpleValidator.current.hideMessages();
    setError(false);
  }

  const validate = () => {
    if (simpleValidator.current.allValid()) {
      sendCustomerInfo();
    } else {

      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000)

    }
  }

  return <Modal show={showFormModal} onHide={setOpenFormTofalse}>
    {states.servicesInCart.length === 0 && states.catalogsInCart.length === 0 ? null :
      <Modal.Header>
        <Modal.Title>{nextStep === false ? "Contenu de votre panier" : "Formulaire de Contact"} </Modal.Title>
      </Modal.Header>}
    <Modal.Body>
      {error === true ? <div className="errorMessage">Veuillez revoir vos informations.</div> : false}

      {states.servicesInCart.length === 0 && states.catalogsInCart.length === 0 ?
        <div className="mt-3">Votre panier est vide actuellement</div>
        :
        null
      }
      {nextStep === false ?
        <Row >
          {states.servicesInCart.length !== 0 ?
            <>
              <div className="text-center ServicesTitle mt-4">Services</div>
              {states.servicesInCart.map((item, index) => <Row key={index}>
                <div className="mt-2 d-flex flex-nowrap" key={index}>{index + 1} - {item.title}</div>

              </Row>)}
            </>
            : null}

          {states.catalogsInCart.length !== 0 ?
            <>
              <div className="text-center CataloguesTitle mt-4">Catalogues</div>
              {states.catalogsInCart.map((item, index) => <div className="mt-2" key={index}>{index + 1} - {item.description}</div>)}
            </>
            : null}
        </Row>
        :
        <Row>
          <Form>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Nom Complet<span className="RedStar">*</span></Form.Label>
              <Form.Control onChange={handleInputChange('fullname')} value={userInfo.fullname}
                onBlur={() => simpleValidator.current.showMessageFor('fullname')}
                type="text" name="fullname" placeholder="Entrer votre nom complet" required />
              {simpleValidator.current.message('fullname', userInfo.fullname, 'required')}
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Téléphone(ex : +22951525354)<span className="RedStar">*</span></Form.Label>
              <Form.Control onChange={handleInputChange('phone')} type="telephone"
                onBlur={() => simpleValidator.current.showMessageFor('phone')}
                value={userInfo.phone} name="phone" placeholder="Entrer votre numéro de téléphone" required />
              {simpleValidator.current.message('phone', userInfo.phone, 'required|phone')}
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Adresse e-mail<span className="RedStar">*</span></Form.Label>
              <Form.Control onChange={handleInputChange('email')} type="email"
                onBlur={() => simpleValidator.current.showMessageFor('email')}
                value={userInfo.email} name="mail" placeholder="Entrer votre adresse e-mail" required />
              {simpleValidator.current.message('email', userInfo.email, 'required|email')}
              <Form.Text className="text-muted">
                Nous n'allons pas partager votre adresse mail.
              </Form.Text>
            </Form.Group>

          </Form>
        </Row>}

    </Modal.Body>
    <Modal.Footer>
      {nextStep === false ? <><Button className="CancelButton" onClick={setOpenFormTofalse}>
        Annuler
      </Button>
        {states.servicesInCart.length !== 0 || states.catalogsInCart.length !== 0 ?
          <Button className="NextButton" onClick={goToNextStep}>
            Suivant
          </Button>
          : null}
      </> : <>
        <Button className="BackButton" onClick={goToBackStep}>
          Retour
        </Button>
        <Button className="SendButton" onClick={validate}>
          Envoyer
        </Button></>}


    </Modal.Footer>
  </Modal>
};

export default GetInTouchForm;
