import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Paper from "@material-ui/core/Paper";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          label: "Pending",
          tooltip: "Click to approve pending users",
          data: props.users,
          route: "/dashboard/pending",
          primaryField: "name",
          secondaryField: "email",
          avatarField: "src",
          decorators: {
            conditionField: "status",
            options: ["pending", "approved", "unidentified"],
            colors: ["yellow", "green", "red"]
          }
        },
        {
          label: "Approved",
          tooltip: "Click to approve approved users",
          data: [props.users[1]].concat(props.users),
          route: "/dashboard/approved",
          primaryField: "name",
          secondaryField: "email",
          avatarField: "logo",
          decorators: {
            conditionField: "currentStatus",
            options: ["pending", "authorized", "unidentified"],
            colors: ["orange", "pink", "magenta"]
          }
        }
      ],
      user: null,
      users: props.users
    };
  }

  componentWillReceiveProps(next) {
    if (next.match.params.hasOwnProperty("tab")) {
      let tab = next.match.params["tab"];
      if (tab === "pending" && next.match.params.hasOwnProperty("id")) {
        this.setState({
          user: this.state.tabs[0].data[next.match.params["id"]]
        });
      } else if (tab === "approved" && next.match.params.hasOwnProperty("id")) {
        this.setState({
          user: this.state.tabs[1].data[next.match.params["id"]]
        });
      } else if (tab === "new") {
        this.setState({ user: null });
      }
    } else this.setState({ user: null });
    // if (next.match.path === "/dashboard/new") alert("NEW");
  }

  render() {
    const { tabs, users, user } = this.state;
    return (
      <Layout
        tabs={tabs}
        search={{
          data: users,
          hintText: "Search Users",
          labelField: "email"
        }}
        fabClickHandler={() => {
          this.props.history.push("/dashboard/new");
        }}
      >
        <Paper style={{ width: "100%", height: "100%" }}>
          {user ? (
            <div>
              You Have Selected: {user.name}, {user.email}, {user.phone}
            </div>
          ) : (
            <div
              style={{
                height: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              "Suppose, nothing to show is appearing"
            </div>
          )}
        </Paper>
      </Layout>
    );
  }
}

export default withRouter(Dashboard);
