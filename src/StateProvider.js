//user info data so that we can use it in home page
//products that are added to the cart so that we can use it in checkout page

import React, { createContext, useContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();

//build a provider
//children App component lai vaneko
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
