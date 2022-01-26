import { PUSH, PushAction } from "@crew/store/actions/router";
import { Middleware, Dispatch } from "redux";
import history from "./history";

const baseHref = document.getElementsByTagName("base")[0]?.getAttribute("href") || "";

type Actions = PushAction;

const routingActionTypes = [PUSH];

export const urlMiddleware: Middleware = () => (next: Dispatch<Actions>) => (action: Actions) => {
  let url;

  if (routingActionTypes.includes(action.type) && history) {
    switch (action.type) {
      case PUSH:
        url = `${baseHref}${action.payload.currentRoute}`.replace("//", "/");

        if (url !== window.location.pathname) {
          history.push(url, action.payload);
        }

        break;
      default:
        break;
    }
  }

  next(action);
};
