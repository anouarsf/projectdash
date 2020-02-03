import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FormPage from "./views/FormPage";
import Registeruser from "./views/Register";
import AdminLayout from "./layouts/Admin";
import { Spinner } from "reactstrap";

const App = () => {
  const loading = useSelector(state => state.auth.loading);

  return loading ? (
    <Spinner color="primary" />
  ) : (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Registeruser} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/" component={FormPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
