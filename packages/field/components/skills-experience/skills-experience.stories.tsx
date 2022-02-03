import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SkillsExperience } from "./skills-experience";

export default {
  title: "components/skills-experience",
  component: SkillsExperience
} as ComponentMeta<typeof SkillsExperience>;

export const main: ComponentStory<typeof SkillsExperience> = () => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%",
      minHeight: "1080px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px"
    }}
  >
    <SkillsExperience />
  </div>
);
