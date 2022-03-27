import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, unknown>;

export type StateProps = {
  socials: {
    isOpened: boolean;
    instagram: string;
    linkedin: string;
    twitter: string;
    github: string;
    offsetTop: number;
  };
} & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
