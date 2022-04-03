import { MapStateToProps } from "react-redux";
import { InitialState } from "@crew/types";
import { OwnProps, StateProps } from "./props";
import { i18n } from "../../helpers/i18n";
import { SkillIcons } from "@crew/field";

export const mapStateToProps: MapStateToProps<StateProps, OwnProps, InitialState> = (): StateProps => {
  const content = [
    i18n({ key: "I18N.EXPERIENCE.CONTENT.ONE" }),
    i18n({ key: "I18N.EXPERIENCE.CONTENT.TWO" }),
    i18n({ key: "I18N.EXPERIENCE.CONTENT.THREE" })
  ];

  const skills: SkillIcons[] = [
    { title: "Html5", icon: "html5", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML" },
    { title: "Css", icon: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "Javascript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "Typescript", icon: "typescript", url: "https://www.typescriptlang.org/" },
    { title: "React", icon: "reactIcon", url: "https://reactjs.org/" },
    { title: "Redux", icon: "redux", url: "https://redux.js.org/" },
    { title: "ReduxSaga", icon: "reduxSaga", url: "https://redux-saga.js.org/" },
    { title: "Sass", icon: "sass", url: "https://sass-lang.com/" },
    { title: "Node", icon: "node", url: "https://nodejs.org/en/" },
    { title: "Express", icon: "express", url: "https://expressjs.com/" },
    { title: "Graphql", icon: "graphql", url: "https://graphql.org/" },
    { title: "Jest", icon: "jest", url: "https://jestjs.io/" },
    { title: "Firebase", icon: "firebase", url: "https://firebase.google.com/" },
    { title: "Jenkins", icon: "jenkins", url: "https://www.jenkins.io/" },
    { title: "Github", icon: "github", url: "https://github.com/" }
  ];

  return {
    experience: {
      content,
      skills,
      title: i18n({ key: "I18N.EXPERIENCE.TITLE" })
    }
  };
};

export type DispatchProps = Record<string, never>;

export const mapDispatchProps: DispatchProps = {};
