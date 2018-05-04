import React, {Component} from "react";
import "es6-promise/auto";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import {render} from "react-dom";
import Login from "./login/login";
import SignUp from "./signUp/signUp";
import MainPage from "./main/mainPage";
import EasyLogin from "./staticJs/setting";

const {hashPath} = EasyLogin.config;

window.location.hash = hashPath.login;

render((
    <Router>
        <div>
            <Route path={hashPath.login} component={Login} />
            <Route path={hashPath.signUp} component={SignUp} />
            <Route path={hashPath.main} component={MainPage}/>
        </div>
    </Router>
), document.getElementById('app'));

