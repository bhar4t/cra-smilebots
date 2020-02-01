import React, { Component } from "react";
import Layout from "../layouts/Layout";
import Paper from "@material-ui/core/Paper";

export default class Module extends Component {
  constructor(props) {
    super(props);
    const users = [
      { name: "Bharat Sahu", email: "bharat@gmail.com" },
      { name: "Rakesh", email: "rakesh@smilebots.com" },
      { name: "Shahid", email: "shahid@smilebots.com" },
      { name: "Bharat Sahu", email: "bharat@gmail.com" },
      { name: "Rakesh", email: "rakesh@smilebots.com" },
      { name: "Shahid", email: "shahid@smilebots.com" },
      { name: "Bharat Sahu", email: "bharat@gmail.com" },
      { name: "Rakesh", email: "rakesh@smilebots.com" },
      { name: "Shahid", email: "shahid@smilebots.com" },
      { name: "Bharat Sahu", email: "bharat@gmail.com" },
      { name: "Rakesh", email: "rakesh@smilebots.com" },
      { name: "Shahid", email: "shahid@smilebots.com" }
    ];
    this.state = {
      users,
      tabs: [
        {
          label: "Users",
          tooltip: "Click to approve users",
          data: users,
          route: "/modules/user",
          primaryField: "name",
          secondaryField: "email"
        }
      ]
    };
  }

  componentWillReceiveProps(next) {
    if (next.match.path === "/modules/new") alert("NEW");
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
