import { InitialState } from "@crew/types";
import { MapStateToProps } from "react-redux";
import { StateProps, OwnProps } from "./props";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (): StateProps => {
  return {};
};

export type DispatchProps = Record<string, unknown>;

export const mapDispatchProps: DispatchProps = {};
