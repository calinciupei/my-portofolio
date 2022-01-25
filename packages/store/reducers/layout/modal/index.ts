import { Modal } from "@crew/types";
import {
  ToggleModalClick,
  UI__TOGGLE_MODAL_CLICK,
} from "@crew/store/actions/layout";

const ITNITIAL_STATE = {
  isOpen: false,
  title: "",
};

type ActionType = ToggleModalClick;

export default (state: Modal = ITNITIAL_STATE, action: ActionType): Modal => {
  switch (action.type) {
    case UI__TOGGLE_MODAL_CLICK:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
