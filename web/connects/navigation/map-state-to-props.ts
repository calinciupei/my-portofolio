import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { StateProps, OwnProps } from "./props";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (): StateProps => {
  const menuList = [
    {
      href: "#about",
      label: "About",
      target: "_self"
    },
    {
      href: "#experience",
      label: "Experience",
      target: "_self"
    },
    {
      href: "#contact",
      label: "Contact",
      target: "_self"
    },
    {
      href: "/resume-ciupei-calin.pdf",
      label: "Resume",
      target: "_self"
    }
  ];

  return {
    navigation: {
      isOpened: true,
      menuList
    }
  };
};

export type DispatchProps = Record<string, unknown>;

export const mapDispatchProps: DispatchProps = {};
