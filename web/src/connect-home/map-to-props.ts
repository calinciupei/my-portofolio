import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { StateProps, ComponentProps, HashSections } from "./props";
import { createRouterSelector } from "@crew/store/store-selectors/routes";
import { CurrentOffsetPosition, UI__CURRENT_POSITION_CLICK } from "@crew/store/actions/layout";
import { createCurrentPositionSelector } from "@crew/store/store-selectors/current-position";

export const mapStateToProps: MapStateToProps<StateProps, ComponentProps, InitialState> = (state): StateProps => {
  const getRouterState = createRouterSelector();
  const getCurrentPosition = createCurrentPositionSelector();
  const { hash } = getRouterState(state);
  const { offsetTop } = getCurrentPosition(state);

  return {
    routeHash: hash as HashSections,
    offsetTop
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
  dispatchCurrentPosition: typeof dispatchCurrentPosition;
};

export const mapDispatchProps: DispatchProps = {
  dispatchCurrentPosition
};
