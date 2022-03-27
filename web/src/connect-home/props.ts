import { DispatchProps } from "./map-to-props";

export enum HashSections {
  Hero = "#about",
  Experience = "#experience",
  Contact = "#contact"
}

export type StateProps = {
  routeHash?: HashSections;
  offsetTop: number;
};

export type ComponentProps = StateProps & DispatchProps;
