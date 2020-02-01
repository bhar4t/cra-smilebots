import React, { Component } from "react";
import Layout from "../layouts/Layout";
import Paper from "@material-ui/core/Paper";

export default class DemoFullWidthPaper extends Component {
  render() {
    return (
      <Layout>
        <Paper style={{ width: "100%", height: "100%", padding: "16px 0px" }}>
          <ul>
            {this.props.users.map(e => (
              <li>
                {e.name}
                <br />
                <span style={{ color: "gray", fontSize: 10 }}>{e.email}</span>
              </li>
            ))}
          </ul>
        </Paper>
      </Layout>
    );
  }
}
