import React from 'react';
import firebaseConfig from "./firebase/config.js"

const ActionType = {
  SET_FIREBASE_APP: 'SET_FIREBASE_APP',
  SET_USER: 'SET_USER',
  SET_BASKET: 'SET_BASKET'
}

const initialState = {
  firebaseApp: firebaseConfig,
  user: null,
  basket: []
}

const StoreContext = React.createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case ActionType.SET_FIREBASE_APP:
        return { ...state, firebaseApp: action.payload };
      case ActionType.SET_USER:
        return { ...state, user: action.payload };
      case ActionType.SET_BASKET:
        return { ...state, basket: action.payload };
      default:
        throw new Error(`Unhandled action type ${action.type}`);
    }
  }, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StateProvider, ActionType };

