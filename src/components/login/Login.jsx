import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './Login.css';
import './Firebase.css';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID, { requireDisplayName: true }],
  credentialHelper: 'none',
  signInSuccessUrl: '/#/home'
};

function LoginPage() {

  return (
    <div className="page">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default LoginPage;