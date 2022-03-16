import { DispatchProps } from "./map-sate-to-props";

export type OwnProps = Record<string, unknown>;

export type StateProps = {
  contact: {
    title: string;
    salute: string;
    text: string;
    label: string;
  };
} & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
