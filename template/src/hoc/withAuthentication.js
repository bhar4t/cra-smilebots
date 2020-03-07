import React from "react";
import withFirebase from "./withFirebase";

const access = {
  branches: true,
  clients: true,
  enquiriesAndQuotations: true,
  items: true,
  purchaseOrders: true,
  transporters: true,
  usersAndPermissions: true,
  vendors: true,
  masters: true
};

const AuthUserContext = React.createContext(null);

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      const authUser = JSON.parse(localStorage.getItem("user"));
      this.state = { authUser };
    }

    componentDidMount() {
      this.addUsers();
    }

    purgeUser = (authUser, access) => {
      const user = { ...authUser.providerData[0], uid: authUser.uid, access };
      this.setState({ authUser: user });
      localStorage.setItem("user", JSON.stringify(user));
    };

    addUsers = () => {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({ authUser });
          this.props.db
            .collection("users")
            .doc(authUser.uid)
            .get()
            .then(user => {
              if (!user.exists) {
                this.props.db
                  .collection("users")
                  .doc(authUser.uid)
                  .set({
                    email: authUser.email,
                    displayName: authUser.displayName,
                    imageURL: authUser.photoURL,
                    access
                  })
                  .then(() => console.log("Success"))
                  .catch(console.error);
                this.purgeUser(authUser, access);
              } else this.purgeUser(authUser, user.data().access);
            });
        } else this.setState({ authUser: null });
      });
    };

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }
  return withFirebase(WithAuthentication);
};

export { AuthUserContext };
export default withAuthentication;
