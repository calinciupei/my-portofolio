import { DispatchProps } from "./map-sate-to-props";

export type OwnProps = Record<string, never>;

export type StateProps = {
  contact: {
    title: string;
    salute: string;
    text: string;
    label: string;
  };
};

export type ComponentProps = StateProps & DispatchProps;
