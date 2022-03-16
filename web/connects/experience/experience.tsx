import React, { FunctionComponent } from "react";
import { SkillsExperience } from "@crew/field";
import { ComponentProps } from "./props";

const Experience: FunctionComponent<ComponentProps> = ({ experience }) => {
  return <SkillsExperience {...experience} />;
};

export default Experience;
