import React, { useState } from 'react';

import firebase from 'firebase/app';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import firebaseConfig  from "../../firebase/config.js"

const firebaseApp = firebase.initializeApp(firebaseConfig);

function LoginPage(){

    const [isSignedIn, setSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: 'popup',
        signInOption: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
        signInSuccessUrl: "/home",
        credentialHelper: 'none'
    };

    return (
        <div className="login">
            <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebaseApp.auth()}
                />
        </div>
    )
}

export default LoginPage;