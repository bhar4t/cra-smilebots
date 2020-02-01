import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100wh"
  }
};

const Login = props => {
  return (
    <div style={styles.container}>
      <Button
        variant="contained"
        color="primary"
        onClick={e => {
          e.preventDefault();
          props.history.push("/authReloadWait");
          props.login(props);
        }}
      >
        Login
      </Button>
    </div>
  );
};
export default withRouter(Login);
