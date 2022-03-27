import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { StateProps, OwnProps } from "./props";
import { i18n } from "../../helpers/i18n";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = () => {
  const title = i18n({ key: "I18N.CONTACT.TITLE" });
  const text = i18n({ key: "I18N.CONTACT.TEXT" });
  const salute = i18n({ key: "I18N.CONTACT.SALUTE" });
  const label = i18n({ key: "I18N.CONTACT.LABEL" });

  return {
    contact: {
      title,
      text,
      salute,
      label
    }
  };
};

const dispatchContactMail = (): void => {
  window.location.href = "mailto:calinciupei@gmail.com";
};

export type DispatchProps = {
  dispatchContactMail: typeof dispatchContactMail;
};

export const mapDispatchProps: DispatchProps = {
  dispatchContactMail
};
