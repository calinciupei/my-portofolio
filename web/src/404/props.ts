import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, unknown>;

export type StateProps = {
  content: string;
} & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
