import React, { useReducer, createContext, useContext } from 'react';

const StateContext = createContext();

export const DataLayer = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(StateContext);
