import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, never>;
export type StateProps = Record<string, never> & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
