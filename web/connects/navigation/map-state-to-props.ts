import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { createNavigationStateSelector } from "@crew/store/store-selectors/menu-navigation";
import { StateProps, OwnProps } from "./props";
import { i18n } from "../../helpers/i18n";
import {
  CurrentOffsetPosition,
  MenuToggleClick,
  UI__CURRENT_POSITION_CLICK,
  UI__MENU_TOGGLE_CLICK
} from "@crew/store/actions/layout";
import { createCurrentPositionSelector } from "@crew/store/store-selectors/current-position";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (state): StateProps => {
  const getNavigationMenuState = createNavigationStateSelector();
  const getCurrentPosition = createCurrentPositionSelector();
  const { isOpen } = getNavigationMenuState(state);
  const { offsetTop } = getCurrentPosition(state);

  const menuList = [
    {
      href: "#about",
      label: i18n({ key: "I18N.ABOUT" }),
      target: "_self"
    },
    {
      href: "#experience",
      label: i18n({ key: "I18N.EXPERIENCE" }),
      target: "_self"
    },
    {
      href: "#contact",
      label: i18n({ key: "I18N.CONTACT" }),
      target: "_self"
    },
    {
      href: "/resume-ciupei-calin.pdf",
      label: i18n({ key: "I18N.RESUME" }),
      target: "_self"
    }
  ];

  return {
    navigation: {
      isOpened: isOpen,
      menuList
    },
    offsetTop
  };
};

const dispatchHideNavigationMenu = (): MenuToggleClick => {
  return {
    type: UI__MENU_TOGGLE_CLICK,
    payload: {
      isOpen: false
    }
  };
};

const dispatchCurrentPosition = (position: number): CurrentOffsetPosition => {
  return {
    type: UI__CURRENT_POSITION_CLICK,
    payload: {
      offsetTop: position
    }
  };
};

export type DispatchProps = {
  dispatchHideNavigationMenu: typeof dispatchHideNavigationMenu;
  dispatchCurrentPosition: typeof dispatchCurrentPosition;
};

export const mapDispatchProps: DispatchProps = {
  dispatchHideNavigationMenu,
  dispatchCurrentPosition
};
