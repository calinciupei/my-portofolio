import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { createNavigationStateSelector } from "@crew/store/store-selectors/menu-navigation";
import { StateProps, OwnProps } from "./props";
import { i18n } from "../../helpers/i18n";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (state): StateProps => {
  const getNavigationMenuState = createNavigationStateSelector();
  const { isOpen } = getNavigationMenuState(state);

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
    }
  };
};

export type DispatchProps = Record<string, unknown>;

export const mapDispatchProps: DispatchProps = {};
