import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hero, HeroClick } from "./hero";
import { actions } from "@storybook/addon-actions";

import heroImage from "../../__mocks__/cc-portfolio.png";

const salute = "Hi <span>👋</span>,";
const name = "It’s Călin,";
const paragraph =
  "I’m a front end developer specializing in building exceptional web experiences and occasionally designing.";
const paragraphOne =
  "Problem solver with high attention to detail, interested in frontend and working with positive people.";
const paragraphTwo =
  "Fan of NFL, outdoor activities. A family person and proud father which is trying to achieve perfect dad jokes.";
const buttonLabel = "Resume";

export default {
  title: "components/hero",
  component: Hero,
  argTypes: {
    salute: {
      defaultValue: salute,
      control: { type: "text" }
    },
    name: {
      defaultValue: name,
      control: { type: "text" }
    },
    paragraph: {
      defaultValue: paragraph,
      control: { type: "text" }
    },
    paragraphOne: {
      defaultValue: paragraphOne,
      control: { type: "text" }
    },
    paragraphTwo: {
      defaultValue: paragraphTwo,
      control: { type: "text" }
    },
    buttonLabel: {
      defaultValue: buttonLabel,
      control: { type: "text" }
    }
  }
} as ComponentMeta<typeof Hero>;

const handleClick = actions({ onClick: "hero clicked" }) as unknown as HeroClick;

export const base: ComponentStory<typeof Hero> = ({ ...props }) => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%",
      minHeight: "1080px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Hero imgSrc={heroImage} {...props} onClick={() => {}} {...handleClick} />
  </div>
);
