import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, unknown>;

export type StateProps = {
  heroProps: {
    salute: string;
    name: string;
    paragraph: string;
    paragraphOne: string;
    paragraphTwo: string;
    buttonLabel: string;
    imgSrc: string;
  };
} & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
