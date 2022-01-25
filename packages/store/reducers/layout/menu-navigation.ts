import { MenuNavigation } from "@crew/types";
import {
  MenuToggleClick,
  UI__MENU_TOGGLE_CLICK,
} from "@crew/store/actions/layout";

const ITNITIAL_STATE = {
  isOpen: false,
};

type ActionType = MenuToggleClick;

export default (
  state: MenuNavigation = ITNITIAL_STATE,
  action: ActionType
): MenuNavigation => {
  switch (action.type) {
    case UI__MENU_TOGGLE_CLICK:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
