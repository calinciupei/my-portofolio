import { PUSH, PushAction } from "@crew/store/actions/router";
import { InitialState } from "@crew/types";
import { MapStateToProps } from "react-redux";
import { StateProps, OwnProps } from "./props";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (): StateProps => {
  return {};
};

const dispatchLogoClick = (): PushAction => {
  return {
    type: PUSH,
    payload: {
      currentRoute: "/",
      path: "/"
    }
  };
};

export type DispatchProps = {
  dispatchLogoClick: typeof dispatchLogoClick;
};

export const mapDispatchProps: DispatchProps = { dispatchLogoClick };
