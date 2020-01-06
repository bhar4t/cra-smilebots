import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import withMUI from "./hoc/withMUI";
import withUser from "./hoc/withUser";
import withAuthentication from "./hoc/withAuthentication";
import NewVehicle from "./containers/NewVehicle";

const App = props => (
  <div>
    <Router>
      <div>
        <Route path="/" render={props => <NewVehicle {...props} />} />
      </div>
      <div></div>
    </Router>
  </div>
);

export default withAuthentication(withMUI(withUser(App)));
