import { IAuth } from "Interfaces/Auth";
import { TAction } from "Types/Action";

export const AuthReducer = (state: IAuth, action: TAction) => {
  switch (action.type) {
    case "DO_LOGIN": {
      return { ...state, ...action.data };
    }

    case "DO_LOGOUT": {
      window.localStorage.removeItem("loginInfo");
      window.sessionStorage.removeItem("loginInfo");

      return { ...state, token: "", isAuthed: false };
    }

    default: {
      throw new Error(`Unknown type ${action.type} reducer on AuthReducer`);
    }
  }
};
