import { Dispatch } from "redux";
import { Listener } from "history";
import history from "./history";
import { UPDATE_ROUTE, UpdateCurrentRouteAction } from "./router-actions";

const historyListner = (
  dispatch: Dispatch<UpdateCurrentRouteAction>
): Listener | null => {
  if (history) {
    return history.listen(({ action, location }): void => {
      dispatch({
        type: UPDATE_ROUTE,
        payload: { path: location.pathname, metadata: { action } },
      });
    });
  }

  return null;
};

export default historyListner;
