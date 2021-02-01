import React from 'react';
import { StoreContext, ActionType } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {

  const { state, dispatch } = React.useContext(StoreContext);

  React.useEffect(() => {
    const unregisterAuthObserver = state.firebaseApp.auth().onAuthStateChanged(user => {
      dispatch({ type: ActionType.SET_USER, payload: user });
    });

    return () => unregisterAuthObserver();
  }, [dispatch, state.firebaseApp]);

  React.useEffect(() => {
    if (state.user !== null) {
      let unregisterChangeObserver = state.firebaseApp
        .firestore()
        .collection("cards")
        .onSnapshot((snapshot) => {
          let cards = [];
          snapshot.forEach((doc) => {
            cards = doc.data().data;
          });
          dispatch({ type: ActionType.SET_CARDS, payload: cards });
        });
      return unregisterChangeObserver;
    }
  }, [dispatch, state.firebaseApp, state.user]);

  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
