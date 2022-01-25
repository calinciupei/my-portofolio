import { Reducer } from "redux";
import { PageState } from "@crew/types";

import { PUSH, PushAction } from "@crew/store/actions/router";

type ActionTypes = PushAction;

const routerReducer: Reducer<PageState, ActionTypes> = (
  state = { title: "", description: "" },
  action: ActionTypes
): PageState => {
  switch (action.type) {
    case PUSH:
      return { ...state };
    default:
      return state;
  }
};

export default routerReducer;
