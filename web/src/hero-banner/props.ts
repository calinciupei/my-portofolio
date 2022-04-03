import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, never>;

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
};

export type ComponentProps = StateProps & DispatchProps;
