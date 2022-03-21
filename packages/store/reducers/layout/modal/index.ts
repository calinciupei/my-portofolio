import { Modal } from "@crew/types";
import { ToggleModalClick, UI__TOGGLE_MODAL_CLICK } from "@crew/store/actions/layout";

const INITIAL_STATE = {
  isOpen: false,
  title: ""
};

type ActionType = ToggleModalClick;

export default (state: Modal = INITIAL_STATE, action: ActionType): Modal => {
  switch (action.type) {
    case UI__TOGGLE_MODAL_CLICK:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
