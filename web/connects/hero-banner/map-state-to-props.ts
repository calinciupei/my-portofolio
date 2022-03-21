import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { StateProps, OwnProps } from "./props";
import { i18n } from "../../helpers/i18n";
import { PUSH, PushAction } from "@crew/store/actions/router";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (): StateProps => {
  const heroProps = {
    buttonLabel: i18n({ key: "I18N.BUTTON.RESUME" }),
    imgSrc: "/cc-portfolio.png",
    name: i18n({ key: "I18N.NAME" }),
    paragraph: i18n({ key: "I18N.HERO.CONTENT.ONE" }),
    paragraphOne: i18n({ key: "I18N.HERO.CONTENT.TWO" }),
    paragraphTwo: i18n({ key: "I18N.HERO.CONTENT.THREE" }),
    salute: i18n({ key: "I18N.SALUTE" })
  };
  return {
    heroProps
  };
};

const dispatchResumeDownload = (): PushAction => {
  window.location.href = `${window.location.origin}/resume-ciupei-calin.pdf`;

  return {
    type: PUSH,
    payload: {
      currentRoute: window.location.pathname,
      path: window.location.pathname,
      hash: window.location.hash
    }
  };
};

export type DispatchProps = {
  dispatchResumeDownload: typeof dispatchResumeDownload;
};

export const mapDispatchProps: DispatchProps = {
  dispatchResumeDownload
};
