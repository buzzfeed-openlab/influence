import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./layout";
import TeamPage from "./team-page";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      
      <IndexRoute component={TeamPage}></IndexRoute>

    </Route>
  </Router>,
app);

