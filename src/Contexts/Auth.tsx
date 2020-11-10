// Dependencies
import React, {
  useReducer,
  createContext,
  useEffect,
  useCallback,
} from "react";

// Type
import { TAction } from "Types/Action";

// Interface
import { IAuth } from "Interfaces/Auth";

// Reducer
import { AuthReducer } from "Reducers/Auth";

// InitialState
const initialState: IAuth = {
  isAuthed: undefined,
  token: "",
  user: undefined,
};

// Create Context
const AuthContext = createContext<{
  state: IAuth;
  dispatch: (action: TAction) => void;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider
const AuthProvider = ({ children }: any) => {
  // Attributes
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(
    useCallback(() => {
      const localLoginInfo =
        window.localStorage.getItem("loginInfo") ||
        window.sessionStorage.getItem("loginInfo");
      const loginInfo = localLoginInfo ? JSON.parse(localLoginInfo) : false;

      if (!!loginInfo && !!loginInfo.token) {
        dispatch({
          type: "DO_LOGIN",
          data: {
            isAuthed: true,
            token: loginInfo.token,
            user: loginInfo.user,
          },
        });
      } else {
        dispatch({
          type: "DO_LOGIN",
          data: {
            ...state,
            isAuthed: false,
          },
        });
      }
    }, [state]),
    []
  );

  // DOM
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
