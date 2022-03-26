import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, unknown>;
export type StateProps = Record<string, unknown> & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
