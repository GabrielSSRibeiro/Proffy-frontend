import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import api from "../services/api";

import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}
