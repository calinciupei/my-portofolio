import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { StateProps, OwnProps } from "./props";
import { createNavigationStateSelector } from "@crew/store/store-selectors/menu-navigation";
import { UI__MENU_TOGGLE_CLICK, MenuToggleClick } from "@crew/store/actions/layout";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (state) => {
  const getMenuState = createNavigationStateSelector();
  const { isOpen } = getMenuState(state);

  return {
    isOpen,
    socials: {
      github: "https://github.com/calinciupei",
      instagram: "https://www.instagram.com/ciupeicalin/",
      linkedin: "https://www.linkedin.com/in/calinciupei/",
      twitter: "https://twitter.com/calinciupei"
    }
  };
};

const dispatchMenuClick = (isOpen: boolean): MenuToggleClick => {
  return {
    payload: {
      isOpen: !isOpen
    },
    type: UI__MENU_TOGGLE_CLICK
  };
};

export type DispatchProps = {
  dispatchMenuClick: typeof dispatchMenuClick;
};

export const mapDispatchProps: DispatchProps = {
  dispatchMenuClick
};
