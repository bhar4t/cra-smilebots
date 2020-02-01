import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Rakesh", email: "rakesh@smilebots.com" },
        { name: "Bharat Sahu", email: "bharat@gmail.com" },
        { name: "Shahid", email: "shahid@smilebots.com" },
        { name: "Mukesh", email: "mukesh@smilebots.com" },
        { name: "Bharat", email: "bhar4t@gmail.com" },
        { name: "Shahid Ji", email: "shahidji@smilebots.com" },
        { name: "Lokesh", email: "lokesh@smilebots.com" },
        { name: "Sahu", email: "sahu@gmail.com" },
        { name: "Shahid Hussain", email: "shahidhssn@smilebots.com" }
      ]
    };
  }
  render() {
    return (
      <Route
        exact
        path={["/dashboard", "/dashboard/:tab/:id", "/dashboard/new"]}
        render={props => <Dashboard {...this.props} {...this.state} />}
      />
    );
  }
}
export default DashboardContainer;
