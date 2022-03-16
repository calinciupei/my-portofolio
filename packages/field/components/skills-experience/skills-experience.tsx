import React, { FunctionComponent } from "react";
import classnames from "classnames";
import DOMPurify from "dompurify";
import { StatefulTooltip } from "baseui/tooltip";
import { Icons } from "../icons/icons";
import { ProgressColor, ProgressLine } from "../progress-line/progress-line";

import styles from "./skills-experience.css";

export enum IconsType {
  Html5 = "html5",
  Css = "css",
  Javascript = "javascript",
  Typescript = "typescript",
  ReactIcon = "reactIcon",
  Redux = "redux",
  ReduxSaga = "reduxSaga",
  Node = "node",
  Express = "express",
  Graphql = "graphql",
  Jest = "jest",
  Firebase = "firebase",
  Jenkins = "jenkins",
  Github = "github",
  Sass = "sass"
}

const {
  Html5,
  Html5Color,
  Css,
  CssColor,
  Javascript,
  JavascriptColor,
  Typescript,
  TypescriptColor,
  ReactIcon,
  ReactColor,
  Redux,
  ReduxColor,
  ReduxSaga,
  ReduxSagaColor,
  Node,
  NodeColor,
  Express,
  ExpressColor,
  Graphql,
  GraphqlColor,
  Jest,
  JestColor,
  Firebase,
  FirebaseColor,
  Jenkins,
  JenkinsColor,
  Github,
  GithubColor,
  Sass,
  SassColor
} = Icons;

export type SkillIcons = {
  title: string;
  icon: string | IconsType;
  url: string;
};

export type SkillsExperienceProps = {
  skills: SkillIcons[];
  title: string;
  content: string[];
};

export const SkillsExperience: FunctionComponent<SkillsExperienceProps> = ({ skills, title, content }) => {
  const classes = classnames(styles.skills);
  let defaultDelay = 0;

  const animationDelay = (): number => {
    defaultDelay += 200;
    return defaultDelay;
  };

  const getDelay = (): string => {
    return `${animationDelay()}ms`;
  };

  const renderIcon = (icon: string | IconsType): JSX.Element => {
    switch (icon) {
      case IconsType.Html5:
        return <Html5 color={Html5Color.Carbon} />;

      case IconsType.Javascript:
        return <Javascript color={JavascriptColor.Carbon} />;

      case IconsType.Jenkins:
        return <Jenkins color={JenkinsColor.Carbon} />;

      case IconsType.Jest:
        return <Jest color={JestColor.Carbon} />;

      case IconsType.Css:
        return <Css color={CssColor.Carbon} />;

      case IconsType.Sass:
        return <Sass color={SassColor.Carbon} />;

      case IconsType.Typescript:
        return <Typescript color={TypescriptColor.Carbon} />;

      case IconsType.ReactIcon:
        return <ReactIcon color={ReactColor.Carbon} />;

      case IconsType.Redux:
        return <Redux color={ReduxColor.Carbon} />;

      case IconsType.ReduxSaga:
        return <ReduxSaga color={ReduxSagaColor.Carbon} />;

      case IconsType.Node:
        return <Node color={NodeColor.Carbon} />;

      case IconsType.Express:
        return <Express color={ExpressColor.Carbon} />;

      case IconsType.Graphql:
        return <Graphql color={GraphqlColor.Carbon} />;

      case IconsType.Firebase:
        return <Firebase color={FirebaseColor.Carbon} />;

      case IconsType.Github:
        return <Github color={GithubColor.Carbon} />;

      default:
        return <></>;
    }
  };

  const renderContent = (): JSX.Element => {
    return (
      <>
        {!!content.length &&
          content.map((content, index) => (
            <p
              key={index}
              className={styles.box}
              style={{ animationDelay: getDelay() }}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
            />
          ))}
      </>
    );
  };

  const renderTooltipTitle = (title: string): JSX.Element => <>{title}</>;

  const renderIcons = (): JSX.Element => {
    return (
      <>
        {!!skills.length &&
          skills.map(({ title, icon, url }) => (
            <div key={icon} className={`${styles.icon} ${styles.box}`} style={{ animationDelay: getDelay() }}>
              <StatefulTooltip content={renderTooltipTitle(title)} placement="bottom" showArrow returnFocus>
                <a href={url} target={"_blank"} rel="noreferrer" className={styles.link}>
                  {renderIcon(icon)}
                </a>
              </StatefulTooltip>
            </div>
          ))}
      </>
    );
  };

  return (
    <div className={classes} data-testid="skills">
      <div className={styles.first} data-testid="skills-content">
        <div
          className={`typography-h916 ${styles.title} ${styles.box}`}
          style={{ animationDelay: getDelay() }}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
        />

        <div className={`${styles.content}`}>{renderContent()}</div>
      </div>

      <div data-testid="skills-progress">
        <div className={`${styles.box} ${styles.progresses}`} style={{ animationDelay: getDelay() }}>
          <ProgressLine color={ProgressColor.Blue} label="React" delay={animationDelay()} progress={95} />
          <ProgressLine color={ProgressColor.Red} label="Angular" delay={animationDelay()} progress={75} />
          <ProgressLine color={ProgressColor.Green} label="Node" delay={animationDelay()} progress={65} />
        </div>

        <div className={styles.icons}>{renderIcons()}</div>
      </div>
    </div>
  );
};
