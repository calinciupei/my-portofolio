import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SkillsExperience } from "./skills-experience";

const iconsContent = [
  { title: "Html5", icon: "html5", url: "https://en.wikipedia.org/wiki/HTML5" },
  { title: "Css", icon: "css", url: "" },
  { title: "Javascript", icon: "javascript", url: "" },
  { title: "Typescript", icon: "typescript", url: "" },
  { title: "React", icon: "reactIcon", url: "" },
  { title: "Redux", icon: "redux", url: "" },
  { title: "ReduxSaga", icon: "reduxSaga", url: "" },
  { title: "Sass", icon: "node", url: "" },
  { title: "Node", icon: "express", url: "" },
  { title: "Express", icon: "graphql", url: "" },
  { title: "Graphql", icon: "jest", url: "" },
  { title: "Jest", icon: "firebase", url: "" },
  { title: "Firebase", icon: "jenkins", url: "" },
  { title: "Jenkins", icon: "github", url: "" },
  { title: "Github", icon: "sass", url: "" }
];
const content = [
  "My passion to create things that contributed with a very minuscular portion to the vast space of the internet started in high school by hacking and building my first website that represented my school.",
  "Fast-forward to today, I&apos;ve did remote work for huge corporations, advertising agencies, consulted startup companies, and had the privilege of working with talented people to create web products for consumer use and business.",
  "The main area of my expertise is front-end development, building scalable web apps, custom libraries, animations, and interactive responsive layouts. I want to mention first I&apos;ve started as a full-stack developer and working with popular open-source frameworks like Express, Fastyify, Gatsby, and NEXT."
];
const title = "Tools & <br /> Experience";

export default {
  title: "components/skills-experience",
  component: SkillsExperience,
  argTypes: {
    skills: {
      defaultValue: iconsContent,
      control: { type: "object" }
    },
    title: {
      defaultValue: title,
      control: { type: "text" }
    },
    content: {
      defaultValue: content,
      control: { type: "array" }
    }
  }
} as ComponentMeta<typeof SkillsExperience>;

export const main: ComponentStory<typeof SkillsExperience> = ({ ...props }) => (
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
    <SkillsExperience {...props} />
  </div>
);
