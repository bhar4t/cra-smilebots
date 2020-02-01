import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import config from "./config";
class Firebase {
  constructor() {
    this.app = firebase.initializeApp(config);
    this.auth = this.app.auth();
    this.db = this.app.firestore();
    this.sendInvitation = firebase.functions().httpsCallable("sendInvitation");
    this.log = console.log;

    this.app
      .firestore()
      .enablePersistence()
      .then(() => this.log("Persistence working!"))
      .catch(this.log);
  }
  googleSignIn = props => {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth
      .signInWithRedirect(provider)
      .then(() => firebase.auth().getRedirectResult())
      .then(this.log)
      .catch(error => {
        props.history.push("/login");
        this.log(error);
      });
  };

  logOut = (props) => this.auth.signOut().then(() => {
    localStorage.removeItem('user'); // Remove authenticated user from localstorage
    props.history.push('/'); // After logout redirect to app's entry point
  }, this.log); // then(Success callback, Error Callback)

  signInAnonymously = () => this.auth.signInAnonymouslyAndRetrieveData();
}

export default Firebase;
