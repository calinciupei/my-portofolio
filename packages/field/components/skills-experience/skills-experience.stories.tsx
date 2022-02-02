import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SkillsExperience } from "./skills-experience";

export default {
  title: "components/skills-experience",
  component: SkillsExperience
} as ComponentMeta<typeof SkillsExperience>;

export const main: ComponentStory<typeof SkillsExperience> = () => <SkillsExperience />;
