
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./components/Login/Login";
import CreateCompany from "./components/IRepairCreate/CreateNewCompany";
import CreateService from "./components/IRepairCreate/CreateNewService";
import CreateRepairman from "./components/IRepairCreate/CreateNewRepairman";


import AdminLayout from "layouts/Admin.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/admin/create/company" component={CreateCompany} />
      <Route path="/admin/create/service" component={CreateService} />
      <Route path="/admin/create/repairman" component={CreateRepairman} />
      <Route exact path="/login" component={Login}/>
      <Redirect from="/" to="/login" />
      <Redirect from="/admin/dashboard" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
