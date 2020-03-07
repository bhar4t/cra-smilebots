import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Paper from "@material-ui/core/Paper";

class DemoFullWidthPaper extends Component {
  render() {
    const paperStyle = { width: "100%", height: "100%", padding: "16px 0px" };
    return (
      <Layout>
        <Paper style={paperStyle}>
          <ul>
            {this.props.users.map((e, i) => (
              <li
                key={`li-${i}`}
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
          </ul>
        </Paper>
      </Layout>
    );
  }
}

export default withRouter(DemoFullWidthPaper);
