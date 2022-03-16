import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, unknown>;

export type StateProps = {
  isOpen: boolean;
  socials: {
    instagram: string;
    linkedin: string;
    twitter: string;
    github: string;
  };
} & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
