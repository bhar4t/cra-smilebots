import React from "react";
import { AuthUserContext } from "./withAuthentication";

const withUser = Component => props => (
  <AuthUserContext.Consumer>
    {authUser => <Component {...props} user={authUser} />}
  </AuthUserContext.Consumer>
);

export default withUser;
