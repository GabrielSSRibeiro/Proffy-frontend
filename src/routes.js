import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import api from "../services/api";

import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" exact component={TeacherList} />
        <Route path="/give-classes" exact component={TeacherForm} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}
