import { Dispatch } from "redux";
import { Listener } from "history";
import history from "./history";
import { PUSH, PushAction } from "@crew/store/actions/router";

export const historyListener = (dispatch: Dispatch<PushAction>): Listener | null => {
  if (!history) return null;

  history.replace({
    pathname: history.location.pathname,
    search: history.location.search,
    hash: history.location.hash
  });

  return history.listen(({ location, action }): void => {
    if (action === "POP") {
      dispatch({
        type: PUSH,
        payload: { currentRoute: location.pathname, path: location.pathname, hash: location.hash }
      });
    }
  });
};
