import React, { Component } from "react";
import Layout from "../layouts/Layout";
import Paper from "@material-ui/core/Paper";

export default class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      tabs: [
        {
          label: "Users",
          tooltip: "Click to approve users",
          data: [],
          route: "/modules/user",
          avatarField: "logo",
          primaryField: "name",
          secondaryField: "email"
        }
      ]
    };
  }

  componentDidMount() {
    this.setInitialValues(this.props)
  }

  UNSAFE_componentWillReceiveProps(next) {
    this.setInitialValues(next);
    if (next.match.path === "/modules/new")
      console.log("Handle New Button Events");
  }

  setInitialValues(props) {
    const tabs = this.state.tabs.map((e, i) => {
      const tab = e;
      tab.data = props.users;
      return tab;
    });
    this.setState({ users: props.users, tabs });
  }

  render() {
    const { tabs } = this.state;
    return (
      <Layout
        tabs={tabs}
        fabClickHandler={() => this.props.history.push("/modules/new")}
      >
        <Paper
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          Your modules will be here.
        </Paper>
      </Layout>
    );
  }
}
