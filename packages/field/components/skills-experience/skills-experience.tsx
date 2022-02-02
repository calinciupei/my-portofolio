import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./skills-experience.css";

export type SkillsExperienceProps = {};

export const SkillsExperience: FunctionComponent<SkillsExperienceProps> = () => {
  const classes = classnames(styles.main);

  return <div className={classes}>Skill Experience</div>;
};
