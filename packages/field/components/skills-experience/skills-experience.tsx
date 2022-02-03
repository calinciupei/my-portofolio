import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { StatefulTooltip } from "baseui/tooltip";
import { Icons } from "../icons/icons";

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

const iconsContent: { title: string; icon: IconsType; url: string }[] = [
  { title: "Html5", icon: IconsType.Html5, url: "https://en.wikipedia.org/wiki/HTML5" },
  { title: "Css", icon: IconsType.Css, url: "" },
  { title: "Javascript", icon: IconsType.Javascript, url: "" },
  { title: "Typescript", icon: IconsType.Typescript, url: "" },
  { title: "React", icon: IconsType.ReactIcon, url: "" },
  { title: "Redux", icon: IconsType.Redux, url: "" },
  { title: "ReduxSaga", icon: IconsType.ReduxSaga, url: "" },
  { title: "Sass", icon: IconsType.Sass, url: "" },
  { title: "Node", icon: IconsType.Node, url: "" },
  { title: "Express", icon: IconsType.Express, url: "" },
  { title: "Graphql", icon: IconsType.Graphql, url: "" },
  { title: "Jest", icon: IconsType.Jest, url: "" },
  { title: "Firebase", icon: IconsType.Firebase, url: "" },
  { title: "Jenkins", icon: IconsType.Jenkins, url: "" },
  { title: "Github", icon: IconsType.Github, url: "" }
];

export type SkillsExperienceProps = {
  label?: string;
};

export const SkillsExperience: FunctionComponent<SkillsExperienceProps> = () => {
  const classes = classnames(styles.skills);
  let defaultDelay = 0;

  const animationDelay = (delay?: number): string => {
    if (delay) {
      return `${delay}ms`;
    }

    defaultDelay += 250;
    return `${defaultDelay}ms`;
  };

  const renderIcon = (icon: IconsType): JSX.Element => {
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

  const renderIcons = (): JSX.Element => {
    return (
      <>
        {iconsContent.map(({ title, icon, url }) => (
          <div key={icon} className={`${styles.icon} ${styles.box}`} style={{ animationDelay: animationDelay() }}>
            <StatefulTooltip content={() => title} placement="bottom" showArrow returnFocus>
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
    <div className={classes}>
      <div>
        <div className={`typography-h916 ${styles.title} ${styles.box}`} style={{ animationDelay: animationDelay() }}>
          Tools & <br /> Experience
        </div>
        <div className={styles.content}>
          <p className={styles.box} style={{ animationDelay: animationDelay() }}>
            My passion to create things that contributed with a very minuscular portion to the vast space of the
            internet started in high school by hacking and building my first website that represented my school.
          </p>
          <p className={styles.box} style={{ animationDelay: animationDelay() }}>
            Fast-forward to today, I&apos;ve did remote work for huge corporations, advertising agencies, consulted
            startup companies, and had the privilege of working with talented people to create web products for consumer
            use and business
          </p>
          <p className={styles.box} style={{ animationDelay: animationDelay() }}>
            The main area of my expertise is front-end development, building scalable web apps, custom libraries,
            animations, and interactive responsive layouts. I want to mention first I&apos;ve started as a full-stack
            developer and working with popular open-source frameworks like Express, Fastyify, Gatsby, and NEXT.
          </p>
        </div>
      </div>

      <div>
        <div className={styles.icons}>{renderIcons()}</div>
      </div>
    </div>
  );
};
