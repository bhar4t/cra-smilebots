import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const users = json.map((element, index) => {
          const user = element;
          user.src = `https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-${index + 10}-512.png`
          user.logo = `https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-${index + 10}-512.png`
          user.status = ['pending', 'approved', 'unidentified'][Math.floor(Math.random() * 3)];
          user.currentStatus = ['pending', 'unidentified', 'authorized'][Math.floor(Math.random() * 3)];
          return user;
        });
        this.setState({ users }, console.log(users));
      })
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
