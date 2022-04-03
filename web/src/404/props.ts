import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, never>;

export type StateProps = {
  content: string;
};

export type ComponentProps = StateProps & DispatchProps;
