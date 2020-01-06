import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import config from "./config";

class Firebase {
  constructor() {
    this.app = firebase.initializeApp(config);
    this.auth = this.app.auth();
    this.db = this.app.firestore();

    this.app
      .firestore()
      .enablePersistence()
      .then(() => {
        console.log("Persistence working!");
      })
      .catch(err => {
        if (err.code === "failed-precondition") {
          console.log(
            "Multiple tabs open. So, no offline persistence for you."
          );
        } else if (err.code === "unimplemented") {
          console.log("Offline persistence not supported in this browser.");
        }
      });
  }

  googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth
      .signInWithRedirect(provider)
      .then(() => firebase.auth().getRedirectResult())
      .then(result => {
        // The signed-in user info.
        console.log(result.user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  logOut = () => {
    this.auth.signOut().then(
      () => {
        console.log("Signed Out");
      },
      error => {
        console.error("Sign Out Error", error);
      }
    );
  };

  signInAnonymously = () => {
    return this.auth.signInAnonymouslyAndRetrieveData();
  };
}

export default Firebase;
