import React, { useReducer, createContext } from "react";

import { TAction } from "Types/Action";
import { IApp } from "Interfaces/App";
import { AppReducer } from "Reducers/App";

const initialState: IApp = {
  isNavMenuVisible: false,
  isLoading: false,
};

const AppContext = createContext<{
  state: IApp;
  dispatch: (action: TAction) => void;
}>({
  state: initialState,
  dispatch: () => {},
});

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
