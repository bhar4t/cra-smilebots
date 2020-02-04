import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Rakesh",
          email: "rakesh@smilebots.com",
          src:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-05-512.png",
          status: "pending"
        },
        {
          name: "Bharat Sahu",
          email: "bharat@gmail.com",
          logo:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-06-512.png",
          status: "approved"
        },
        {
          name: "Shahid",
          email: "shahid@smilebots.com",
          src:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png",
          status: "unidentified"
        },
        {
          name: "Mukesh",
          email: "mukesh@smilebots.com",
          logo:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-07-512.png",
          currentStatus: "pending"
        },
        {
          name: "Bharat",
          email: "bhar4t@gmail.com",
          src:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-01-512.png",
          currentStatus: "pending"
        },
        {
          name: "Shahid Ji",
          email: "shahidji@smilebots.com",
          src:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-02-512.png",
          currentStatus: "authorized"
        },
        {
          name: "Lokesh",
          email: "lokesh@smilebots.com",
          logo:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-08-512.png"
        },
        {
          name: "Sahu",
          email: "sahu@gmail.com",
          src:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-03-512.png"
        },
        {
          name: "Shahid Hussain",
          email: "shahidhssn@smilebots.com",
          logo:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-09-512.png"
        }
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
