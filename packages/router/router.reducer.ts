import { Middleware, Dispatch } from "redux";
import history from "./history";
import {
  BACK,
  BackAction,
  FORWARD,
  ForwardAction,
  GO,
  GoAction,
  PUSH,
  PushAction,
  REPLACE,
  ReplaceAction,
} from "./router-actions";

type ActionTypes =
  | BackAction
  | ForwardAction
  | GoAction
  | PushAction
  | ReplaceAction;
const routerActionTypes = [BACK, FORWARD, GO, PUSH, REPLACE];
const routerMiddleware: Middleware = ({ getState }) => (
  next: Dispatch<ActionTypes>
) => (action: ActionTypes) => {
  // condition for supporting SSR
  if (routerActionTypes.includes(action.type) && history) {
    switch (action.type) {
      case PUSH:
        if (getState().router.currentRoute !== action.payload.path) {
          const { search } = history.location;
          history.push(
            { pathname: action.payload.path, search: search ? search : "" },
            action.payload.metadata
          );
        }
      case REPLACE:
        history.replace(action.payload.path, action.payload.metadata);
        break;
      case GO:
        history.go(action.payload);
        break;
      case BACK:
        history.back();
        break;
      case FORWARD:
        history.forward();
        break;
      default:
        break;
    }
  } else {
    next(action);
  }
};

export default routerMiddleware;
