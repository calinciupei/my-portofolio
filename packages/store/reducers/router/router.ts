import { Reducer } from "redux";
import { RouterState } from "@crew/types";

import { PUSH, PushAction } from "../../actions/router";

type ActionTypes = PushAction;

const routerReducer: Reducer<RouterState, ActionTypes> = (
  state = { currentRoute: "", page: null, path: "/" },
  action: ActionTypes
): RouterState => {
  switch (action.type) {
    case PUSH:
      return {
        ...state,
        currentRoute: action.payload.currentRoute,
        path: action.payload.path
      };
    default:
      return state;
  }
};

export default routerReducer;
