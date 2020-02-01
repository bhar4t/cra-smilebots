import React from "react";
import Login from "../components/Login";
import withFirebase from "../hoc/withFirebase";

const LoginContainer = ({ firebase }) => {
  return (
    <Login
      login={firebase.googleSignIn}
      logOut={firebase.logOut}
      annonymousLogin={firebase.signInAnonymously}
    />
  );
}
export default withFirebase(LoginContainer);
