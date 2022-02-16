import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";

export type StateProps = Record<string, unknown>;
export type ContainerProps = Record<string, unknown>;

export const mapStateToProps: MapStateToProps<StateProps, ContainerProps, InitialState> = (): StateProps => {
  return {};
};

export type DispatchProps = Record<string, unknown>;

export const mapDispatchProps: DispatchProps = {};
