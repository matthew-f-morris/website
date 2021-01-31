import React from 'react';
import firebaseConfig from "./firebase/config.js"

const ActionType = {
  SET_FIREBASE_APP: 'SET_FIREBASE_APP',
  SET_USER: 'SET_USER',
  SET_CARDS: 'SET_CARDS'
}

const initialState = {
  firebaseApp: firebaseConfig,
  user: null,
  cards: []
}

const StoreContext = React.createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case ActionType.SET_FIREBASE_APP:
        return { ...state, firebaseApp: action.payload };
      case ActionType.SET_USER:
        return { ...state, user: action.payload };
      case ActionType.SET_CARDS:
        return { ...state, cards: action.payload };
      default:
        throw new Error(`Unhandled action type ${action.type}`);
    }
  }, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StateProvider, ActionType };

