import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "./component/login/Login.jsx";
import Home from "./component/home/Home.jsx";

ReactDOM.render((
    <Router>
        <div className="container">
            <Route path="/" component={Login} exact />
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
        </div>
    </Router>
), document.getElementById("app"));
