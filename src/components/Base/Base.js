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

        <Router>
            {/* <div style={{ position: `fixed`, top: `0` }}> */}
            <div >
                <Header  />
            </div>
            <div>

            <Switch>
                <Route
                    path={routes.HOME}
                    exact
                    component={Home}
                />
                <Route
                    path={routes.SERVICES}
                    exact
                    component={Services}
                />
                <Route
                    path={routes.CATALOGUES}
                    exact
                    component={Catalogues}
                />
            </Switch>
            </div>
        </Router>
    </div>;
};

export default Base;
