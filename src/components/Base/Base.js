import React from "react";
import Header from "../Header";
import "./Base.css";
import * as routes from "../../routeLinks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Services from "../Services";
import Catalogues from "../Catalogues";
import { Row, Col } from "react-bootstrap"
import "./Base.css"

const Base = () => {
    return <div className="Base">
<div 
// style={{position: 'absolute', top: 0}}
>

       <Header />
</div>
       <Home />
       <Services />
       <Catalogues />
    </div>;
};

export default Base;
