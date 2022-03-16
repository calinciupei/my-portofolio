import { FullScreenNavigationProps } from "@crew/field";
import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, unknown>;

export type StateProps = {
  navigation: FullScreenNavigationProps;
} & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
