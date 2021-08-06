import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./Base.css";
import * as routes from "../../routeLinks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Services from "../Services";
import Catalogues from "../Catalogues";
import Footer from "../Footer";
import { Row, Col } from "react-bootstrap";
import "./Base.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";


const Base = () => {

    const dispatch = useDispatch();
    const states = useSelector(state => state, shallowEqual);

    useEffect(() => {
        let total = states.catalogsInCart.length + states.servicesInCart.length;
        console.log("TOTAUX BASE ===> ", total)

        dispatch({ type: "SET_TOTAL_IN_CART", key: 'totalInCart', payload: total });

    }, [states.catalogsInCart.length, states.servicesInCart.length])

    return <div className="Base">
        <div
            style={{ position: 'fixed', top: 0, width: `100%`, zIndex: `10` }}
        >

            <Header />
        </div>
        <Home />
        <Services />
        <Catalogues />
        <div>
            <Footer />
        </div>
    </div>;
};

export default Base;
