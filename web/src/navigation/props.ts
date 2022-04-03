import { FullScreenNavigationProps } from "@crew/field";
import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, never>;

export type StateProps = {
  navigation: FullScreenNavigationProps;
  offsetTop: number;
};

export type ComponentProps = StateProps & DispatchProps;
