import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AppRouter from 'components/Router';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const GlobalStyle = createGlobalStyle`
${reset}`;

function App() {
  const auth = firebase.auth();
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [userObj, setUserObj] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUserObj(user);
      } else {
        setLoggedIn(false);
      }
      setInit(true);
    });
  });
  return (
    <>
      <GlobalStyle />
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        'loading now'
      )}
    </>
  );
}

export default App;
