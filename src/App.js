import React from 'react';
import { StoreContext, ActionType } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router } from 'react-router-dom';
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

  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
