import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { StateProps, OwnProps } from "./props";
import { i18n } from "../../helpers/i18n";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (): StateProps => {
  return {
    content: i18n({ key: "I18N.404" })
  };
};

export type DispatchProps = Record<string, never>;

export const mapDispatchProps: DispatchProps = {};
