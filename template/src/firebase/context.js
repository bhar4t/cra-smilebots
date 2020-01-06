import React from "react";

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} db={firebase.db} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
