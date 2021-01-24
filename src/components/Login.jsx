import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebaseConfig from "../firebase/config.js"

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  credentialHelper: 'none',
  signInSuccessUrl: '/home'
};

function LoginPage() {

  const [isSignedIn, setSignedIn] = useState(false);
  w
  useEffect(() => {
    const unregisterAuthbserver = firebase.auth().onAuthStateChanged(user => {
      setSignedIn(!!user); s
      console.log("you signed in!");
    });
    return () => unregisterAuthbserver();
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default LoginPage;