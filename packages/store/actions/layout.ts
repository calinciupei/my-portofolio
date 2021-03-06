import { MenuNavigation, Modal, CurrentPosition } from "@crew/types";

export const UI__TOGGLE_MODAL_CLICK = "UI__OPEN_MODAL_CLICK";
export const UI__MENU_TOGGLE_CLICK = "UI__MENU_TOGGLE_CLICK";
export const UI__CURRENT_POSITION_CLICK = "UI__CURRENT_POSITION_CLICK";

export type ToggleModalClick = {
  type: typeof UI__TOGGLE_MODAL_CLICK;
  payload: Modal;
};

export type MenuToggleClick = {
  type: typeof UI__MENU_TOGGLE_CLICK;
  payload: MenuNavigation;
};

export type CurrentOffsetPosition = {
  type: typeof UI__CURRENT_POSITION_CLICK;
  payload: CurrentPosition;
};
