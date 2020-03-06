import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Paper from "@material-ui/core/Paper";

class DemoFullWidthPaperSettings extends Component {
  render() {
    return (
      <Layout>
        <Paper style={{ width: "100%", height: "100%", padding: "16px 0px" }}>
          <ol>
            {this.props.users.map((e, i) => (
              <li
                onClick={e => {
                  e.preventDefault();
                  this.props.history.push(`/userandpermmision/user/${i}`);
                }}
                style={{
                  color:
                    this.props.location.pathname ===
                    `/userandpermmision/user/${i}`
                      ? "blue"
                      : "black"
                }}
              >
                {e.name}
                <br />
                <span style={{ color: "gray", fontSize: 10 }}>{e.email}</span>
              </li>
            ))}
          </ol>
        </Paper>
      </Layout>
    );
  }
}

export default withRouter(DemoFullWidthPaperSettings);
