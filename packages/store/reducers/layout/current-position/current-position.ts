import { CurrentPosition } from "@crew/types";
import { UI__CURRENT_POSITION_CLICK, CurrentOffsetPosition } from "@crew/store/actions/layout";

const STATE = {
  offsetTop: window.pageYOffset
};

type ActionType = CurrentOffsetPosition;

export default (state: CurrentPosition = STATE, action: ActionType): CurrentPosition => {
  switch (action.type) {
    case UI__CURRENT_POSITION_CLICK:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
