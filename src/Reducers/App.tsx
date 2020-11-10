import { IApp } from "Interfaces/App";
import { TAction } from "Types/Action";

export const AppReducer = (state: IApp, action: TAction) => {
  switch (action.type) {
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.data };
    }

    case "TOGGLE_NAVMENU": {
      return { ...state, isNavMenuVisible: action.data };
    }

    default: {
      throw new Error(`Unknown type ${action.type} reducer on AppReducer`);
    }
  }
};
